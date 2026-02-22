import { describe, expect, it } from 'vitest';

import { getLocalizedContent } from './i18n-utils';

describe('i18n-utils', () => {
    describe('getLocalizedContent', () => {
        it('should return string unchanged if input is string', () => {
            const input = 'Hello';
            expect(getLocalizedContent(input, 'en')).toBe('Hello');
            expect(getLocalizedContent(input, 'it')).toBe('Hello');
        });

        it('should return empty string if input is undefined', () => {
            expect(getLocalizedContent(undefined, 'en')).toBe('');
        });

        it('should return localized content if available', () => {
            const content = {
                en: 'Hello',
                it: 'Ciao',
            };
            expect(getLocalizedContent(content, 'en')).toBe('Hello');
            expect(getLocalizedContent(content, 'it')).toBe('Ciao');
        });

        it('should fall back to default lang if requested lang is missing', () => {
            const content = {
                en: 'Hello',
            };
            expect(getLocalizedContent(content, 'it')).toBe('Hello');
        });

        it('should return empty string if neither lang nor fallback exists in object', () => {
            const content = {
                fr: 'Bonjour',
            };
            expect(getLocalizedContent(content, 'it', 'en')).toBe('');
        });

        it('should correctly return nested objects if the value is an object', () => {
            const content = {
                en: { title: 'Hello', description: 'World' },
                it: { title: 'Ciao', description: 'Mondo' },
            };
            expect(getLocalizedContent(content, 'en')).toEqual({
                title: 'Hello',
                description: 'World',
            });
            expect(getLocalizedContent(content, 'it')).toEqual({
                title: 'Ciao',
                description: 'Mondo',
            });
        });

        it('should correctly handle arrays if provided as content', () => {
            // Arrays are typeof 'object', so the function tries to index them by lang
            // Since arrays don't have 'en' or 'it' keys, it will return empty string.
            const content = ['Hello', 'World'];
            expect(getLocalizedContent(content as unknown as Record<string, string>, 'en')).toBe(
                '',
            );
        });
    });
});
