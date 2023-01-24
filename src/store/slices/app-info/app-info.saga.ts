import { EventChannel as IEventChannel, eventChannel } from 'redux-saga';
import { getContext, put, take, call, select } from 'redux-saga/effects';
import { throttle } from 'throttle-debounce';

import { setDeviceInfo, setIsAppScrolledDown } from './app-info.slice';
import { selectIsAppScrolledDown } from './app-info.selector';

const THROTTLE_DELAY = 100;

const getIsAppScrolledDownChannel = () =>
    eventChannel((emitter) => {
        const handleScroll = throttle(THROTTLE_DELAY, () => {
            const isAppScrolledDown = window.scrollY > 0;
            emitter(isAppScrolledDown);
        });

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

/**
 * Enhances store with base application information (e.g. device type, language, etc.)
 */
export function* initAppInfo() {
    const { deviceDetect } = yield getContext('services');
    const deviceInfo = deviceDetect.deviceInfo || {};

    yield put(
        setDeviceInfo({
            isMobile: deviceInfo.isMobile,
            isDesktop: deviceInfo.isDesktop,
        })
    );
}

export function* handleScrollChange() {
    const scrollDownChannel: IEventChannel<boolean> = yield call(getIsAppScrolledDownChannel);

    const isAppScrolledDownInitial = window.scrollY > 0;
    yield put(setIsAppScrolledDown(isAppScrolledDownInitial));

    while (scrollDownChannel) {
        const isAppScrolledDown: boolean = yield take(scrollDownChannel);
        const currentIsAppScrolledDown: boolean = yield select(selectIsAppScrolledDown);
        if (currentIsAppScrolledDown !== isAppScrolledDown) {
            yield put(setIsAppScrolledDown(isAppScrolledDown));
        }
    }
}
