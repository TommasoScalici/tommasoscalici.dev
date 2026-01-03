import { describe, it, expect } from 'vitest';
import { ui, languages, defaultLang } from './ui';

describe('i18n UI Configuration', () => {
    it('should have English and Italian languages defined', () => {
        expect(languages).toHaveProperty('en');
        expect(languages).toHaveProperty('it');
    });

    it('should set English as default language', () => {
        expect(defaultLang).toBe('en');
    });

    it('should have matching keys for all languages', () => {
        const enKeys = Object.keys(ui.en).sort();
        const itKeys = Object.keys(ui.it).sort();

        expect(enKeys).toEqual(itKeys);
    });
});
