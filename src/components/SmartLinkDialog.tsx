import React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import {
    SiSpotify,
    SiApplemusic,
    SiYoutubemusic,
    SiAmazon,
    SiTidal,
    SiBandcamp
} from "react-icons/si";
import { FaDeezer } from "react-icons/fa";

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
    t: (key: string) => string;
}

const iconMap: Record<string, React.ReactNode> = {
    spotify: <SiSpotify className="w-5 h-5" />,
    apple: <SiApplemusic className="w-5 h-5" />,
    youtube: <SiYoutubemusic className="w-5 h-5" />,
    amazon: <SiAmazon className="w-5 h-5" />,
    tidal: <SiTidal className="w-5 h-5" />,
    deezer: <FaDeezer className="w-5 h-5" />,
    bandcamp: <SiBandcamp className="w-5 h-5" />,
};

export const SmartLinkDialog: React.FC<SmartLinkDialogProps> = ({ isOpen, onClose, links, t }) => {
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
                    <h3 className="font-mono text-lg font-bold text-white">{t("dialog.choosePlatform")}</h3>
                </div>

                {/* Links Grid */}
                <div className="flex flex-col gap-3">
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
