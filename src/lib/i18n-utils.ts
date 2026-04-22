/**
 * Retrieves localized content from a string or an object with language keys.
 *
 * @param content The content which can be a direct string or an object mapping locales to strings.
 * @param lang The current language code (e.g., 'en', 'it').
 * @param fallbackLang The fallback language code (default: 'en').
 * @returns The localized string.
 */
export const getLocalizedContent = <T = string>(
    content: T | Record<string, T> | undefined,
    lang: string,
    fallbackLang = 'en',
): T | string => {
    if (!content) return '';
    if (typeof content !== 'object') return content;

    const record = content as Record<string, T>;
    if (lang in record) return record[lang];
    if (fallbackLang in record) return record[fallbackLang];

    return '';
};
