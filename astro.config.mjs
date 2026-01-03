import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

const isTest = process.env.VITEST === 'true';

export default defineConfig({
    site: 'https://tommasoscalici.dev',
    integrations: [
        react(),
        tailwind({ applyBaseStyles: false }),
        sitemap(),
        partytown({
            config: {
                forward: ['dataLayer.push', 'gtag'],
            },
        }),
    ],
    output: 'static',
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
        domains: ['f4.bcbits.com', 'googleusercontent.com', 'i.scdn.co'],
        remotePatterns: [{ protocol: 'https' }],
    },
});
