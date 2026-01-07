import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
        if (typeof document !== 'undefined') {
            const isLight = document.documentElement.getAttribute('data-theme') === 'light';
            return isLight ? 'light' : 'dark';
        }
        return 'dark';
    });

    useEffect(() => {
        // Ensure the dark class is consistent with data-theme on mount
        const isLight = theme === 'light';
        if (isLight) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    }, [theme]);

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
            className="border-glass-border flex items-center justify-center rounded-full border bg-white/70 p-2 text-main transition-all duration-300 hover:bg-glass-bg/10 hover:text-primary dark:border-white/10 dark:bg-white/5"
        >
            {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </button>
    );
};
