import DeviceDetectService from './device-detect';
import I18nService from './i18n';

/**
 * @typedef {Object} ServicesOptions
 * @property {Object} userAgent - userAgent information
 * @property {String} baseLanguage - user's base language
 */

/**
 * Services builder
 * @param {ServicesOptions} options - services options
 * @returns {Object} services instance
 */
const createServices = (options = {}) => {
    const { userAgent = '', baseLanguage = null } = options;

    return {
        deviceDetect: new DeviceDetectService(userAgent),
        i18n: new I18nService(baseLanguage),
    };
};

export default createServices;
