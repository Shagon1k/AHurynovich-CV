import { fork, spawn, all } from 'redux-saga/effects';

import { initAppInfo } from '@reducers/app-info/app-info.saga';

const watchSagas = [];
const startSagas = [initAppInfo];

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
    yield spawn(startSaga);
}

export default rootSaga;
