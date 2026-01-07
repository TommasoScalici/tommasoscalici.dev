export type ConsentStatus = 'granted' | 'denied' | 'pending';

const CONSENT_KEY = 'user-consent';

export const getConsent = (): ConsentStatus => {
    if (typeof window === 'undefined') return 'pending';
    return (localStorage.getItem(CONSENT_KEY) as ConsentStatus | null) ?? 'pending';
};

export const setConsent = (status: ConsentStatus) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(CONSENT_KEY, status);
    window.dispatchEvent(new Event('consent-update'));
};
