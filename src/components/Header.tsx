import React, { useState } from 'react';
import { Menu, X, Languages } from 'lucide-react';

interface HeaderProps {
    lang: string;
    navItems: { label: string; href: string }[];
}

export const Header: React.FC<HeaderProps> = ({ lang, navItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleLanguage = () => {
        const newLang = lang === 'en' ? 'it' : 'en';
        const currentPath = window.location.pathname;

        // Handle root path
        if (currentPath === '/' || currentPath === '/it') {
            window.location.href = newLang === 'en' ? '/' : '/it';
            return;
        }

        // Handle other paths
        const segments = currentPath.split('/').filter(Boolean);
        if (segments[0] === 'it') {
            segments.shift(); // Remove 'it'
        }

        if (newLang === 'it') {
            segments.unshift('it');
        }

        window.location.href = `/${segments.join('/')}`;
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-surface bg-background/70 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <a
                    href={lang === "en" ? "/" : `/${lang}`}
                    className="group font-mono font-bold text-xl tracking-tighter transition-colors flex items-center"
                >
                    <img src="/images/logo.webp" alt="TS Circuit Logo" className="h-12 w-auto mr-3 object-contain" />
                    <span className="text-white group-hover:text-primary transition-colors">TOMMASO</span>
                    <span className="text-white group-hover:text-secondary transition-colors ml-2">SCALICI</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.5)]"
                        >
                            {item.label}
                        </a>
                    ))}

                    {/* Language Selector */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-surface bg-white/5 text-xs font-mono text-gray-300 hover:border-primary/50 hover:text-primary transition-all"
                        aria-label="Switch Language"
                    >
                        <Languages className="w-3.5 h-3.5" />
                        <span>{lang === 'en' ? 'IT' : 'EN'}</span>
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-surface bg-white/5 text-xs font-mono text-gray-300 hover:border-primary/50 hover:text-primary transition-all"
                    >
                        <span>{lang === 'en' ? 'IT' : 'EN'}</span>
                    </button>

                    <button
                        className="text-gray-400 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 border-b border-surface backdrop-blur-xl p-6 flex flex-col gap-6 animate-in slide-in-from-top-5">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-lg font-medium text-gray-300 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};
