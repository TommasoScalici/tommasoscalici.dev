import { describe, expect, it } from 'vitest';

import { getLocalizedUrl, normalizePath } from './seo';

describe('seo utils', () => {
    describe('normalizePath', () => {
        describe('default (preserve language)', () => {
            it('should normalize root path', () => {
                expect(normalizePath('/')).toBe('/');
            });

            it('should normalize italian root path without stripping', () => {
                expect(normalizePath('/it/')).toBe('/it/');
            });

            it('should normalize simple path', () => {
                expect(normalizePath('/uses')).toBe('/uses/');
            });

            it('should normalize italian path without stripping', () => {
                expect(normalizePath('/it/uses')).toBe('/it/uses/');
            });

            it('should handle nested paths', () => {
                expect(normalizePath('/it/blog/post-1/')).toBe('/it/blog/post-1/');
            });
        });

        describe('stripLanguage: true', () => {
            it('should strip italian root path', () => {
                expect(normalizePath('/it/', true)).toBe('/');
            });

            it('should strip italian simple path', () => {
                expect(normalizePath('/it/uses', true)).toBe('/uses/');
            });

            it('should handle nested paths', () => {
                expect(normalizePath('/it/blog/post-1/', true)).toBe('/blog/post-1/');
            });
        });

        it('should handle paths with query parameters or fragments if accidentally passed', () => {
            expect(normalizePath('/it/uses?query=1', true)).toBe('/uses?query=1/');
            expect(normalizePath('/blog#fragment')).toBe('/blog#fragment/');
        });
    });

    describe('getLocalizedUrl', () => {
        const site = 'https://example.com';

        it('should generate english url for root', () => {
            expect(getLocalizedUrl('/', site, 'en')).toBe('https://example.com/');
        });

        it('should generate italian url for root', () => {
            expect(getLocalizedUrl('/', site, 'it')).toBe('https://example.com/it/');
        });

        it('should generate italian url for root input from italian path', () => {
            expect(getLocalizedUrl('/it/', site, 'it')).toBe('https://example.com/it/');
        });

        it('should generate english url for subpage', () => {
            expect(getLocalizedUrl('/uses', site, 'en')).toBe('https://example.com/uses/');
            expect(getLocalizedUrl('/uses/', site, 'en')).toBe('https://example.com/uses/');
        });

        it('should generate italian url for subpage', () => {
            expect(getLocalizedUrl('/uses', site, 'it')).toBe('https://example.com/it/uses/');
            expect(getLocalizedUrl('/it/uses/', site, 'it')).toBe('https://example.com/it/uses/');
        });

        it('should generate english url from italian input', () => {
            expect(getLocalizedUrl('/it/uses/', site, 'en')).toBe('https://example.com/uses/');
        });
    });
});
