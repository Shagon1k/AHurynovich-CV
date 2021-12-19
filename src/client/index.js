import { createApp } from './application';
import { createAppStore } from './store/store';
import { createServices } from '@services';

/**
 * Get services created and handled on client side
 * @returns {Object} services
 */
const getClientServices = () => {
    const userAgent = window?.navigator?.userAgent;

    return createServices({ userAgent });
};

const startClientApp = () => {
    const preloadedState = window?.__PRELOADED_STATE__ || {};
    const services = getClientServices();
    const appStore = createAppStore({
        isServer: false,
        initialState: preloadedState,
        services,
    });
    delete window.PRELOADED_STATE;

    const app = createApp({ isServer: false, store: appStore, services });
    const renderFunc = WITH_SSR ? ReactDOM.hydrate : ReactDOM.render;

    renderFunc(app, document.getElementById('root'));
};

if (typeof window !== 'undefined') {
    startClientApp();
}
