import { Cookie, Languages, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
    lang: string;
    navItems: { label: string; href: string }[];
    logoSrc: string;
    targetLangUrl: string;
}

export const Header: React.FC<HeaderProps> = ({ lang, navItems, logoSrc, targetLangUrl }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onLanguageSwitch = () => {
        if (typeof window !== 'undefined') {
            const newLang = lang === 'en' ? 'it' : 'en';
            localStorage.setItem('lang', newLang);
        }
    };

    return (
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-surface bg-background/70 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <a
                    href={lang === 'en' ? '/' : `/${lang}`}
                    className="group flex items-center font-mono text-xl font-bold tracking-tighter transition-colors"
                >
                    <img
                        src={logoSrc}
                        alt="TS Circuit Logo"
                        width={48}
                        height={48}
                        loading="eager"
                        fetchPriority="high"
                        className="mr-3 h-12 w-auto object-contain"
                    />
                    <div className="flex flex-col leading-none sm:flex-row sm:leading-normal">
                        <span className="text-main transition-colors group-hover:text-primary">
                            TOMMASO
                        </span>
                        <span className="text-main transition-colors group-hover:text-secondary sm:ml-2">
                            SCALICI
                        </span>
                    </div>
                </a>

                {/* Desktop Nav - Hidden on small/medium, Visible on Large */}
                <nav className="hidden items-center gap-8 lg:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-muted transition-colors hover:text-main hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.5)]"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile/Tablet Controls */}
                <div className="flex items-center gap-4">
                    {/* Utility Buttons: Visible on Mid and Large (md:flex), Hidden on Small */}
                    <div className="hidden items-center gap-4 border-l border-white/10 pl-6 md:flex">
                        <a
                            href={targetLangUrl}
                            onClick={onLanguageSwitch}
                            className="border-glass-border flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1.5 font-mono text-xs text-muted transition-all hover:border-primary/50 hover:text-primary dark:border-white/10 dark:bg-white/5"
                            aria-label="Switch Language"
                        >
                            <Languages className="h-3.5 w-3.5" />
                            <span>{lang === 'en' ? 'IT' : 'EN'}</span>
                        </a>

                        <ThemeToggle />

                        <button
                            onClick={() => window.dispatchEvent(new Event('show-cookie-banner'))}
                            className="text-muted transition-colors hover:text-primary"
                            aria-label="Cookie Settings"
                        >
                            <Cookie className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Hamburger Button: Visible on Small/Mid (lg:hidden) */}
                    <div className="flex items-center gap-4 lg:hidden">
                        <button
                            className="text-muted hover:text-main"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                            aria-label="Menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <div className="animate-in slide-in-from-top-5 absolute left-0 right-0 top-16 flex flex-col border-b border-surface bg-black/95 p-6 backdrop-blur-xl lg:hidden">
                    <div className="flex flex-col gap-6">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-lg font-medium text-gray-300 transition-colors hover:text-primary"
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Utility Row in Overlay: Only show on Small (< md) because on Mid they are already up top */}
                    <div className="md:hidden">
                        <div className="my-6 h-px w-full bg-white/10"></div>

                        <div className="flex items-center justify-between gap-4">
                            <a
                                href={targetLangUrl}
                                onClick={onLanguageSwitch}
                                className="border-glass-border flex items-center gap-2 rounded-full border bg-white/5 px-4 py-2 font-mono text-sm text-muted transition-all active:border-primary/50 active:text-primary dark:border-white/10"
                            >
                                <Languages className="h-4 w-4" />
                                <span>{lang === 'en' ? 'Italiano' : 'English'}</span>
                            </a>

                            <div className="flex items-center gap-4">
                                <ThemeToggle />
                                <button
                                    onClick={() => {
                                        window.dispatchEvent(new Event('show-cookie-banner'));
                                        setIsOpen(false);
                                    }}
                                    className="rounded-full bg-white/5 p-2 text-muted transition-colors active:text-primary"
                                    aria-label="Cookie Settings"
                                >
                                    <Cookie className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};
