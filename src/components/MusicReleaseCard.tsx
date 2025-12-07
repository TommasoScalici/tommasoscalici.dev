import React, { useState } from 'react';
import { Play } from 'lucide-react';
import type { MusicRelease } from '../data/types';
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
    const albumLinks: SmartLink[] = platformOrder.map((platformKey) => {
        const url = release.links[platformKey as keyof typeof release.links];
        const platformDef = platforms[platformKey];

        if (!platformDef || !url) return null;

        return {
            ...platformDef,
            url: url
        };
    }).filter((link): link is SmartLink => link !== null);

    const handleListenClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!isUpcoming) {
            setIsDialogOpen(true);
        }
    };

    return (
        <>
            <div className={`bg-white/5 backdrop-blur-md border border-white/10 ${isUpcoming ? 'opacity-70' : 'hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,0,85,0.2)]'} transition-all duration-300 group relative aspect-square rounded-2xl overflow-hidden`}>

                {/* Background Image (Cover Art) */}
                <img
                    src={typeof release.coverImage === 'string' ? release.coverImage : release.coverImage.src}
                    alt={release.title}
                    width={300}
                    height={300}
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isUpcoming ? 'grayscale opacity-40 scale-100' : 'group-hover:scale-110 opacity-80 group-hover:opacity-60'}`}
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
                            {release.type}
                        </p>

                        {/* Upcoming Badge */}
                        {isUpcoming ? (
                            <div className="absolute top-0 right-0 m-4 px-3 py-1 bg-black/50 border border-primary text-primary text-xs font-bold uppercase rounded-md shadow-[0_0_10px_rgba(0,243,255,0.3)] backdrop-blur-sm">
                                {t['card.comingSoon']}
                            </div>
                        ) : null}

                        {/* Action Button */}
                        <button
                            onClick={handleListenClick}
                            disabled={isUpcoming}
                            className={`inline-flex items-center gap-2 px-4 py-2 bg-secondary/90 text-white text-sm font-medium rounded-full transition-all transform duration-300 ${isUpcoming
                                ? 'opacity-100 cursor-not-allowed bg-gray-700 hover:bg-gray-700 text-gray-400 translate-y-0'
                                : 'opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 hover:bg-secondary hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] hover:scale-105 hover:brightness-110'
                                }`}
                        >
                            {isUpcoming ? (
                                <span>{t['card.comingYear']} {release.year}</span>
                            ) : (
                                <>
                                    <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                                    <span>{t['card.listenNow']}</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <SmartLinkDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                links={albumLinks}
                t={(key) => t[key]}
            />
        </>
    );
};
