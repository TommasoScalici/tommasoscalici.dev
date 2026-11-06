import { describe, expect, it } from 'vitest';

import { usesData } from './uses';

describe('usesData', () => {
    it('contains non-empty categories with valid items', () => {
        expect(usesData.length).toBeGreaterThan(0);
        for (const category of usesData) {
            expect(category.title).toBeDefined();
            expect(category.items.length).toBeGreaterThan(0);
        }
    });

    it('identifies affiliate and growth tools as sponsored', () => {
        const growthCategory = usesData.find(
            (c) => typeof c.title === 'object' && c.title.en.includes('Growth Tools'),
        );
        expect(growthCategory).toBeDefined();

        const ditto = growthCategory?.items.find((i) => i.name === 'Ditto Music');
        expect(ditto?.isSponsored).toBe(true);

        const groover = growthCategory?.items.find((i) => i.name === 'Groover');
        expect(groover?.isSponsored).toBe(true);
    });

    it('ensures all items have valid names and URLs start with https://', () => {
        for (const category of usesData) {
            for (const item of category.items) {
                expect(item.name.trim().length).toBeGreaterThan(0);
                if (item.url) {
                    expect(item.url).toMatch(/^https:\/\//);
                }
            }
        }
    });
});
