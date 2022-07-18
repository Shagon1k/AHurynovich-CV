import { configureStore } from '@reduxjs/toolkit';

import appReducer from './store.reducer';
import rootSaga from './store.saga';
import { getSagaMiddleware } from './middlewares';

/**
 * Creates application store
 * Note: Used asynchronous flow as application main saga should be completed before main render happened to fill all start data (language, device info, etc.)
 * @param {Object} options - application store creation options
 * @param {Object} initialState - store initial state
 * @param {Boolean} isServer - whether store created on server side or not
 * @param {Object} services - application services instance
 * @returns
 */
export const createAppStore = async ({ initialState, isServer, services } = {}) => {
    const sagaMiddleware = getSagaMiddleware({ services });
    const appMiddlewares = [sagaMiddleware];

    const store = configureStore({
        reducer: appReducer,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => {
            const appDefaultMiddlewares = getDefaultMiddleware({
                // NOTE: Disabling default "redux-thunk" middleware if favor of "redux-saga" usage
                thunk: false,
            });

            return [...appDefaultMiddlewares, ...appMiddlewares];
        },
        devTools: !isServer,
    });

    await sagaMiddleware.run(rootSaga).toPromise();

    return store;
};
