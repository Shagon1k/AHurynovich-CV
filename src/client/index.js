import { createApp } from './application';
import { createAppStore } from './store/store';
import { createServices } from '@services';
import { APP_ROOT_ID } from '@config/application';

/**
 * Get services created and handled on client side
 * @returns {Object} services
 */
const getClientServices = () => {
    const userAgent = window?.navigator?.userAgent;
    const baseLanguage = window?.navigator?.userLanguage || window?.navigator?.language || null;

    return createServices({ userAgent, baseLanguage });
};

const startClientApp = async () => {
    const preloadedState = window?.__PRELOADED_STATE__ || {};
    const services = getClientServices();
    const appStore = await createAppStore({
        isServer: false,
        initialState: preloadedState,
        services,
    });
    delete window.PRELOADED_STATE;

    const app = createApp({ isServer: false, store: appStore, services });
    const renderFunc = WITH_SSR ? ReactDOM.hydrate : ReactDOM.render;

    renderFunc(app, document.getElementById(APP_ROOT_ID));
};

if (typeof window !== 'undefined') {
    startClientApp();
}
