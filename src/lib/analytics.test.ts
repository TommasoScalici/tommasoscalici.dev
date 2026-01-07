import { afterEach, beforeEach, describe, expect, it, type Mock, vi } from 'vitest';

import { trackEvent } from './analytics';

interface CustomWindow extends Omit<Window, 'ttq' | 'gtag' | 'fbq'> {
    gtag: Mock;
    fbq: Mock;
    ttq: {
        track: Mock;
        enableCookie: Mock;
        disableCookie: Mock;
        load: Mock;
        page: Mock;
        [key: string]: unknown;
    };
}

declare let window: CustomWindow;

describe('analytics', () => {
    beforeEach(() => {
        // Mock global window objects
        const mockGtag = vi.fn();
        const mockFbq = vi.fn();
        const mockTtqTrack = vi.fn();

        vi.stubGlobal('window', {
            gtag: mockGtag,
            fbq: mockFbq,
            ttq: {
                track: mockTtqTrack,
            },
        });
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it('should track generic events to all platforms', () => {
        trackEvent('view_item', { content_name: 'Test Item' });

        // GA4
        expect(window.gtag).toHaveBeenCalledWith('event', 'view_item', {
            content_name: 'Test Item',
        });

        // Facebook
        expect(window.fbq).toHaveBeenCalledWith('track', 'ViewContent', {
            content_name: 'Test Item',
        });

        // TikTok
        expect(window.ttq.track).toHaveBeenCalledWith('ViewContent', { content_name: 'Test Item' });
    });

    it('should map click_deep_link to correct platform events', () => {
        trackEvent('click_deep_link');

        expect(window.fbq).toHaveBeenCalledWith('track', 'Lead', undefined);
        expect(window.ttq.track).toHaveBeenCalledWith('Download', {});
    });

    it('should handle missing platforms gracefully', () => {
        vi.stubGlobal('window', {}); // No analytics functions

        // Should not throw
        expect(() => {
            trackEvent('view_item');
        }).not.toThrow();
    });

    it('should transform content_ids for TikTok', () => {
        trackEvent('view_item', { content_ids: ['123', '456'] });

        expect(window.ttq.track).toHaveBeenCalledWith('ViewContent', {
            content_ids: ['123', '456'],
            content_id: '123', // Extracted first ID
        });
    });
});
