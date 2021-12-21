export const SUPPORTED_LANGUAGES = ['en', 'ru'];
export const DEFAULT_LANGUAGE = 'en';

/**
 * Note: Used default interpolation options.
 * To work with interpolation use "{{word}}" syntax.
 */
export const I18N_BASE_OPTIONS = {
    compatibilityJSON: 'v4',
    interpolation: {
        escapeValue: false, // Note: not needed as React use XSS by default
    },
};
