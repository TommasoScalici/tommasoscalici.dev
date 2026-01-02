import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    useEffect(() => {
        // Initialize state from local storage or DOM
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        // Sync React state with the DOM attribute set by the blocking script to prevent hydration mismatch.
        // This necessitates a state update during the effect.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTheme((prev) => ((prev === 'light') === isLight ? prev : isLight ? 'light' : 'dark'));
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);

        if (newTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="flex items-center justify-center rounded-full border border-glass-border/10 bg-glass-bg/5 p-2 text-main transition-all duration-300 hover:bg-glass-bg/10 hover:text-primary"
        >
            {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </button>
    );
};
