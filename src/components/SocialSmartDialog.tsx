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
                className="absolute inset-0 bg-white/60 backdrop-blur-sm dark:bg-black/80"
                onClick={onClose}
                onKeyDown={(e) => {
                    if (e.key === 'Escape') onClose();
                }}
                role="button"
                tabIndex={0}
                aria-label="Close dialog"
            />
            {/* Dialog Card */}
            <div className="animate-in zoom-in-95 relative w-full max-w-sm rounded-2xl border border-glass-border bg-white p-6 shadow-2xl duration-200 dark:bg-[#0a0a0a]">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-muted transition-colors hover:text-main"
                    aria-label="Close"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* Header */}
                <div className="mb-6 flex flex-col items-center">
                    <h3 className="font-mono text-lg font-bold text-main">
                        {t('dialog.connectEverywhere') || 'Connect with me'}
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
                            className="group flex w-full items-center gap-3 rounded-xl border border-glass-border/5 bg-glass-bg/5 p-3 transition-all hover:border-primary/50 hover:bg-glass-bg/10"
                        >
                            {iconMap[link.icon] && (
                                <span className="h-6 w-6 text-gray-400 transition-colors group-hover:text-primary">
                                    {iconMap[link.icon]}
                                </span>
                            )}
                            <span className="font-medium text-muted group-hover:text-main">
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
