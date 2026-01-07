export type EventName =
    | 'view_item' // User lands on the page (viewing the "Product")
    | 'select_content' // User clicks a specific platform (e.g. Apple Music) or "Listen"
    | 'click_deep_link'; // User clicks the main Call-to-Action "Open in Spotify"

interface EventData {
    [key: string]: string | number | boolean | undefined | string[];
    content_name?: string;
    content_ids?: string[];
    content_type?: string;
}

/**
 * Maps unified event names to platform-specific standard events.
 */
const EVENT_MAP: Record<EventName, { fb: string; tt: string }> = {
    view_item: { fb: 'ViewContent', tt: 'ViewContent' },
    select_content: { fb: 'ViewContent', tt: 'ViewContent' }, // Secondary engagement
    click_deep_link: { fb: 'Lead', tt: 'ClickButton' }, // PRIMARY CONVERSION: Intent to open App
};

/**
 * Unified tracking function.
 * Dispatches events to GA4, Facebook Pixel, and TikTok Pixel if they are available.
 */
export const trackEvent = (eventName: EventName, data?: EventData) => {
    if (typeof window === 'undefined') return;

    // 1. Google Analytics 4 (Always try to fire if loaded)
    if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, data);
    }

    // 2. Meta Pixel (Facebook)
    if (typeof window.fbq === 'function') {
        const fbName = EVENT_MAP[eventName].fb;
        window.fbq('track', fbName, data);
    }

    // 3. TikTok Pixel
    if (window.ttq && typeof window.ttq.track === 'function') {
        const ttName = EVENT_MAP[eventName].tt;
        const ttData = { ...data };

        // Map content_ids (standard) to content_id (TikTok expectation)
        if (Array.isArray(ttData.content_ids) && ttData.content_ids.length > 0) {
            // TikTok prefers a single ID or an array, but keys it as 'content_id'
            ttData.content_id = ttData.content_ids[0];
        }

        window.ttq.track(ttName, ttData);
    }
};
