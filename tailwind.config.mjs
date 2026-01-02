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
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
            },
        },
    },
    plugins: [],
};
