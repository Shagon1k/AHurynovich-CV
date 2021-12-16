import { createApp } from './application';
import { createAppStore } from './store/store';

const startClientApp = () => {
    const preloadedState = window?.__PRELOADED_STATE__ || {};
    const appStore = createAppStore({
        isServer: false,
        initialState: preloadedState,
    });
    delete window.PRELOADED_STATE;

    const app = createApp({ isServer: false, store: appStore });
    const renderFunc = WITH_SSR ? ReactDOM.hydrate : ReactDOM.render;

    renderFunc(app, document.getElementById('root'));
};

if (typeof window !== 'undefined') {
    startClientApp();
}
