import DeviceDetectService from './device-detect';
import I18nService from './i18n';

/**
 * @typedef {Object} ServicesOptions
 * @property {Object} userAgent - userAgent information
 */

/**
 * Services builder
 * @param {ServicesOptions} options - services options
 * @returns {Object} services instance
 */
const createServices = (options = {}) => {
    const userAgent = options.userAgent || '';

    return {
        deviceDetect: new DeviceDetectService(userAgent),
        i18n: new I18nService(),
    };
};

export default createServices;
