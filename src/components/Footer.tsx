import React, { useState } from 'react';
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { Music } from 'lucide-react';
import { SmartLinkDialog } from './SmartLinkDialog';
import { artistLinks } from '../data/artistLinks';

interface FooterProps {
    lang: string;
    t: Record<string, string>;
    copyrightDate: string;
}

export const Footer: React.FC<FooterProps> = ({ lang, t, copyrightDate }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <footer className="border-t border-surface bg-black/50 backdrop-blur-md mt-20">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-500 text-sm font-mono flex items-center gap-4">
                    <span>&copy; {copyrightDate} Tommaso Scalici. {t["footer.copyright"]}</span>
                    <a
                        href={lang === "en" ? "/uses" : `/${lang}/uses`}
                        className="px-3 py-1 rounded-full bg-white/5 border border-primary/20 text-xs text-primary hover:bg-primary/10 hover:border-primary/50 transition-all font-bold tracking-wide shadow-[0_0_10px_rgba(0,243,255,0.1)] hover:shadow-[0_0_15px_rgba(0,243,255,0.3)]"
                    >
                        {t["footer.uses"]}
                    </a>
                </p>

                <div className="flex gap-6">
                    {/* Dev Links - Hover Primary */}
                    <a
                        href="https://github.com/TommasoScalici"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors"
                        aria-label="GitHub"
                    >
                        <SiGithub className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tommasoscalici"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                    >
                        <SiLinkedin className="w-5 h-5" />
                    </a>

                    {/* Music/Social Links - Hover Secondary */}
                    {/* Replaced direct Spotify link with Smart Dialog trigger */}
                    <button
                        onClick={() => setIsDialogOpen(true)}
                        className="text-gray-400 hover:text-secondary transition-colors"
                        aria-label="Music Platforms"
                    >
                        <Music className="w-5 h-5" />
                    </button>

                    <a
                        href="https://www.instagram.com/tommasoscalici91"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-secondary transition-colors"
                        aria-label="Instagram"
                    >
                        <SiInstagram className="w-5 h-5" />
                    </a>
                </div>
            </div>

            <SmartLinkDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                links={artistLinks}
                t={(key) => t[key]}
            />
        </footer>
    );
};
