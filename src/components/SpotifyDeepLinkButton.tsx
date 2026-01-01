import React, { useState } from 'react';
import { SiSpotify } from 'react-icons/si';

interface SpotifyDeepLinkButtonProps {
    playlistId: string;
    eventName: string; // 'Modern Prog' or 'Coding Lofi'
    className?: string;
}

export const SpotifyDeepLinkButton: React.FC<SpotifyDeepLinkButtonProps> = ({
    playlistId,
    eventName,
}) => {
    const [label, setLabel] = useState('OPEN IN SPOTIFY');
    const [isOpening, setIsOpening] = useState(false);

    const deepLink = `spotify:playlist:${playlistId}`;
    const webLink = `https://open.spotify.com/playlist/${playlistId}`;

    const isMobile = () => {
        if (typeof navigator === 'undefined') return false;
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent,
        );
    };

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();

        // Tracking
        if (typeof window !== 'undefined') {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const w = window as any;
            if (w.fbq) {
                w.fbq('track', eventName || 'ViewContent', { content_name: 'Spotify Playlist' });
            }
            if (w.ttq) {
                w.ttq.track('ClickButton', { content_name: 'Spotify Playlist' });
            }
        } // Visual Feedback
        setLabel('Opening...');
        setIsOpening(true);

        if (isMobile()) {
            // Mobile Logic
            window.location.href = deepLink;

            const now = Date.now();
            setTimeout(() => {
                if (Date.now() - now < 1500) {
                    window.location.href = webLink;
                }
            }, 800);
        } else {
            // Desktop Logic
            window.location.href = deepLink;

            setTimeout(() => {
                window.location.href = webLink;
                setLabel('Play on Spotify');
                setIsOpening(false);
            }, 2500);
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`group flex w-full transform items-center justify-center gap-3 rounded-full bg-[#1db954] px-8 py-4 font-bold text-black shadow-[0_0_20px_rgba(29,185,84,0.3)] transition-all hover:scale-105 hover:bg-[#1ed760] hover:shadow-[0_0_30px_rgba(29,185,84,0.5)] ${
                isOpening ? 'cursor-wait opacity-75' : ''
            }`}
        >
            <SiSpotify className="h-6 w-6" />
            <span className="tracking-wide">{label}</span>
        </button>
    );
};
