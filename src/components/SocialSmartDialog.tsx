import React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import {
    SiFacebook,
    SiX,
    SiTiktok,
    SiThreads,
    SiSpotify,
    SiTelegram,
    SiGoogleplay,
    SiLastdotfm,
    SiSteam,
} from 'react-icons/si';
import type { TranslationKey } from '../i18n/ui';

export interface SocialLink {
    label: string;
    url: string;
    icon: string;
    color: string;
}

interface SocialSmartDialogProps {
    isOpen: boolean;
    onClose: () => void;
    links: SocialLink[];
    t: (key: TranslationKey) => string;
}

const iconMap: Record<string, React.ReactNode> = {
    spotify: <SiSpotify className="h-5 w-5" />,
    facebook: <SiFacebook className="h-5 w-5" />,
    x: <SiX className="h-5 w-5" />,
    tiktok: <SiTiktok className="h-5 w-5" />,
    threads: <SiThreads className="h-5 w-5" />,
    telegram: <SiTelegram className="h-5 w-5" />,
    googleplay: <SiGoogleplay className="h-5 w-5" />,
    lastfm: <SiLastdotfm className="h-5 w-5" />,
    steam: <SiSteam className="h-5 w-5" />,
};

export const SocialSmartDialog: React.FC<SocialSmartDialogProps> = ({
    isOpen,
    onClose,
    links,
    t,
}) => {
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
                onKeyDown={(e) => {
                    if (e.key === 'Escape') onClose();
                }}
                role="button"
                tabIndex={0}
                aria-label="Close dialog"
            />
            {/* Dialog Card */}
            <div className="animate-in zoom-in-95 relative w-full max-w-sm rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 shadow-2xl duration-200">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-white"
                    aria-label="Close"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* Header */}
                <div className="mb-6 text-center">
                    <h3 className="font-mono text-lg font-bold text-white">
                        {t('dialog.connectEverywhere') || 'Connect Everywhere'}
                    </h3>
                </div>

                {/* Links Grid */}
                <div className="custom-scrollbar flex max-h-[60vh] flex-col gap-3 overflow-y-auto pr-2">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group flex items-center gap-4 rounded-lg border border-transparent bg-white/5 p-3 transition-all hover:border-white/10 hover:bg-white/10`}
                        >
                            <span className={`text-gray-400 transition-colors ${link.color}`}>
                                {iconMap[link.icon]}
                            </span>
                            <span className="font-medium text-gray-200 group-hover:text-white">
                                {link.label}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>,
        document.body,
    );
};
