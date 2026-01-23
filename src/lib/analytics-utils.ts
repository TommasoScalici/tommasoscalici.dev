import type { ConsentStatus } from './consent';

export interface GtagConsentSettings {
    ad_storage: 'granted' | 'denied';
    ad_user_data: 'granted' | 'denied';
    ad_personalization: 'granted' | 'denied';
    analytics_storage: 'granted' | 'denied';
}

export const getGtagConsentPayload = (consent: ConsentStatus): GtagConsentSettings => {
    // pending should be treated as denied for privacy
    const status = consent === 'granted' ? 'granted' : 'denied';
    return {
        ad_storage: status,
        ad_user_data: status,
        ad_personalization: status,
        analytics_storage: status,
    };
};

export const getPixelConsentAction = (consent: ConsentStatus): 'grant' | 'revoke' => {
    return consent === 'granted' ? 'grant' : 'revoke';
};
