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
    SiSteam
} from "react-icons/si";

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
    t: (key: string) => string;
}

const iconMap: Record<string, React.ReactNode> = {
    spotify: <SiSpotify className="w-5 h-5" />,
    facebook: <SiFacebook className="w-5 h-5" />,
    x: <SiX className="w-5 h-5" />,
    tiktok: <SiTiktok className="w-5 h-5" />,
    threads: <SiThreads className="w-5 h-5" />,
    telegram: <SiTelegram className="w-5 h-5" />,
    googleplay: <SiGoogleplay className="w-5 h-5" />,
    lastfm: <SiLastdotfm className="w-5 h-5" />,
    steam: <SiSteam className="w-5 h-5" />,
};

export const SocialSmartDialog: React.FC<SocialSmartDialogProps> = ({ isOpen, onClose, links, t }) => {
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Dialog Card */}
            <div className="relative w-full max-w-sm bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl animate-in zoom-in-95 duration-200">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="text-center mb-6">
                    <h3 className="font-mono text-lg font-bold text-white">{t("dialog.connectEverywhere") || "Connect Everywhere"}</h3>
                </div>

                {/* Links Grid */}
                <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all group`}
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
        document.body
    );
};
