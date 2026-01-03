import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    useEffect(() => {
        // Initialize state from local storage or DOM
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        // Ensure the dark class is consistent with data-theme on mount
        if (isLight) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }

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
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="flex items-center justify-center rounded-full border border-glass-border bg-white/70 p-2 text-main transition-all duration-300 hover:bg-glass-bg/10 hover:text-primary dark:border-white/10 dark:bg-white/5"
        >
            {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </button>
    );
};
