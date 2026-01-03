/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Cyber-Noir Palette
                background: 'rgb(var(--color-background) / <alpha-value>)', // Deep Black
                primary: 'rgb(var(--color-primary) / <alpha-value>)', // Neon Cyan (Tech)
                secondary: 'rgb(var(--color-secondary) / <alpha-value>)', // Electric Red/Purple (Music)
                surface: 'rgb(var(--color-surface) / 0.05)', // Glassmorphism (default 5% opacity)
                main: 'rgb(var(--color-text-main) / <alpha-value>)',
                muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
                inverse: 'rgb(var(--color-text-inverse) / <alpha-value>)',
                'glass-border': 'rgb(var(--color-glass-border) / <alpha-value>)',
                'glass-bg': 'rgb(var(--color-glass-bg) / <alpha-value>)',
            },
            boxShadow: {
                'glass-light':
                    '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
            },
        },
    },
    plugins: [],
};
