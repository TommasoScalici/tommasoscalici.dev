import React, { useEffect } from 'react';

import { getConsent } from '../lib/consent';

export const ConsentController: React.FC = () => {
    useEffect(() => {
        const updateConsent = (event?: Event) => {
            const consent = getConsent();
            const isUpdateEvent = !!event;

            if (consent === 'granted') {
                // GA4: Grant Consent
                if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                    window.gtag('consent', 'update', {
                        ad_storage: 'granted',
                        ad_user_data: 'granted',
                        ad_personalization: 'granted',
                        analytics_storage: 'granted',
                    });

                    // Only trigger page_view if this is a reactive update (user just accepted)
                    // If it's initial load, the head script already handles the page_view.
                    if (isUpdateEvent) {
                        window.gtag('event', 'page_view');
                    }
                }

                // Meta Pixel: Grant Consent
                if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
                    window.fbq('consent', 'grant');
                    if (isUpdateEvent) {
                        window.fbq('track', 'PageView');
                    }
                }

                // TikTok Pixel: Enable & Load
                if (typeof window !== 'undefined' && window.ttq) {
                    window.ttq.enableCookie();

                    if (isUpdateEvent && window.ANALYTICS_CONFIG?.tiktokPixelId) {
                        // If update, we need to manually load and fire page view because head script skipped it
                        window.ttq.load(window.ANALYTICS_CONFIG.tiktokPixelId);
                        window.ttq.page();
                    }
                }
            } else {
                // Revoke Consent

                // GA4: Deny Consent
                if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                    window.gtag('consent', 'update', {
                        ad_storage: 'denied',
                        ad_user_data: 'denied',
                        ad_personalization: 'denied',
                        analytics_storage: 'denied',
                    });
                }

                // Meta Pixel: Revoke Consent
                if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
                    window.fbq('consent', 'revoke');
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
