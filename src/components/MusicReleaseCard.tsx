import React from 'react';
import { Play } from 'lucide-react';
import type { MusicRelease } from '../data/types';

interface MusicReleaseCardProps {
    release: MusicRelease;
}

export const MusicReleaseCard: React.FC<MusicReleaseCardProps> = ({ release }) => {
    return (
        <div className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-all duration-300 group relative aspect-square rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(255,0,85,0.2)]">

            {/* Background Image (Cover Art) */}
            <img
                src={release.coverImage}
                alt={release.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-secondary text-xs font-mono tracking-wider uppercase mb-1 block">
                        {release.genre} • {release.year}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1 leading-tight">
                        {release.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                        {release.artist}
                    </p>

                    {/* Action Button */}
                    <a
                        href={release.spotifyUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/90 hover:bg-secondary text-white text-sm font-medium rounded-full transition-all opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 duration-500 delay-75"
                    >
                        <Play className="w-4 h-4 fill-current" />
                        Listen Now
                    </a>
                </div>
            </div>
        </div>
    );
};
