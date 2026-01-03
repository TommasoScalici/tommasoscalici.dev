import React, { useState } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
    lang: string;
    navItems: { label: string; href: string }[];
    logoSrc: string;
}

export const Header: React.FC<HeaderProps> = ({ lang, navItems, logoSrc }) => {
    const [isOpen, setIsOpen] = useState(false);

    const getTargetLanguageUrl = () => {
        if (typeof window === 'undefined') return lang === 'en' ? '/it' : '/';

        const currentPath = window.location.pathname;
        const newLang = lang === 'en' ? 'it' : 'en';

        // Handle root path
        if (currentPath === '/' || currentPath === '/it') {
            return newLang === 'en' ? '/' : '/it';
        }

        // Handle other paths
        const segments = currentPath.split('/').filter(Boolean);
        if (segments[0] === 'it') {
            segments.shift(); // Remove 'it'
        }

        if (newLang === 'it') {
            segments.unshift('it');
        }

        return `/${segments.join('/')}`;
    };

    const targetUrl = getTargetLanguageUrl();

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
                        className="mr-3 h-12 w-auto object-contain"
                    />
                    <span className="text-main transition-colors group-hover:text-primary">
                        TOMMASO
                    </span>
                    <span className="ml-2 text-main transition-colors group-hover:text-secondary">
                        SCALICI
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-muted transition-colors hover:text-main hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.5)]"
                        >
                            {item.label}
                        </a>
                    ))}

                    {/* Language Selector */}
                    <a
                        href={targetUrl}
                        className="flex items-center gap-2 rounded-full border border-glass-border bg-white/70 px-3 py-1.5 font-mono text-xs text-muted transition-all hover:border-primary/50 hover:text-primary dark:border-white/10 dark:bg-white/5"
                        aria-label="Switch Language"
                    >
                        <Languages className="h-3.5 w-3.5" />
                        <span>{lang === 'en' ? 'IT' : 'EN'}</span>
                    </a>

                    <ThemeToggle />
                </nav>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    <a
                        href={targetUrl}
                        className="flex items-center gap-2 rounded-full border border-glass-border bg-white/70 px-3 py-1.5 font-mono text-xs text-muted transition-all hover:border-primary/50 hover:text-primary dark:border-white/10 dark:bg-white/5"
                    >
                        <span>{lang === 'en' ? 'IT' : 'EN'}</span>
                    </a>
                    <ThemeToggle />

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

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <div className="animate-in slide-in-from-top-5 absolute left-0 right-0 top-16 flex flex-col gap-6 border-b border-surface bg-black/95 p-6 backdrop-blur-xl md:hidden">
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
            )}
        </header>
    );
};
