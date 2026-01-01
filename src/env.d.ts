/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly PUBLIC_FACEBOOK_PIXEL_ID: string;
    readonly PUBLIC_TIKTOK_PIXEL_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

interface Window {
    fbq?: unknown;
    _fbq?: unknown;
    ttq?: unknown;
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
}
