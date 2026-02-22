import { describe, expect, it } from 'vitest';

import { getCombinedSchema } from './json-ld';

describe('json-ld', () => {
    describe('getCombinedSchema', () => {
        const url = new URL('https://tommasoscalici.dev/about');
        const image = 'https://tommasoscalici.dev/profile.webp';

        it('should return a schema context and graph', () => {
            const schema = getCombinedSchema(url, image);

            expect(schema['@context']).toBe('https://schema.org');
            expect(Array.isArray(schema['@graph'])).toBe(true);
        });

        it('should correctly build the identity schema within the graph', () => {
            const schema = getCombinedSchema(url, image);
            const graph = schema['@graph'] as Record<string, unknown>[];
            const identityNode = graph.find((node) => node['@type'] === 'Person');

            expect(identityNode).toBeDefined();
            expect(identityNode?.['@id']).toBe('https://tommasoscalici.dev/#person');
            expect(identityNode?.name).toBe('Tommaso Scalici');
            expect(identityNode?.url).toBe('https://tommasoscalici.dev');
            expect(identityNode?.image).toBe(image);
            expect(identityNode?.mainEntityOfPage).toEqual({
                '@type': 'WebPage',
                '@id': 'https://tommasoscalici.dev/about',
            });
            expect(identityNode?.knowsAbout).toContain('TypeScript');
            expect(identityNode?.knowsAbout).toContain('Progressive Metal');
            expect((identityNode?.worksFor as Record<string, string>).name).toBe('BC Soft S.r.l.');
        });

        it('should include music releases from the data file', () => {
            const schema = getCombinedSchema(url, image);
            const graph = schema['@graph'] as Record<string, unknown>[];
            const musicNodes = graph.filter((node) => node['@type'] === 'MusicAlbum');

            expect(musicNodes.length).toBeGreaterThan(0);

            // Check properties of a specific known release to ensure mapping is correct
            const sinestesie = musicNodes.find((album) => album.name === 'Sinestesie');
            expect(sinestesie).toBeDefined();
            expect(sinestesie?.datePublished).toBe('2026-02-06');
            expect(sinestesie?.genre).toContain('Progressive Metal');
            expect((sinestesie?.track as unknown[]).length).toBe(4);
            expect((sinestesie?.byArtist as Record<string, string>)['@id']).toBe(
                'https://tommasoscalici.dev/#person',
            );
        });
    });
});
