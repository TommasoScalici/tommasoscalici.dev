import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.union([z.string(), z.record(z.string())]),
        description: z.union([z.string(), z.record(z.string())]),
        techStack: z.array(z.string()),
        featured: z.boolean().default(false),
        repoUrl: z.string().url(),
        playStoreUrl: z.string().url().optional(),
    }),
});

const music = defineCollection({
    type: 'data',
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            year: z.string(),
            genre: z.string(),
            coverImage: image(),
            type: z.enum(['Album', 'EP', 'Single']),
            links: z
                .object({
                    spotify: z.string().url().optional(),
                    apple: z.string().url().optional(),
                    deezer: z.string().url().optional(),
                    tidal: z.string().url().optional(),
                    amazon: z.string().url().optional(),
                    youtube: z.string().url().optional(),
                    bandcamp: z.string().url().optional(),
                })
                .optional(), // Links might be empty for upcoming releases
            isUpcoming: z.boolean().optional(),
            presaveLink: z.string().url().optional(),
        }),
});

const bio = defineCollection({
    type: 'data',
    schema: z.object({
        heroTitle: z.string(),
        heroSubtitle: z.string(),
        role: z.string(),
        title: z.string(),
        description: z.string(),
        paragraph1: z.string(),
        paragraph2: z.string(),
    }),
});

const playlists = defineCollection({
    type: 'data',
    schema: ({ image }) =>
        z.array(
            z.object({
                title: z.string(),
                description: z.string(),
                coverImage: image(), // Helper for image metadata
                spotifyId: z.string(),
                genre: z.string(),
            }),
        ),
});

const legal = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
    }),
});

export const collections = {
    projects,
    music,
    bio,
    playlists,
    legal,
};
