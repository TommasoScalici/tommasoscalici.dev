/**
 * Verified static fallback covers for curated playlists.
 * Ensures build never fails even if Spotify oEmbed API is rate-limited (HTTP 429) or offline.
 */
export const STATIC_PLAYLIST_COVERS: Readonly<Record<string, string>> = {
    // Anime & JRPG Boss Battles
    '0B9L4giAynskXuohTu4MgI':
        'https://image-cdn-fa.spotifycdn.com/image/ab67706c0000da84132fd44d101be44328ad565c',
    // Coding Lofi
    '0yF9pJ62XkAgxDGMlbyenf':
        'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c349cb4300e5b2ab017e3a5a7',
    // Modern Prog
    '32xYNI24QWMWfSgG1xZgjI':
        'https://image-cdn-fa.spotifycdn.com/image/ab67706c0000da84c1c8434a9ea6bf21411aa4ff',
    // Prog Odyssey
    '7sO9HU4rqRAnF7A15zqc5K':
        'https://image-cdn-fa.spotifycdn.com/image/ab67706c0000da845c3d80f71ba244a8836378f3',
    // Heavy Riffs
    '49NveLmBkE159Zt6g0Novv':
        'https://image-cdn-fa.spotifycdn.com/image/ab67706c0000d72c85bb3fa41bdb39b8bcd42038',
};

export const DEFAULT_FALLBACK_COVER = '/assets/playlist-fallback.webp';

/**
 * In-memory build cache to avoid duplicate API requests across locales and pages.
 */
const coverCache = new Map<string, string>();

/**
 * Fetches the playlist cover thumbnail with timeout, caching, and guaranteed fallback.
 *
 * @param playlistId - Spotify playlist ID.
 * @returns A guaranteed non-empty image URL (Spotify CDN or local fallback).
 */
export async function getPlaylistCover(playlistId: string): Promise<string> {
    if (!playlistId) return DEFAULT_FALLBACK_COVER;

    const cached = coverCache.get(playlistId);
    if (cached) {
        return cached;
    }

    const fallbackUrl = STATIC_PLAYLIST_COVERS[playlistId] ?? DEFAULT_FALLBACK_COVER;

    try {
        const response = await fetch(
            `https://open.spotify.com/oembed?url=https://open.spotify.com/playlist/${encodeURIComponent(playlistId)}`,
            { signal: AbortSignal.timeout(3500) },
        );

        if (!response.ok) {
            console.warn(
                `[Spotify oEmbed] Non-OK response (${String(response.status)}) for playlist ${playlistId}. Using fallback cover.`,
            );
            coverCache.set(playlistId, fallbackUrl);
            return fallbackUrl;
        }

        const data = (await response.json()) as { thumbnail_url?: string };
        const thumbnail = data.thumbnail_url?.trim();

        if (thumbnail?.startsWith('https://')) {
            coverCache.set(playlistId, thumbnail);
            return thumbnail;
        }

        console.warn(
            `[Spotify oEmbed] Invalid or missing thumbnail_url for playlist ${playlistId}. Using fallback cover.`,
        );
        coverCache.set(playlistId, fallbackUrl);
        return fallbackUrl;
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.warn(
            `[Spotify oEmbed] Network or timeout error fetching playlist ${playlistId}: ${errorMessage}. Using fallback cover.`,
        );
        coverCache.set(playlistId, fallbackUrl);
        return fallbackUrl;
    }
}
