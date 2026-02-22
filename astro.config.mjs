import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig, envField } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
    site: 'https://tommasoscalici.dev',
    integrations: [tailwind({ applyBaseStyles: false }), sitemap(), icon()],
    trailingSlash: 'always',
    output: 'static',
    build: {
        format: 'directory',
        inlineStylesheets: 'always',
    },
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
