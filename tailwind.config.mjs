/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Cyber-Noir Palette
                background: "#050505", // Deep Black
                primary: "#00f3ff",    // Neon Cyan (Tech)
                secondary: "#ff0055",  // Electric Red/Purple (Music)
                surface: "rgba(255, 255, 255, 0.05)", // Glassmorphism
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
            },
        },
    },
    plugins: [],
}
