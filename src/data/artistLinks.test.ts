import { describe, expect, it } from 'vitest';

import { artistLinks } from './artistLinks';
import { platformOrder } from './platforms';

describe('artistLinks data', () => {
    it('should correctly merge platform data and map to artist link', () => {
        artistLinks.forEach((link) => {
            expect(link).toHaveProperty('label');
            expect(link).toHaveProperty('url');
            expect(link.url).toMatch(/^https?:\/\//); // Must be a valid http link
            expect(link).toHaveProperty('icon');
            expect(link).toHaveProperty('color');
            expect(link).toHaveProperty('hoverBorder');
        });
    });

    it('should contain all major platforms according to priority order', () => {
        // Ensure that there's an artist link for each defined platformOrder (all music platforms)
        platformOrder.forEach((platformKey) => {
            const definedIconKeys = artistLinks.map((link) => link.icon);
            expect(definedIconKeys).toContain(platformKey);
        });

        // Ensure no extra unmapped items exist unexpectedly
        expect(artistLinks.length).toBe(platformOrder.length);
    });
});
