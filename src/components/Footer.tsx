import React, { useState } from 'react';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { Music, MoreHorizontal } from 'lucide-react';
import { SmartLinkDialog } from './SmartLinkDialog';
import { SocialSmartDialog } from './SocialSmartDialog';
import { artistLinks } from '../data/artistLinks';
import { secondarySocials } from '../data/socials';
import type { TranslationKey } from '../i18n/ui';

interface FooterProps {
    lang: string;
    t: Record<TranslationKey, string>;
    copyrightDate: string;
}

export const Footer: React.FC<FooterProps> = ({ lang, t, copyrightDate }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isSocialOpen, setIsSocialOpen] = useState(false);

    return (
        <footer className="mt-20 border-t border-surface bg-black/50 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
                <p className="flex items-center gap-4 font-mono text-sm text-gray-500">
                    <span>
                        &copy; {copyrightDate} Tommaso Scalici. {t['footer.copyright']}
                    </span>
                    <a
                        href={lang === 'en' ? '/uses' : `/${lang}/uses`}
                        className="rounded-full border border-primary/20 bg-white/5 px-3 py-1 text-xs font-bold tracking-wide text-primary shadow-[0_0_10px_rgba(0,243,255,0.1)] transition-all hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(0,243,255,0.3)]"
                    >
                        {t['footer.uses']}
                    </a>
                </p>

                <div className="flex gap-6">
                    <a
                        href="https://github.com/TommasoScalici"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition-colors hover:text-primary"
                        aria-label="GitHub"
                    >
                        <SiGithub className="h-5 w-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tommasoscalici"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition-colors hover:text-primary"
                        aria-label="LinkedIn"
                    >
                        <SiLinkedin className="h-5 w-5" />
                    </a>

                    <button
                        onClick={() => setIsDialogOpen(true)}
                        className="text-gray-400 transition-colors hover:text-secondary"
                        aria-label="Music Platforms"
                    >
                        <Music className="h-5 w-5" />
                    </button>

                    <a
                        href="https://www.instagram.com/tommasoscalici91"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition-colors hover:text-secondary"
                        aria-label="Instagram"
                    >
                        <SiInstagram className="h-5 w-5" />
                    </a>

                    <button
                        onClick={() => setIsSocialOpen(true)}
                        className="text-gray-400 transition-colors hover:text-white"
                        aria-label="More Socials"
                    >
                        <MoreHorizontal className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <SmartLinkDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                links={artistLinks}
                t={(key) => t[key]}
            />

            <SocialSmartDialog
                isOpen={isSocialOpen}
                onClose={() => setIsSocialOpen(false)}
                links={secondarySocials}
                t={(key) => t[key]}
            />
        </footer>
    );
};
