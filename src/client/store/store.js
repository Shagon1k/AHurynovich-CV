import appReducer from './store.reducer';

const reduxDevtoolsCompose =
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const createAppStore = ({ initialState, isServer } = {}) => {
    /**
     * Compose function
     * Example of use: composeFn(applyMiddleware(thunk, loggerMiddleware))
     */
    const composeFn =
        !isServer && typeof reduxDevtoolsCompose === 'function'
            ? reduxDevtoolsCompose
            : Redux.compose;

    const store = Redux.createStore(appReducer, initialState, composeFn());

    return store;
};
