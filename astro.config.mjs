import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
    site: 'https://tommasoscalici.dev',
    integrations: [react(), tailwind({ applyBaseStyles: false })],
    output: 'server',
    adapter: cloudflare({
        imageService: 'compile',
        platformProxy: { enabled: true },
        routes: {
            strategy: 'auto',
        },
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
