import { getContext, put } from 'redux-saga/effects';
import { setDeviceInfo } from './app-info.actions';

/**
 * Enhances store with base application information (e.g. device type, language, etc.)
 */
export function* initAppInfo() {
    const services = yield getContext('services');
    const { deviceDetect } = services;
    const deviceInfo = deviceDetect.getDeviceInfo() || {};

    yield put(
        setDeviceInfo({
            isMobile: deviceInfo.isMobile,
            isTablet: deviceInfo.isTablet,
            isDesktop: deviceInfo.isDesktop,
        })
    );
}
