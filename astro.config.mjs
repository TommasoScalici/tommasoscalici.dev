import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
    integrations: [react(), tailwind({ applyBaseStyles: false })],
    output: 'server',
    adapter: cloudflare(),
    i18n: {
        defaultLocale: "en",
        locales: ["en", "it"],
        routing: {
            prefixDefaultLocale: false
        }
    },
    vite: {
        ssr: {
            external: ['node:fs', 'node:path']
        }
    }
});
