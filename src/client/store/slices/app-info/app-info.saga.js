import { getContext, put } from 'redux-saga/effects';
import { setDeviceInfo } from './app-info.slice';

/**
 * Enhances store with base application information (e.g. device type, language, etc.)
 */
export function* initAppInfo() {
    const { deviceDetect } = yield getContext('services');
    const deviceInfo = deviceDetect.deviceInfo || {};

    yield put(
        setDeviceInfo({
            isMobile: deviceInfo.isMobile,
            isTablet: deviceInfo.isTablet,
            isDesktop: deviceInfo.isDesktop,
        })
    );
}
