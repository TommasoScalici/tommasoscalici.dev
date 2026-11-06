import { describe, expect, it } from 'vitest';

import { TAX_CODE_CONFIG, TAX_CODE_STRINGS } from './taxcode';

describe('taxcode data configuration', () => {
    it('TAX_CODE_CONFIG contains valid HTTPS URLs and support email', () => {
        expect(TAX_CODE_CONFIG.playStoreUrl).toMatch(/^https:\/\/play\.google\.com\//);
        expect(TAX_CODE_CONFIG.repoUrl).toMatch(/^https:\/\/github\.com\//);
        expect(TAX_CODE_CONFIG.googleUserPolicyUrl).toMatch(/^https:\/\//);
        expect(TAX_CODE_CONFIG.supportEmail).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        expect(TAX_CODE_CONFIG.developerName).toBe('Tommaso Scalici');
    });

    it('TAX_CODE_STRINGS provides complete Italian and English localizations', () => {
        expect(TAX_CODE_STRINGS.seo.title.en).toBeTruthy();
        expect(TAX_CODE_STRINGS.seo.title.it).toBeTruthy();
        expect(TAX_CODE_STRINGS.seo.title.en).not.toBe(TAX_CODE_STRINGS.seo.title.it);

        expect(TAX_CODE_STRINGS.seo.description.en).toBeTruthy();
        expect(TAX_CODE_STRINGS.seo.description.it).toBeTruthy();

        expect(TAX_CODE_STRINGS.hero.appNamePrefix).toBe('Tax Code');
        expect(TAX_CODE_STRINGS.hero.appNameSuffix).toBe('by Tommaso Scalici');

        expect(TAX_CODE_STRINGS.hero.disclaimer.en).toContain('Not affiliated');
        expect(TAX_CODE_STRINGS.hero.disclaimer.it).toContain('Non affiliata');
    });

    it('TAX_CODE_STRINGS.features.items has valid icons and bilingual titles and descriptions', () => {
        const features = TAX_CODE_STRINGS.features.items;
        expect(features.length).toBeGreaterThanOrEqual(4);

        for (const feature of features) {
            expect(feature.icon).toBeTruthy();
            expect(feature.title.en.trim().length).toBeGreaterThan(0);
            expect(feature.title.it.trim().length).toBeGreaterThan(0);
            expect(feature.description.en.trim().length).toBeGreaterThan(0);
            expect(feature.description.it.trim().length).toBeGreaterThan(0);
        }
    });

    it('TAX_CODE_STRINGS.legal.links provides valid slugs and localized content', () => {
        const legalLinks = TAX_CODE_STRINGS.legal.links;
        expect(legalLinks.length).toBeGreaterThanOrEqual(2);

        for (const link of legalLinks) {
            expect(link.slug).toMatch(/^[a-z0-9-]+$/);
            expect(link.icon).toBeTruthy();
            expect(link.title.en).toBeTruthy();
            expect(link.title.it).toBeTruthy();
            expect(link.description.en).toBeTruthy();
            expect(link.description.it).toBeTruthy();
        }
    });
});
