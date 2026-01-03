import React from 'react';
import { SiSpotify } from 'react-icons/si';

/// <reference path="../.astro/types.d.ts" />

interface Playlist {
    title: string;
    description: string;
    coverImage: string;
    spotifyId: string;
    genre: string;
}

interface PlaylistCardProps {
    playlist: Playlist;
    t: Record<string, string>;
}

export const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist, t }) => {
    const handleClick = () => {
        // Track Event if Pixel is initialized
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'ViewContent', {
                content_name: playlist.title,
                content_category: 'Spotify Playlist',
            });
        }
    };

    return (
        <a
            onClick={handleClick} // Keep onClick for tracking purposes
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    // For accessibility, if the <a> tag is clicked via keyboard, trigger tracking
                    handleClick();
                }
            }}
            role="button" // Keep role and tabIndex for accessibility if onClick is present
            tabIndex={0}
            href={
                playlist.spotifyId ? `https://open.spotify.com/playlist/${playlist.spotifyId}` : '#'
            }
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-2xl border border-glass-border bg-white/70 shadow-glass-light backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] dark:border-white/10 dark:bg-white/5 dark:shadow-none"
        >
            {/* Background Image */}
            <img
                src={playlist.coverImage}
                alt={playlist.title}
                width={320}
                height={180}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-40"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                <span className="mb-1 font-mono text-xs text-primary">{playlist.genre}</span>
                <h3 className="mb-1 text-xl font-bold leading-tight text-white">
                    {playlist.title}
                </h3>
                <p className="line-clamp-2 text-xs text-gray-400">{playlist.description}</p>
            </div>

            {/* Hover Overlay with Icon */}
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex translate-y-4 transform flex-col items-center gap-2 transition-transform duration-300 group-hover:translate-y-0">
                    <SiSpotify className="h-12 w-12 text-[#1DB954] drop-shadow-[0_0_15px_rgba(29,185,84,0.6)]" />
                    <span className="animate-text-shimmer bg-gradient-to-r from-[#1DB954] via-white to-[#1DB954] bg-clip-text text-sm font-bold tracking-widest text-transparent">
                        {t['card.playOnSpotify']}
                    </span>
                </div>
            </div>

            {/* Top Right Badge */}
            <div className="absolute right-0 top-0 m-3 rounded border border-glass-border/10 bg-black/50 px-2 py-1 font-mono text-[10px] text-gray-300 backdrop-blur-md">
                PLAYLIST
            </div>
        </a>
    );
};
