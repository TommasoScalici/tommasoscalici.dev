import React, { useState } from 'react';
import { SiSpotify } from 'react-icons/si';

import { useSpotifyDeepLink } from '../hooks/useSpotifyDeepLink';

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

    const { handleDeepLink } = useSpotifyDeepLink({
        eventName,
        playlistId,
    });

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setLabel('Opening...');
        setIsOpening(true);

        handleDeepLink();

        // Specific UI reset logic remaining in component as it affects local state
        if (typeof navigator !== 'undefined' && !/Mobi/i.test(navigator.userAgent)) {
            setTimeout(() => {
                setLabel('Play on Spotify');
                setIsOpening(false);
            }, 2500);
        } else {
            // Reset for mobile immediately as the app switch happens
            setTimeout(() => {
                setIsOpening(false);
                setLabel('OPEN IN SPOTIFY');
            }, 2000);
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`group flex w-full transform animate-shake items-center justify-center gap-3 rounded-full bg-spotify px-8 py-4 font-bold text-black shadow-[0_0_20px_rgba(29,185,84,0.3)] transition-all hover:scale-105 hover:bg-spotify-hover hover:shadow-[0_0_30px_rgba(29,185,84,0.5)] ${
                isOpening ? 'cursor-wait opacity-75' : ''
            }`}
            style={{ animationDelay: '3s' }}
        >
            <SiSpotify className="h-6 w-6" />
            <span className="tracking-wide">{label}</span>
        </button>
    );
};
