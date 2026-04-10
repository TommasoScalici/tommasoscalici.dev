/**
 * Normalizes a path by ensuring consistent slashes and optionally removing
 * the language prefix.
 *
 * @param pathname The path to normalize (e.g., '/it/uses/', '/uses', '/')
 * @param stripLanguage Whether to remove the language prefix ('/it') from the path.
 * @returns A clean path with leading and ending slashes (e.g., '/it/uses/', '/uses/') or '/' for root.
 */
export const normalizePath = (pathname: string, stripLanguage = false): string => {
    let path = pathname;
    // 1. Remove trailing slash temporarily to simplify segment check
    if (path.endsWith('/')) {
        path = path.slice(0, -1);
    }
    // 2. Remove leading slash
    if (path.startsWith('/')) {
        path = path.slice(1);
    }

    // Now path is "it/privacy-policy" or "privacy-policy" or "it" or ""

    const segments = path.split('/').filter((s) => s.length > 0);

    if (stripLanguage && segments[0] === 'it') {
        segments.shift(); // Remove 'it'
    }

    const clean = segments.join('/');
    return clean ? `/${clean}/` : '/';
};

/**
 * Generates a full URL for a specific locale.
 *
 * @param pathname The raw pathname from Astro (e.g. '/uses', '/it/uses')
 * @param site The site base URL (e.g. 'https://example.com')
 * @param locale The target locale ('en' or 'it')
 * @returns The fully qualified URL.
 */
export const getLocalizedUrl = (pathname: string, site: URL | string, locale: string): string => {
    const cleanPath = normalizePath(pathname, true);
    const siteUrl = new URL(site);

    if (locale === 'it') {
        // localized path: /it/path/
        // cleanPath is either '/' or '/foo/'
        // if cleanPath is '/', result is /it/
        // if cleanPath is '/foo/', result is /it/foo/
        return new URL(`/it${cleanPath}`, siteUrl).toString();
    }

    // Default locale (en): just the clean path
    return new URL(cleanPath, siteUrl).toString();
};
