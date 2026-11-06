import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

import {
    multilingualString,
    musicLinksSchema,
    safeRouteOrUrl,
    safeString,
    safeUrl,
    trackSchema,
    yearSchema,
} from './content/schemas';
import { getPlaylistCover } from './lib/spotify';

export {
    multilingualString,
    musicLinksSchema,
    safeRouteOrUrl,
    safeString,
    safeUrl,
    trackSchema,
    yearSchema,
};

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
        demoUrl: z
            .union([safeRouteOrUrl(1, 200), z.record(z.enum(['en', 'it']), safeRouteOrUrl(1, 200))])
            .optional(),
    }),
});

const music = defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/music' }),
    schema: ({ image }) =>
        z
            .object({
                title: safeString(1, 200),
                year: yearSchema,
                releaseDate: z
                    .string()
                    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Must be YYYY-MM-DD format')
                    .optional(),
                genre: safeString(1, 100),
                coverImage: image(),
                type: z.enum(['Album', 'EP', 'Single']),
                links: musicLinksSchema.optional(),
                tracks: z.array(trackSchema).optional(),
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

                // Fetch thumbnails for each playlist with caching & fallback
                const enrichedPlaylists = await Promise.all(
                    playlistData.map(async (playlist) => ({
                        ...playlist,
                        coverImage: await getPlaylistCover(playlist.spotifyId),
                    })),
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
                    coverImage: safeRouteOrUrl(),
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
