import { fork, spawn, all } from 'redux-saga/effects';

import { initAppInfo, handleScrollChange, handleWindowResize } from '@slices/app-info/app-info.saga';
import { initAppContentConfig } from '@slices/content-config/content-config.saga';
import { initI18n, watchI18n } from '@slices/i18n/i18n.saga';

const watchSagas = [watchI18n, handleScrollChange, handleWindowResize];
const startSagas = [initAppInfo, initI18n, initAppContentConfig];

/**
 * Application watch sagas
 */
export function* watchSaga() {
    yield all(watchSagas.map(spawn));
}

/**
 * Application init sagas
 */
export function* startSaga() {
    yield all(startSagas.map(fork));
}

/**
 * Main application saga
 */
function* rootSaga() {
    yield spawn(watchSaga);
    yield fork(startSaga);
}

export default rootSaga;
