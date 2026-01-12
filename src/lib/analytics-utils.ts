// Ideally we could share this type, but re-declaring for loosely coupled utility is fine
export type ConsentStatus = 'granted' | 'denied' | 'pending';

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
