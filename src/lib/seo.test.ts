import { describe, expect, it } from 'vitest';

import { getLocalizedUrl, normalizePath } from './seo';

describe('seo utils', () => {
    describe('normalizePath', () => {
        it('should normalize root path', () => {
            expect(normalizePath('/')).toBe('/');
        });

        it('should normalize italian root path', () => {
            expect(normalizePath('/it/')).toBe('/');
        });

        it('should normalize simple path', () => {
            expect(normalizePath('/uses')).toBe('/uses/');
        });

        it('should normalize simple path with trailing slash', () => {
            expect(normalizePath('/uses/')).toBe('/uses/');
        });

        it('should normalize italian path', () => {
            expect(normalizePath('/it/uses')).toBe('/uses/');
        });

        it('should normalize italian path with trailing slash', () => {
            expect(normalizePath('/it/uses/')).toBe('/uses/');
        });

        it('should handle nested paths', () => {
            expect(normalizePath('/blog/post-1')).toBe('/blog/post-1/');
            expect(normalizePath('/it/blog/post-1/')).toBe('/blog/post-1/');
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
