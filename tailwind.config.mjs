/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
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
                'glass-bg': 'rgb(var(--color-glass-bg) / <alpha-value>)',
                spotify: '#1db954',
                'spotify-hover': '#1ed760',
                facebook: '#1877F2',
                tiktok: '#ff0050',
                telegram: '#26A5E4',
                googleplay: '#3BCCFF',
                lastfm: '#D51007',
                steam: '#1b2838',
                apple: '#FA243C',
                youtube: '#FF0000',
                amazon: '#25D1DA',
                deezer: '#A238FF',
                bandcamp: '#629aa9',
            },
            boxShadow: {
                'primary-glow': '0 0 20px rgba(0, 243, 255, 0.3)',
                'primary-glow-hover': '0 0 50px rgba(0, 243, 255, 0.4)',
                'secondary-glow': '0 0 20px rgba(255, 0, 85, 0.3)',
                'glass-light':
                    '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
            },
            animation: {
                shake: 'shake 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both',
                'spin-slow': 'spin 8s linear infinite',
            },
            keyframes: {
                shake: {
                    '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
                    '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
                    '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
                    '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
                },
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
            },
        },
    },
    plugins: [typography],
};
