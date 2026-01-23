import React, { useState } from 'react';
import { LuEllipsis, LuMusic } from 'react-icons/lu';
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';

import { artistLinks } from '../data/artistLinks';
import { secondarySocials } from '../data/socials';
import type { TranslationKey } from '../i18n/ui';
import { trackEvent } from '../lib/analytics';
import { SmartLinkDialog } from './SmartLinkDialog';
import { SocialSmartDialog } from './SocialSmartDialog';

interface FooterProps {
    lang: string;
    t: Record<TranslationKey, string>;
    copyrightDate: string;
}

export const Footer: React.FC<FooterProps> = ({ lang, t, copyrightDate }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isSocialOpen, setIsSocialOpen] = useState(false);

    return (
        <footer className="border-glass-border mt-20 border-t bg-white/70 backdrop-blur-md dark:border-surface dark:bg-black/50">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
                <p className="flex items-center gap-4 font-mono text-sm text-muted">
                    <span>
                        &copy; {copyrightDate} Tommaso Scalici. {t['footer.copyright']}
                    </span>
                    <a
                        href={lang === 'en' ? '/uses' : `/${lang}/uses`}
                        className="rounded-full border border-primary/20 bg-white/5 px-3 py-1 text-xs font-bold tracking-wide text-primary shadow-[0_0_10px_rgba(0,243,255,0.1)] transition-all hover:border-primary/50 hover:bg-primary/10 hover:shadow-primary-glow"
                        aria-label={t['footer.uses']}
                    >
                        {t['footer.uses']}
                    </a>
                    <a
                        href={lang === 'en' ? '/privacy-policy' : `/${lang}/privacy-policy`}
                        className="rounded-full border border-secondary/20 bg-white/5 px-3 py-1 text-xs font-bold tracking-wide text-secondary shadow-[0_0_10px_rgba(255,0,85,0.1)] transition-all hover:border-secondary/50 hover:bg-secondary/10 hover:shadow-secondary-glow"
                        aria-label={t['footer.privacy']}
                    >
                        {t['footer.privacy']}
                    </a>
                    <a
                        href={lang === 'en' ? '/cookie-policy' : `/${lang}/cookie-policy`}
                        className="rounded-full border border-secondary/20 bg-white/5 px-3 py-1 text-xs font-bold tracking-wide text-secondary shadow-[0_0_10px_rgba(255,0,85,0.1)] transition-all hover:border-secondary/50 hover:bg-secondary/10 hover:shadow-secondary-glow"
                        aria-label={t['cookie.title']}
                    >
                        {t['cookie.title']}
                    </a>
                </p>

                <div className="flex gap-6">
                    <a
                        href="https://github.com/TommasoScalici"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                            trackEvent('select_content', {
                                content_type: 'social_link',
                                content_name: 'GitHub',
                                item_id: 'GitHub',
                            });
                        }}
                        className="text-muted transition-colors hover:text-primary"
                        aria-label="GitHub"
                    >
                        <SiGithub className="h-5 w-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tommasoscalici"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                            trackEvent('select_content', {
                                content_type: 'social_link',
                                content_name: 'LinkedIn',
                                item_id: 'LinkedIn',
                            });
                        }}
                        className="text-muted transition-colors hover:text-primary"
                        aria-label="LinkedIn"
                    >
                        <SiLinkedin className="h-5 w-5" />
                    </a>

                    <button
                        onClick={() => {
                            setIsDialogOpen(true);
                        }}
                        className="text-muted transition-colors hover:text-secondary"
                        aria-label="Music Platforms"
                    >
                        <LuMusic className="h-5 w-5" />
                    </button>

                    <a
                        href="https://www.instagram.com/tommasoscalici91"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                            trackEvent('select_content', {
                                content_type: 'social_link',
                                content_name: 'Instagram',
                                item_id: 'Instagram',
                            });
                        }}
                        className="text-muted transition-colors hover:text-secondary"
                        aria-label="Instagram"
                    >
                        <SiInstagram className="h-5 w-5" />
                    </a>

                    <button
                        onClick={() => {
                            setIsSocialOpen(true);
                        }}
                        className="text-muted transition-colors hover:text-main"
                        aria-label="More Socials"
                    >
                        <LuEllipsis className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <SmartLinkDialog
                isOpen={isDialogOpen}
                onClose={() => {
                    setIsDialogOpen(false);
                }}
                links={artistLinks}
                t={(key) => t[key]}
                tracking={{
                    type: 'artist_profile',
                    name: 'Tommaso Scalici',
                    id: 'tommaso-scalici',
                }}
            />

            <SocialSmartDialog
                isOpen={isSocialOpen}
                onClose={() => {
                    setIsSocialOpen(false);
                }}
                links={secondarySocials}
                t={(key) => t[key]}
                tracking={{
                    type: 'social_link',
                    name: 'Tommaso Scalici',
                }}
            />
        </footer>
    );
};
