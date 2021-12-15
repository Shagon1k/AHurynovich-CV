import appReducer from './store.reducer';
import { createStore, compose } from 'redux';

const reduxDevtoolsCompose =
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const createAppStore = ({ initialState, isServer } = {}) => {
    /**
     * Compose function
     * Example of use: composeFn(applyMiddleware(thunk, loggerMiddleware))
     */
    const composeFn =
        !isServer && typeof reduxDevtoolsCompose === 'function'
            ? reduxDevtoolsCompose
            : compose;

    const store = createStore(appReducer, initialState, composeFn());

    return store;
};
