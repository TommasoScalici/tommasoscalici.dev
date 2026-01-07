import { useCallback } from 'react';

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
        if (typeof window !== 'undefined') {
            if (window.fbq) {
                window.fbq('track', 'ViewContent', {
                    content_ids: [playlistId],
                    content_type: 'product',
                    content_name: eventName || 'Spotify Playlist',
                });
            }
            if (window.ttq) {
                window.ttq.track('ViewContent', {
                    contents: [
                        {
                            content_id: playlistId,
                            content_type: 'product',
                            content_name: eventName || 'Spotify Playlist',
                        },
                    ],
                });
            }
        }

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

    return { handleDeepLink };
};
