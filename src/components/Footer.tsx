import React, { useState } from 'react';
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { Music } from 'lucide-react';
import { SmartLinkDialog } from './SmartLinkDialog';
import { artistLinks } from '../data/artistLinks';

interface FooterProps {
    lang: string;
    t: Record<string, string>;
}

export const Footer: React.FC<FooterProps> = ({ lang, t }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Dynamic Copyright Year
    const currentYear = new Date().getFullYear();
    const startYear = 2010; // Career start
    const copyrightDate =
        startYear === currentYear
            ? `${startYear}`
            : `${startYear} - ${currentYear}`;

    return (
        <footer className="border-t border-surface bg-black/50 backdrop-blur-md mt-20">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-500 text-sm font-mono">
                    &copy; {copyrightDate} Tommaso Scalici. {t["footer.copyright"]}
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
