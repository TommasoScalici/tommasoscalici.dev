import { describe, expect, it } from 'vitest';

import { platformOrder, platforms } from './platforms';

describe('platforms data', () => {
    it('should have all expected properties for each platform', () => {
        Object.values(platforms).forEach((platform) => {
            expect(platform).toHaveProperty('label');
            expect(platform).toHaveProperty('icon');
            expect(platform).toHaveProperty('color');
            expect(platform).toHaveProperty('hoverBorder');
        });
    });

    it('should ensure platformOrder matches existing keys exactly', () => {
        const platformKeys = Object.keys(platforms);

        // Every key in platformOrder must map to a valid platform entry
        platformOrder.forEach((key) => {
            expect(platforms[key]).toBeDefined();
        });

        // The number of keys ordered must equal exactly the number of define platforms.
        expect(platformOrder.length).toBe(platformKeys.length);
    });
});
