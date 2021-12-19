import DeviceDetectService from './device-detect';

/**
 * @typedef {Object} ServicesOptions
 * @property {Object} userAgent - userAgent information
 */

/**
 * Services builder
 * @param {ServicesOptions} options - services options
 */
const createServices = (options = {}) => {
    const userAgent = options.userAgent || '';

    return {
        deviceDetect: new DeviceDetectService(userAgent),
    };
};

export default createServices;
