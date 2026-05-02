import fs from 'node:fs';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';
import icon from 'astro-icon';

// Load wrangler.jsonc to use as defaults for env variables
const wranglerPath = './wrangler.jsonc';
/**
 * @typedef {Object} WranglerVars
 * @property {string} [PUBLIC_FACEBOOK_PIXEL_ID]
 * @property {string} [PUBLIC_TIKTOK_PIXEL_ID]
 * @property {boolean} [ENABLE_FACEBOOK_PIXEL]
 * @property {boolean} [ENABLE_TIKTOK_PIXEL]
 */

/** @type {WranglerVars} */
let wranglerVars = {};

if (fs.existsSync(wranglerPath)) {
    try {
        const content = fs.readFileSync(wranglerPath, 'utf-8');
        // Simple JSONC parser: strip single-line comments
        const json = content.replace(/\/\/.*$/gm, '');
        /** @type {unknown} */
        const parsed = JSON.parse(json);

        if (parsed && typeof parsed === 'object' && 'vars' in parsed) {
            const config = /** @type {{ vars: WranglerVars }} */ (parsed);
            wranglerVars = config.vars;
        }
    } catch (e) {
        console.warn('Warning: Could not parse wrangler.jsonc for env defaults', e);
    }
}

export default defineConfig({
    site: 'https://tommasoscalici.dev',
    integrations: [sitemap(), icon()],
    vite: {
        plugins: [tailwindcss()],
        build: {
            sourcemap: true,
        },
    },
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
                default: wranglerVars.PUBLIC_FACEBOOK_PIXEL_ID ?? '',
            }),
            PUBLIC_TIKTOK_PIXEL_ID: envField.string({
                context: 'client',
                access: 'public',
                default: wranglerVars.PUBLIC_TIKTOK_PIXEL_ID ?? '',
            }),
            ENABLE_FACEBOOK_PIXEL: envField.boolean({
                context: 'client',
                access: 'public',
                default: wranglerVars.ENABLE_FACEBOOK_PIXEL ?? false,
            }),
            ENABLE_TIKTOK_PIXEL: envField.boolean({
                context: 'client',
                access: 'public',
                default: wranglerVars.ENABLE_TIKTOK_PIXEL ?? false,
            }),
        },
    },
});
