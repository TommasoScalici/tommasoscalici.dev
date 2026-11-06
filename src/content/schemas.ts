import { z } from 'astro/zod';

// ============= SHARED SCHEMAS =============

// Helper for safe string validation with configurable bounds
export const safeString = (minLength = 1, maxLength = 500) =>
    z
        .string()
        .trim()
        .min(minLength, `Must be at least ${minLength.toString()} characters`)
        .max(maxLength, `Must be at most ${maxLength.toString()} characters`);

// Helper for safe URL validation with protocol restriction
export const safeUrl = () =>
    z
        .string()
        .regex(/^https:\/\/[^\s/$.?#].[^\s]*$/, { message: 'Must be a valid HTTPS URL' })
        .refine((url) => url.startsWith('https://'), {
            message: 'URL must use HTTPS protocol for security',
        });

// Helper for safe internal route or HTTPS URL validation
export const safeRouteOrUrl = (minLength = 1, maxLength = 500) =>
    z.union([
        safeUrl(),
        safeString(minLength, maxLength).refine((val) => val.startsWith('/'), {
            message: 'Internal route must start with /',
        }),
    ]);

// Shared multilingual string schema (for i18n content)
export const multilingualString = (minLength = 1, maxLength = 500) =>
    z.union([
        safeString(minLength, maxLength),
        z.record(z.enum(['en', 'it']), safeString(minLength, maxLength)),
    ]);

// Shared music links schema
export const musicLinksSchema = z
    .object({
        spotify: safeUrl().optional(),
        apple: safeUrl().optional(),
        deezer: safeUrl().optional(),
        tidal: safeUrl().optional(),
        amazon: safeUrl().optional(),
        youtube: safeUrl().optional(),
        bandcamp: safeUrl().optional(),
    })
    .refine((links) => Object.values(links).some((link) => typeof link === 'string'), {
        message: 'At least one music platform link must be provided',
    });

// Year validation (accepts current year +/- 10 years for releases)
export const yearSchema = z
    .string()
    .trim()
    .regex(/^\d{4}$/, 'Year must be a 4-digit number')
    .refine((year) => {
        const yearNum = parseInt(year);
        const currentYear = new Date().getFullYear();
        return yearNum >= currentYear - 50 && yearNum <= currentYear + 5;
    }, 'Year must be within reasonable range');

// Track schema for album tracks
export const trackSchema = z.object({
    name: safeString(1, 200),
    duration: z
        .string()
        .regex(/^PT\d+M\d+S$/, 'Must be ISO 8601 duration format, e.g. PT3M50S')
        .optional(),
    isrcCode: z
        .string()
        .regex(/^[A-Z]{2}[A-Z0-9]{3}\d{7}$/, 'Must be valid ISRC code format')
        .optional(),
});
