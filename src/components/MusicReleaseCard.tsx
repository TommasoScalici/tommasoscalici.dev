import React, { useState } from 'react';
import { Play } from 'lucide-react';
import type { MusicRelease, PlatformLinks } from '../data/types';
import { SmartLinkDialog, type SmartLink } from './SmartLinkDialog';
import { platforms, platformOrder } from '../data/platforms';

interface MusicReleaseCardProps {
    release: MusicRelease;
    t: Record<string, string>;
}

export const MusicReleaseCard: React.FC<MusicReleaseCardProps> = ({ release, t }) => {
    const isUpcoming = release.isUpcoming;
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Transform PlatformLinks to SmartLink[]
    const albumLinks: SmartLink[] = platformOrder
        .map((platformKey) => {
            const url = release.links?.[platformKey as keyof PlatformLinks];
            const platformDef = platforms[platformKey];

            if (!url) return null;

            return {
                ...platformDef,
                url: url,
            };
        })
        .filter((link): link is SmartLink => link !== null);

    const handleListenClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!isUpcoming) {
            setIsDialogOpen(true);
        }
    };

    return (
        <>
            <div className="group relative aspect-square overflow-hidden rounded-2xl border border-glass-border bg-white/70 shadow-glass-light backdrop-blur-xl transition-all duration-300 hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(255,0,85,0.15)] dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                {/* Background Image (Cover Art) */}
                <img
                    src={
                        typeof release.coverImage === 'string'
                            ? release.coverImage
                            : release.coverImage.src
                    }
                    alt={release.title}
                    width={300}
                    height={300}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${isUpcoming ? 'scale-100 opacity-40 grayscale' : 'opacity-80 group-hover:scale-110 group-hover:opacity-100'}`}
                />

                {/* Gradient Overlay */}
                <div
                    className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500 ${!isUpcoming ? 'group-hover:opacity-0' : ''}`}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="translate-y-4 transform transition-transform duration-500 group-hover:translate-y-0">
                        <span className="mb-1 block font-mono text-xs uppercase tracking-wider text-secondary">
                            {release.genre} • {release.year}
                        </span>
                        <h3 className="mb-1 text-2xl font-bold leading-tight text-white">
                            {release.title}
                        </h3>
                        <p className="mb-4 text-sm text-gray-400">{release.type}</p>

                        {/* Upcoming Badge */}
                        {isUpcoming ? (
                            <div className="absolute right-0 top-0 m-4 rounded-md border border-primary bg-black/50 px-3 py-1 text-xs font-bold uppercase text-primary shadow-[0_0_10px_rgba(0,243,255,0.3)] backdrop-blur-sm">
                                {t['card.comingSoon']}
                            </div>
                        ) : null}

                        {/* Action Button */}
                        <button
                            onClick={handleListenClick}
                            disabled={isUpcoming}
                            className={`inline-flex transform items-center gap-2 rounded-full bg-secondary/90 px-4 py-2 text-sm font-medium text-white transition-all duration-300 ${isUpcoming
                                ? 'translate-y-0 cursor-not-allowed bg-gray-700 text-gray-400 opacity-100 hover:bg-gray-700'
                                : 'translate-y-4 opacity-0 hover:scale-105 hover:bg-secondary hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] hover:brightness-110 group-hover:translate-y-0 group-hover:opacity-100'
                                }`}
                        >
                            {isUpcoming ? (
                                <span>
                                    {t['card.comingYear']} {release.year}
                                </span>
                            ) : (
                                <>
                                    <Play className="h-4 w-4 fill-current transition-transform group-hover:scale-110" />
                                    <span>{t['card.listenNow']}</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <SmartLinkDialog
                isOpen={isDialogOpen}
                onClose={() => {
                    setIsDialogOpen(false);
                }}
                links={albumLinks}
                t={(key) => t[key]}
            />
        </>
    );
};
