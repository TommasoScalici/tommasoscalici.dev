/// <reference types="astro/client" /> // Astro types
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
    fbq?: {
        (event: 'track', eventName: string, params?: Record<string, unknown>): void;
        (event: 'consent', action: 'grant' | 'revoke'): void;
        (event: 'init', pixelId: string): void;
        (event: 'set', key: string, value: unknown, id: string): void;
        callMethod?: (...args: unknown[]) => void;
        queue?: unknown[];
        loaded?: boolean;
    };
    _fbq?: unknown;
    // TikTok Pixel
    ttq?: {
        track: (event: string, params?: Record<string, unknown>) => void;
        enableCookie: () => void;
        disableCookie: () => void;
        load: (id: string, options?: Record<string, unknown>) => void;
        page: () => void;
        [key: string]: unknown;
    };
    dataLayer: unknown[];
    gtag: (event: string, action: string, ...args: unknown[]) => void;
    ANALYTICS_CONFIG?: {
        gaId?: string;
        fbPixelId?: string;
        tiktokPixelId?: string;
    };
}
