import { configureStore } from '@reduxjs/toolkit';

import { getSagaMiddleware } from './middlewares';
import appReducer from './store.reducer';
import rootSaga from './store.saga';
import { type ICreateAppStoreOptions, ICreateAppStore } from './store.types';

/**
 * Creates application store
 * Note: Used asynchronous flow as application main saga should be completed before main render happened to fill all start data (language, device info, etc.)
 */
export const createAppStore: ICreateAppStore = async ({ initialState, services }: ICreateAppStoreOptions) => {
    const sagaMiddleware = getSagaMiddleware({ services });
    const appMiddlewares = [sagaMiddleware];

    const store = configureStore({
        reducer: appReducer,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => {
            const appDefaultMiddlewares = getDefaultMiddleware({
                // Disabling default "redux-thunk" middleware if favor of "redux-saga" usage
                thunk: false,
            });

            return [...appDefaultMiddlewares, ...appMiddlewares];
        },
    });

    await sagaMiddleware.run(rootSaga).toPromise();

    return store;
};
