import { describe, expect, it } from 'vitest';

import { getGtagConsentPayload, getPixelConsentAction } from './analytics-utils';

describe('analytics-utils', () => {
    describe('getGtagConsentPayload', () => {
        it('should return all granted when granted', () => {
            expect(getGtagConsentPayload('granted')).toEqual({
                ad_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted',
                analytics_storage: 'granted',
            });
        });

        it('should return all denied when denied', () => {
            expect(getGtagConsentPayload('denied')).toEqual({
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
            });
        });

        it('should return all denied when pending', () => {
            expect(getGtagConsentPayload('pending')).toEqual({
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
            });
        });
    });

    describe('getPixelConsentAction', () => {
        it('should return grant when granted', () => {
            expect(getPixelConsentAction('granted')).toBe('grant');
        });

        it('should return revoke when denied', () => {
            expect(getPixelConsentAction('denied')).toBe('revoke');
        });

        it('should return revoke when pending', () => {
            expect(getPixelConsentAction('pending')).toBe('revoke');
        });
    });
});
