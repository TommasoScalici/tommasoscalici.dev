import React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import {
    SiSpotify,
    SiApplemusic,
    SiYoutubemusic,
    SiAmazon,
    SiTidal,
    SiBandcamp,
} from 'react-icons/si';
import { FaDeezer } from 'react-icons/fa';
import type { TranslationKey } from '../i18n/ui';

export interface SmartLink {
    label: string;
    url: string;
    icon: string;
    color: string;
}

interface SmartLinkDialogProps {
    isOpen: boolean;
    onClose: () => void;
    links: SmartLink[];
    t: (key: TranslationKey) => string;
}

const iconMap: Record<string, React.ReactNode> = {
    spotify: <SiSpotify className="h-5 w-5" />,
    apple: <SiApplemusic className="h-5 w-5" />,
    youtube: <SiYoutubemusic className="h-5 w-5" />,
    amazon: <SiAmazon className="h-5 w-5" />,
    tidal: <SiTidal className="h-5 w-5" />,
    deezer: <FaDeezer className="h-5 w-5" />,
    bandcamp: <SiBandcamp className="h-5 w-5" />,
};

export const SmartLinkDialog: React.FC<SmartLinkDialogProps> = ({ isOpen, onClose, links, t }) => {
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <button
                className="absolute inset-0 h-full w-full cursor-default border-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
                aria-label="Close dialog"
                type="button"
            />

            {/* Dialog Card */}
            <div
                className="animate-in zoom-in-95 relative w-full max-w-sm rounded-2xl border border-glass-border/10 bg-[#0a0a0a] p-6 shadow-2xl duration-200"
                role="dialog"
                aria-modal="true"
            >
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
                        {t('dialog.choosePlatform') || 'Choose Platform'}
                    </h3>
                </div>

                {/* Links Grid */}
                <div className="flex flex-col gap-3">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex w-full items-center gap-3 rounded-xl border border-glass-border/5 bg-glass-bg/5 p-3 transition-all hover:border-primary/50 hover:bg-glass-bg/10"
                        >
                            <span
                                className={`text-muted transition-colors group-hover:text-primary ${link.color}`}
                            >
                                {iconMap[link.icon]}
                            </span>
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
