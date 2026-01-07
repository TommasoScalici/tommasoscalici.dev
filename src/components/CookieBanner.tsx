import React, { useEffect, useState } from 'react';

import { defaultLang, ui } from '../i18n/ui';
import { getConsent, setConsent } from '../lib/consent';

interface CookieBannerProps {
    lang?: string;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ lang = defaultLang }) => {
    const [isVisible, setIsVisible] = useState(false);
    const t = lang in ui ? ui[lang as keyof typeof ui] : ui[defaultLang];

    useEffect(() => {
        const checkConsent = () => {
            if (getConsent() === 'pending') {
                // Small delay to not be annoying immediately
                setTimeout(() => {
                    setIsVisible(true);
                }, 1000);
            } else {
                setIsVisible(false);
            }
        };

        const showBanner = () => {
            setIsVisible(true);
        };

        checkConsent();

        window.addEventListener('consent-update', checkConsent);
        window.addEventListener('show-cookie-banner', showBanner);
        return () => {
            window.removeEventListener('consent-update', checkConsent);
            window.removeEventListener('show-cookie-banner', showBanner);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="animate-in slide-in-from-bottom fixed bottom-4 left-4 right-4 z-50 mx-auto flex max-w-lg flex-col gap-4 rounded-2xl border border-white/10 bg-black/80 p-5 shadow-glass-light backdrop-blur-xl duration-500 will-change-transform md:right-4 md:ml-auto md:mr-0">
            <div className="space-y-2">
                <h3 className="text-sm font-bold text-white">{t['cookie.title']}</h3>
                <p className="text-xs leading-relaxed text-gray-300">{t['cookie.text']}</p>
            </div>
            <div className="flex gap-3">
                <button
                    onClick={() => {
                        setConsent('denied');
                    }}
                    className="flex-1 rounded-lg border border-white/10 bg-transparent py-2 text-xs font-bold text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                    {t['cookie.deny']}
                </button>
                <button
                    onClick={() => {
                        setConsent('granted');
                    }}
                    className="flex-1 rounded-lg bg-primary py-2 text-xs font-bold text-black transition-transform hover:scale-105 hover:brightness-110"
                >
                    {t['cookie.accept']}
                </button>
            </div>
        </div>
    );
};
