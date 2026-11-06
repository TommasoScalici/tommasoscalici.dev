import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { DEFAULT_FALLBACK_COVER, getPlaylistCover, STATIC_PLAYLIST_COVERS } from './spotify';

describe('getPlaylistCover', () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it('returns thumbnail_url when oEmbed responds with 200 and valid JSON', async () => {
        const testId = 'test-playlist-123';
        const expectedThumbnail = 'https://image-cdn.spotify.com/test.jpg';

        vi.stubGlobal(
            'fetch',
            vi.fn().mockResolvedValue({
                ok: true,
                status: 200,
                json: () => Promise.resolve({ thumbnail_url: expectedThumbnail }),
            }),
        );

        const result = await getPlaylistCover(testId);
        expect(result).toBe(expectedThumbnail);
    });

    it('returns known static fallback when fetch throws a network error', async () => {
        const knownId = '0B9L4giAynskXuohTu4MgI';
        vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Network timeout')));

        const result = await getPlaylistCover(knownId);
        expect(result).toBe(STATIC_PLAYLIST_COVERS[knownId]);
    });

    it('returns known static fallback when oEmbed returns 429 Too Many Requests', async () => {
        const knownId = '0yF9pJ62XkAgxDGMlbyenf';
        vi.stubGlobal(
            'fetch',
            vi.fn().mockResolvedValue({
                ok: false,
                status: 429,
            }),
        );

        const result = await getPlaylistCover(knownId);
        expect(result).toBe(STATIC_PLAYLIST_COVERS[knownId]);
    });

    it('returns default fallback for unknown playlist when fetch fails', async () => {
        const unknownId = 'unknown-99999999999';
        vi.stubGlobal(
            'fetch',
            vi.fn().mockResolvedValue({
                ok: false,
                status: 500,
            }),
        );

        const result = await getPlaylistCover(unknownId);
        expect(result).toBe(DEFAULT_FALLBACK_COVER);
    });

    it('returns default fallback when playlistId is empty', async () => {
        const result = await getPlaylistCover('');
        expect(result).toBe(DEFAULT_FALLBACK_COVER);
    });
});
