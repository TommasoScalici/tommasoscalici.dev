import React from 'react';
import type { Playlist } from '../data/playlists';
import { SiSpotify } from "react-icons/si";

interface PlaylistCardProps {
    playlist: Playlist;
    t: Record<string, string>;
}

export const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist, t }) => {

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();

        // Track Event if Pixel is initialized
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'ViewContent', {
                content_name: playlist.title,
                content_category: 'Spotify Playlist'
            });
        }

        const url = `https://open.spotify.com/playlist/${playlist.spotifyId}`;
        window.open(url, '_blank');
    };

    return (
        <div
            onClick={handleClick}
            className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all duration-300 cursor-pointer aspect-video"
        >
            {/* Background Image */}
            <img
                src={typeof playlist.coverImage === 'string' ? playlist.coverImage : playlist.coverImage.src}
                alt={playlist.title}
                width={320}
                height={180}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                <span className="text-primary text-xs font-mono mb-1">{playlist.genre}</span>
                <h3 className="text-xl font-bold text-white mb-1 leading-tight">{playlist.title}</h3>
                <p className="text-gray-400 text-xs line-clamp-2">{playlist.description}</p>
            </div>

            {/* Hover Overlay with Icon */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 backdrop-blur-[2px]">
                <div className="flex flex-col items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <SiSpotify className="w-12 h-12 text-[#1DB954] drop-shadow-[0_0_15px_rgba(29,185,84,0.6)]" />
                    <span className="font-bold tracking-widest text-sm bg-gradient-to-r from-[#1DB954] via-white to-[#1DB954] bg-clip-text text-transparent animate-text-shimmer">
                        {t['card.playOnSpotify']}
                    </span>
                </div>
            </div>

            {/* Top Right Badge */}
            <div className="absolute top-0 right-0 m-3 px-2 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded text-[10px] font-mono text-gray-300">
                PLAYLIST
            </div>
        </div>
    );
};
