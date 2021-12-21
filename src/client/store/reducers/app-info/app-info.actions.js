import { SET_DEVICE_INFO, SET_APP_LANGUAGE } from './app-info.constants';

/**
 * Note: All application information should be set indirectly as side effect. No straight setup allowed!
 */

/**
 * Sets provided information about device (is mobile/desktop/tablet)
 * @param {Object} payload - device info to set
 * @returns {{ type: SET_DEVICE_INFO, payload: * }}
 */
export const setDeviceInfo = (payload) => ({
    type: SET_DEVICE_INFO,
    payload,
});

/**
 * Sets provided language as application language
 * @param {Object} payload - language key to set
 * @returns {{ type: SET_APP_LANGUAGE, payload: * }}
 */
export const setAppLanguage = (payload) => ({
    type: SET_APP_LANGUAGE,
    payload,
});
