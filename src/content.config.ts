import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

// ============= SHARED SCHEMAS =============

// Helper for safe string validation with configurable bounds
const safeString = (minLength = 1, maxLength = 500) =>
    z
        .string()
        .trim()
        .min(minLength, `Must be at least ${minLength.toString()} characters`)
        .max(maxLength, `Must be at most ${maxLength.toString()} characters`);

// Helper for safe URL validation with protocol restriction
const safeUrl = () =>
    z
        .string()
        .regex(/^https:\/\/[^\s/$.?#].[^\s]*$/, { message: 'Must be a valid HTTPS URL' })
        .refine((url) => url.startsWith('https://'), {
            message: 'URL must use HTTPS protocol for security',
        });

// Shared multilingual string schema (for i18n content)
const multilingualString = (minLength = 1, maxLength = 500) =>
    z.union([
        safeString(minLength, maxLength),
        z.record(z.enum(['en', 'it']), safeString(minLength, maxLength)),
    ]);

// Shared music links schema
const musicLinksSchema = z
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
const yearSchema = z
    .string()
    .trim()
    .regex(/^\d{4}$/, 'Year must be a 4-digit number')
    .refine((year) => {
        const yearNum = parseInt(year);
        const currentYear = new Date().getFullYear();
        return yearNum >= currentYear - 50 && yearNum <= currentYear + 5;
    }, 'Year must be within reasonable range');

// ============= COLLECTIONS =============

const projects = defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
    schema: z.object({
        title: multilingualString(1, 200),
        description: multilingualString(10, 1000),
        techStack: z
            .array(safeString(1, 50))
            .min(1, 'At least one technology must be listed')
            .max(20, 'Maximum 20 technologies allowed'),
        featured: z.boolean().default(false),
        repoUrl: safeUrl(),
        playStoreUrl: safeUrl().optional(),
    }),
});

const music = defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/music' }),
    schema: ({ image }) =>
        z
            .object({
                title: safeString(1, 200),
                year: yearSchema,
                genre: safeString(1, 100),
                coverImage: image(),
                type: z.enum(['Album', 'EP', 'Single']),
                links: musicLinksSchema.optional(),
                isUpcoming: z.boolean().optional(),
                presaveLink: safeUrl().optional(),
            })
            .refine(
                (data) => {
                    // If upcoming, must have presaveLink OR links
                    if (data.isUpcoming === true) {
                        return !!(data.presaveLink ?? data.links);
                    }
                    // If not upcoming, must have links
                    return !!data.links;
                },
                {
                    message:
                        'Upcoming releases must have presaveLink or links; released music must have links',
                },
            ),
});

const bio = defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/bio' }),
    schema: z.object({
        heroTitle: safeString(5, 200),
        heroSubtitle: safeString(5, 200),
        role: safeString(3, 200),
        title: safeString(5, 200),
        description: safeString(10, 1000),
        paragraph1: safeString(50, 2000),
        paragraph2: safeString(50, 2000),
    }),
});

const playlists = defineCollection({
    loader: async () => {
        const locales = ['en', 'it'];
        const base = './src/content/playlists';
        const entries = [];

        for (const lang of locales) {
            const filePath = join(base, `${lang}.json`);
            try {
                const content = await readFile(filePath, 'utf-8');
                const playlistData = JSON.parse(content) as {
                    spotifyId: string;
                    title: string;
                    description: string;
                    genre: string;
                    [key: string]: string | number | boolean | undefined;
                }[];

                // Fetch thumbnails for each playlist in the array
                const enrichedPlaylists = await Promise.all(
                    playlistData.map(async (playlist) => {
                        const response = await fetch(
                            `https://open.spotify.com/oembed?url=https://open.spotify.com/playlist/${playlist.spotifyId}`,
                        );
                        const oEmbedData = (response.ok ? await response.json() : {}) as Partial<
                            Record<string, string>
                        >;
                        return {
                            ...playlist,
                            coverImage: oEmbedData.thumbnail_url ?? '',
                        };
                    }),
                );

                entries.push({
                    id: lang,
                    playlists: enrichedPlaylists,
                });
            } catch (error) {
                console.error(`Error loading playlists for ${lang}:`, error);
            }
        }
        return entries;
    },
    schema: z.object({
        playlists: z
            .array(
                z.object({
                    title: safeString(1, 200),
                    description: safeString(10, 500),
                    coverImage: z.string().regex(/^https:\/\/[^\s/$.?#].[^\s]*$/, {
                        message: 'Invalid Spotify thumbnail URL',
                    }),
                    spotifyId: z
                        .string()
                        .trim()
                        .regex(/^[a-zA-Z0-9]+$/, 'Spotify ID must be alphanumeric')
                        .min(10, 'Spotify ID too short')
                        .max(50, 'Spotify ID too long'),
                    genre: safeString(2, 100),
                }),
            )
            .min(1, 'At least one playlist must be defined'),
    }),
});

const legal = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
    schema: z.object({
        title: safeString(5, 200),
        description: safeString(20, 1000),
    }),
});

export const collections = {
    projects,
    music,
    bio,
    playlists,
    legal,
};
