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
    // Facebook Pixel
    fbq?: (event: string, eventName: string, params?: Record<string, unknown>) => void;
    _fbq?: unknown;
    // TikTok Pixel
    ttq?: {
        track: (event: string, params?: Record<string, unknown>) => void;
        [key: string]: unknown;
    };
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
}
