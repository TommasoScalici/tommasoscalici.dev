import React, { useEffect } from 'react';

import { getGtagConsentPayload, getPixelConsentAction } from '../lib/analytics-utils';
import { getConsent } from '../lib/consent';

export const ConsentController: React.FC = () => {
    useEffect(() => {
        const updateConsent = (event?: Event) => {
            const consent = getConsent();
            const isUpdateEvent = !!event;

            // Common payloads
            const gtagPayload = getGtagConsentPayload(consent);
            const pixelAction = getPixelConsentAction(consent);

            if (consent === 'granted') {
                // GA4: Grant Consent
                if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                    window.gtag('consent', 'update', gtagPayload);

                    // Only trigger page_view if this is a reactive update (user just accepted)
                    // If it's initial load, the head script already handles the page_view.
                    if (isUpdateEvent) {
                        window.gtag('event', 'page_view');
                    }
                }

                // Meta Pixel: Grant Consent
                if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
                    window.fbq('consent', pixelAction);
                    if (isUpdateEvent) {
                        window.fbq('track', 'PageView');
                    }
                }

                // TikTok Pixel: Enable & Load
                if (typeof window !== 'undefined' && window.ttq) {
                    window.ttq.enableCookie();

                    if (isUpdateEvent && window.ANALYTICS_CONFIG?.tiktokPixelId) {
                        const pixelId = window.ANALYTICS_CONFIG.tiktokPixelId;
                        // Check if already loaded to prevent "Duplicate Pixel ID" warning
                        // @ts-expect-error - _i is internal to the TikTok SDK and not in standard types
                        if (!window.ttq._i?.[pixelId]) {
                            window.ttq.load(pixelId);
                        }
                        window.ttq.page();
                    }
                }
            } else {
                // Revoke Consent

                // GA4: Deny Consent
                if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                    window.gtag('consent', 'update', gtagPayload);
                }

                // Meta Pixel: Revoke Consent
                if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
                    window.fbq('consent', pixelAction);
                }

                // TikTok Pixel: Disable Cookie
                if (typeof window !== 'undefined' && window.ttq) {
                    window.ttq.disableCookie();
                }
            }
        };

        // Check on mount
        updateConsent();

        // Listen for updates
        window.addEventListener('consent-update', updateConsent);

        return () => {
            window.removeEventListener('consent-update', updateConsent);
        };
    }, []);

    return null;
};
