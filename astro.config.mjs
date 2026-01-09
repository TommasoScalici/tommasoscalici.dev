import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

const isTest = process.env.VITEST === 'true';

export default defineConfig({
    site: 'https://tommasoscalici.dev',
    integrations: [react(), tailwind({ applyBaseStyles: false }), sitemap()],
    output: 'static',
    build: {
        inlineStylesheets: 'always',
    },
    adapter: cloudflare({
        platformProxy: { enabled: !isTest },
        imageService: 'compile',
    }),
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'it'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    image: {
        remotePatterns: [{ protocol: 'https' }],
    },
});
