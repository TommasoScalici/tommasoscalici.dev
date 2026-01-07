import React, { useEffect } from 'react';

import { getConsent } from '../lib/consent';

export const ConsentController: React.FC = () => {
    useEffect(() => {
        const updateConsent = () => {
            const consent = getConsent();

            if (consent === 'granted') {
                // GA4: Grant Consent (Google Consent Mode v2)
                if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                    window.gtag('consent', 'update', {
                        ad_storage: 'granted',
                        ad_user_data: 'granted',
                        ad_personalization: 'granted',
                        analytics_storage: 'granted',
                    });

                    // Manually trigger page_view to ensure immediate tracking with new consent
                    window.gtag('event', 'page_view');
                }

                // Meta Pixel: Grant Consent
                if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
                    window.fbq('consent', 'grant');
                    // Re-fire PageView to capture this session now that we have consent
                    // (The initial PageView in head was likely dropped or anonymized)
                    window.fbq('track', 'PageView');
                }

                // TikTok Pixel: Enable Cookie
                if (typeof window !== 'undefined' && window.ttq) {
                    window.ttq.enableCookie();
                    // Re-fire PageView
                    if (typeof window.ttq.page === 'function') {
                        window.ttq.page();
                    }
                }
            } else {
                // Optional: Explicit denial updates if logic allows revocation (mostly handled by initial state though)
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
