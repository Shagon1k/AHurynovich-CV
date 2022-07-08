import appReducer from './store.reducer';
import rootSaga from './store.saga';
import { getSagaMiddleware } from './middlewares';

const reduxDevtoolsCompose = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

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
    /**
     * Compose function
     * Example of use: composeFn(applyMiddleware(thunk, loggerMiddleware))
     */
    const composeFn =
        !isServer && typeof reduxDevtoolsCompose === 'function' ? reduxDevtoolsCompose : Redux.compose;

    const sagaMiddleware = getSagaMiddleware({ services });
    const middlewareEnhancer = Redux.applyMiddleware(sagaMiddleware);
    const store = Redux.createStore(appReducer, initialState, composeFn(middlewareEnhancer));

    await sagaMiddleware.run(rootSaga).toPromise();

    return store;
};
