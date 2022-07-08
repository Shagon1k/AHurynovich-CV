import { createInstance as createi18nextInstance } from 'i18next';

import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, I18N_BASE_OPTIONS } from './config/i18n.config';

import {
    ERROR_MSG_INITIALIZATION_ERROR,
    ERROR_MSG_KEY_NO_LANGUAGE,
    ERROR_MSG_TEMPLATE_NO_LANGUAGE,
    ERROR_MSG_KEY_NO_TRANSLATION,
    ERROR_MSG_TEMPLATE_NO_TRANSLATION,
    ERROR_MSG_KEY_TRANSLATIONS_SETUP,
    ERROR_MSG_TEMPLATE_TRANSLATIONS_SETUP,
    ERROR_MSG_NOT_SUPPORTED_LANGUAGE,
} from './i18n.constants';

class I18n {
    constructor(baseLanguage) {
        this._i18nInstance = null;
        this._supportedLanguages = null;
        this._baseLanguage = this._transformBaseLanguage(baseLanguage) || DEFAULT_LANGUAGE;
    }

    init = async (languageCode) => {
        let initLanguageCode = '';
        const translationsOptions = await this._getTranslationsOptions();
        const { languagesResources, checkedSupportedLanguages, fallbackLanguage } =
            translationsOptions;

        this._supportedLanguages = checkedSupportedLanguages;

        if (checkedSupportedLanguages.includes(languageCode)) {
            initLanguageCode = languageCode;
        } else if (checkedSupportedLanguages.includes(this._baseLanguage)) {
            initLanguageCode = this._baseLanguage;
        } else {
            initLanguageCode = fallbackLanguage;
            console.warn(
                ERROR_MSG_TEMPLATE_TRANSLATIONS_SETUP.replace(
                    ERROR_MSG_KEY_TRANSLATIONS_SETUP,
                    languageCode
                )
            );
        }

        this._i18nInstance = createi18nextInstance(
            {
                ...I18N_BASE_OPTIONS,
                lng: initLanguageCode,
                resources: languagesResources,
                fallbackLng: fallbackLanguage,
                supportedLngs: checkedSupportedLanguages,
                returnedObjectHandler: this._handleMissingKey,
                parseMissingKeyHandler: this._handleMissingKey,
            },
            (error) => {
                if (error) {
                    console.error(ERROR_MSG_INITIALIZATION_ERROR, error);
                    throw new Error(error);
                }
            }
        );
    };

    _transformBaseLanguage(baseLanguage) {
        if (typeof baseLanguage !== 'string') {
            return '';
        }

        const transformedBaseLanguage = baseLanguage.slice(0, 2).toLowerCase();

        return transformedBaseLanguage;
    }

    _getTranslationsOptions = async () => {
        let languagesResources = {};
        const checkedSupportedLanguages = [];

        for (const languageCode of SUPPORTED_LANGUAGES) {
            const languageTranslationsFile = await import(
                `./config/languages/${languageCode}.json`
            );
            const languageTranslations = languageTranslationsFile?.default || null;

            if (languageTranslations) {
                languagesResources[languageCode] = {
                    translation: languageTranslations,
                };
                checkedSupportedLanguages.push(languageCode);
            } else {
                console.error(
                    ERROR_MSG_TEMPLATE_NO_LANGUAGE.replace(ERROR_MSG_KEY_NO_LANGUAGE, languageCode)
                );
            }
        }

        const fallbackLanguage = checkedSupportedLanguages.includes(DEFAULT_LANGUAGE)
            ? DEFAULT_LANGUAGE
            : checkedSupportedLanguages[0];

        return {
            languagesResources,
            checkedSupportedLanguages,
            fallbackLanguage,
        };
    };

    _handleMissingKey = (key) => {
        console.warn(ERROR_MSG_TEMPLATE_NO_TRANSLATION.replace(ERROR_MSG_KEY_NO_TRANSLATION, key));

        return `{Missed translation for ${key}}`;
    };

    getLanguageCode = () => this._i18nInstance.language;

    checkLanguageSupported = (languageCode) => {
        return this._supportedLanguages.includes(languageCode);
    };

    changeLanguage = async (languageCode) => {
        if (this._supportedLanguages.includes(languageCode)) {
            await this._i18nInstance.changeLanguage(languageCode);
        } else {
            throw new Error(ERROR_MSG_NOT_SUPPORTED_LANGUAGE);
        }
    };

    translate = (key, interpolationKeys) => this._i18nInstance.t(key, interpolationKeys);
}

export default I18n;
