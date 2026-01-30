import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig, envField } from 'astro/config';

const isTest = process.env.VITEST === 'true';

export default defineConfig({
    site: 'https://tommasoscalici.dev',
    integrations: [react(), tailwind({ applyBaseStyles: false }), sitemap()],
    trailingSlash: 'always',
    output: 'static',
    build: {
        format: 'directory',
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
    env: {
        schema: {
            PUBLIC_FACEBOOK_PIXEL_ID: envField.string({
                context: 'client',
                access: 'public',
            }),
            PUBLIC_TIKTOK_PIXEL_ID: envField.string({
                context: 'client',
                access: 'public',
            }),
        },
    },
});
