import { describe, expect, it } from 'vitest';

import { secondarySocials } from './socials';

describe('socials data', () => {
    it('should have all expected properties for each social link', () => {
        secondarySocials.forEach((social) => {
            expect(social).toHaveProperty('label');
            expect(social).toHaveProperty('url');
            expect(social.url).toMatch(/^https?:\/\//); // Must be a valid http link
            expect(social).toHaveProperty('icon');
            expect(social).toHaveProperty('color');
            expect(social).toHaveProperty('hoverBorder');
        });
    });

    it('should uniquely identify social URLs', () => {
        const urls = secondarySocials.map((s) => s.url);
        const uniqueUrls = new Set(urls);
        expect(urls.length).toBe(uniqueUrls.size);
    });
});
