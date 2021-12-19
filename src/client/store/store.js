import appReducer from './store.reducer';
import rootSaga from './store.saga';
import { getSagaMiddleware } from './middlewares';

const reduxDevtoolsCompose =
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const createAppStore = ({ initialState, isServer, services } = {}) => {
    /**
     * Compose function
     * Example of use: composeFn(applyMiddleware(thunk, loggerMiddleware))
     */
    const composeFn =
        !isServer && typeof reduxDevtoolsCompose === 'function'
            ? reduxDevtoolsCompose
            : Redux.compose;

    const sagaMiddleware = getSagaMiddleware({ services });
    const middlewareEnhancer = Redux.applyMiddleware(sagaMiddleware);
    const store = Redux.createStore(appReducer, initialState, composeFn(middlewareEnhancer));

    sagaMiddleware.run(rootSaga);

    return store;
};
