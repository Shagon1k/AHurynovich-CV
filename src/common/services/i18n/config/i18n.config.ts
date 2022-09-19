export const SUPPORTED_LANGUAGES = ['en', 'ru'];
export const DEFAULT_LANGUAGE = 'en';

/**
 * Used default interpolation options.
 * To work with interpolation use "{{word}}" syntax.
 */
export const I18N_BASE_OPTIONS = {
    interpolation: {
        escapeValue: false, // Note: Not needed as React use XSS by default
    },
};
