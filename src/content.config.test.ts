import { describe, expect, it } from 'vitest';

import {
    multilingualString,
    musicLinksSchema,
    safeRouteOrUrl,
    safeString,
    safeUrl,
    trackSchema,
    yearSchema,
} from './content/schemas';

describe('content.config Zod schemas', () => {
    describe('safeString', () => {
        const schema = safeString(2, 10);

        it('validates strings within bounds', () => {
            expect(schema.parse('hello')).toBe('hello');
        });

        it('trims whitespace', () => {
            expect(schema.parse('  hello  ')).toBe('hello');
        });

        it('rejects strings shorter than minLength', () => {
            expect(() => schema.parse('a')).toThrow();
        });

        it('rejects strings longer than maxLength', () => {
            expect(() => schema.parse('this is way too long')).toThrow();
        });
    });

    describe('safeUrl', () => {
        const schema = safeUrl();

        it('accepts valid HTTPS URLs', () => {
            expect(schema.parse('https://tommasoscalici.dev')).toBe('https://tommasoscalici.dev');
            expect(schema.parse('https://github.com/TommasoScalici')).toBe(
                'https://github.com/TommasoScalici',
            );
        });

        it('rejects insecure HTTP URLs', () => {
            expect(() => schema.parse('http://insecure.com')).toThrow();
        });

        it('rejects invalid URL strings', () => {
            expect(() => schema.parse('not-a-url')).toThrow();
            expect(() => schema.parse('ftp://example.com')).toThrow();
        });
    });

    describe('safeRouteOrUrl', () => {
        const schema = safeRouteOrUrl();

        it('accepts internal relative routes starting with /', () => {
            expect(schema.parse('/apps/taxcode')).toBe('/apps/taxcode');
            expect(schema.parse('/it/uses/')).toBe('/it/uses/');
        });

        it('accepts external HTTPS URLs', () => {
            expect(schema.parse('https://open.spotify.com')).toBe('https://open.spotify.com');
        });

        it('rejects relative paths not starting with /', () => {
            expect(() => schema.parse('apps/taxcode')).toThrow();
        });
    });

    describe('multilingualString', () => {
        const schema = multilingualString(1, 100);

        it('accepts a direct string', () => {
            expect(schema.parse('Direct Text')).toBe('Direct Text');
        });

        it('accepts an { en, it } localized object', () => {
            const parsed = schema.parse({ en: 'English', it: 'Italiano' });
            expect(parsed).toEqual({ en: 'English', it: 'Italiano' });
        });

        it('rejects unknown language keys', () => {
            expect(() => schema.parse({ fr: 'Francais' })).toThrow();
        });
    });

    describe('trackSchema', () => {
        it('accepts valid track with ISO 8601 duration and valid ISRC', () => {
            const validTrack = {
                name: 'The Milky Way',
                duration: 'PT5M30S',
                isrcCode: 'QZDA42404515',
            };
            expect(trackSchema.parse(validTrack)).toEqual(validTrack);
        });

        it('accepts track with optional fields omitted', () => {
            const minimalTrack = { name: 'Interlude' };
            expect(trackSchema.parse(minimalTrack)).toEqual(minimalTrack);
        });

        it('rejects non-ISO duration formats like MM:SS', () => {
            expect(() =>
                trackSchema.parse({
                    name: 'Bad Duration',
                    duration: '05:30',
                }),
            ).toThrow();
        });

        it('rejects malformed ISRC codes', () => {
            expect(() =>
                trackSchema.parse({
                    name: 'Bad ISRC',
                    isrcCode: 'INVALID-ISRC',
                }),
            ).toThrow();
        });
    });

    describe('musicLinksSchema', () => {
        it('accepts links object when at least one platform is present', () => {
            const links = {
                spotify: 'https://open.spotify.com/album/123',
                apple: 'https://music.apple.com/album/123',
            };
            expect(musicLinksSchema.parse(links)).toEqual(links);
        });

        it('rejects links object when all platforms are undefined or empty', () => {
            expect(() => musicLinksSchema.parse({})).toThrow(
                /At least one music platform link must be provided/,
            );
        });
    });

    describe('yearSchema', () => {
        it('accepts current or recent 4-digit years', () => {
            expect(yearSchema.parse('2026')).toBe('2026');
            expect(yearSchema.parse('2020')).toBe('2020');
        });

        it('rejects invalid year formats', () => {
            expect(() => yearSchema.parse('26')).toThrow();
            expect(() => yearSchema.parse('abcd')).toThrow();
            expect(() => yearSchema.parse('2099')).toThrow();
        });
    });
});
