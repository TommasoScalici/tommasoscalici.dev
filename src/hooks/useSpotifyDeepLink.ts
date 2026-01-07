import { useCallback, useEffect } from 'react';

import { trackEvent } from '../lib/analytics';

interface UseSpotifyDeepLinkProps {
    eventName: string;
    playlistId: string;
}

interface UseSpotifyDeepLinkReturn {
    handleDeepLink: () => void;
}

export const useSpotifyDeepLink = ({
    eventName,
    playlistId,
}: UseSpotifyDeepLinkProps): UseSpotifyDeepLinkReturn => {
    const handleDeepLink = useCallback(() => {
        const deepLink = `spotify:playlist:${playlistId}`;
        const webLink = `https://open.spotify.com/playlist/${playlistId}`;

        const isMobile = () => {
            if (typeof navigator === 'undefined') return false;
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent,
            );
        };

        // Tracking
        trackEvent('click_deep_link', {
            content_name: eventName || 'Spotify Playlist',
            content_ids: [playlistId],
            content_type: 'product',
        });

        if (isMobile()) {
            window.location.href = deepLink;
            const now = Date.now();
            setTimeout(() => {
                if (Date.now() - now < 1500) {
                    window.location.href = webLink;
                }
            }, 800);
        } else {
            window.location.href = deepLink;
            setTimeout(() => {
                window.location.href = webLink;
            }, 2500);
        }
    }, [eventName, playlistId]);

    // Track "ViewContent" on mount (Landing Page visit)
    useEffect(() => {
        trackEvent('view_item', {
            content_name: eventName || 'Spotify Playlist',
            content_ids: [playlistId],
            content_type: 'product',
        });
    }, [eventName, playlistId]);

    return { handleDeepLink };
};
