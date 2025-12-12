import React, { useState } from 'react';

interface SpotifyDeepLinkButtonProps {
    playlistId: string;
    eventName: string; // 'Modern Prog' or 'Coding Lofi'
    className?: string;
}

export const SpotifyDeepLinkButton: React.FC<SpotifyDeepLinkButtonProps> = ({ playlistId, eventName, className = "" }) => {
    const [label, setLabel] = useState("Play on Spotify");
    const [isOpening, setIsOpening] = useState(false);

    const deepLink = `spotify:playlist:${playlistId}`;
    const webLink = `https://open.spotify.com/playlist/${playlistId}`;

    const isMobile = () => {
        if (typeof navigator === 'undefined') return false;
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();

        // Tracking
        if (typeof window.fbq !== 'undefined') {
            window.fbq('track', 'Lead', { content_name: eventName, content_category: 'Music' });
        }
        if (typeof window.ttq !== 'undefined') {
            window.ttq.track('ClickButton', { content_name: eventName });
        }

        // Visual Feedback
        setLabel("Opening...");
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
                setLabel("Play on Spotify");
                setIsOpening(false);
            }, 2500);
        }
    };

    return (
        <a
            href="#"
            onClick={handleClick}
            className={`flex justify-center items-center bg-[#1DB954] text-black font-extrabold text-base no-underline py-4 rounded-full w-full transition-all duration-200 shadow-[0_5px_15px_rgba(29,185,84,0.4)] uppercase tracking-wide hover:bg-[#1ed760] hover:scale-[1.02] active:scale-[0.98] ${isOpening ? 'opacity-80' : 'opacity-100'} ${className}`}
        >
            <svg className="w-6 h-6 mr-2.5 fill-black" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.32-1.38 9.841-.719 13.5 1.56.42.3.6.84.24 1.26zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.4-1.02 15.96 1.74.539.3.719.96.42 1.5-.3.54-.96.72-1.5.42z" />
            </svg>
            {label}
        </a>
    );
};
