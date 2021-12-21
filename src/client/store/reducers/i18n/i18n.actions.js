import { CHANGE_LANGUAGE } from './i18n.constants';

/**
 * Changes application language
 * @param {Object} payload - language code
 * @returns {{ type: CHANGE_LANGUAGE, payload: * }}
 */
export const changeLanguage = (payload) => ({
    type: CHANGE_LANGUAGE,
    payload,
});
