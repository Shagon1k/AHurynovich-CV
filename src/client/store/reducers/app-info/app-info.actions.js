import { SET_DEVICE_INFO } from './app-info.constants';

/**
 * Sets provided information about device (is mobile/desktop/tablet)
 * @param {Object} payload - device info to set
 * @returns {{ type: SET_DEVICE_INFO, payload: * }}
 */
export const setDeviceInfo = (payload) => ({
    type: SET_DEVICE_INFO,
    payload,
});
