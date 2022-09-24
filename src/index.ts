import { createRoot } from 'react-dom/client';
import { createApp } from './application';
import { createAppStore } from './store/store';
import { createServices } from '@services';
import { APP_ROOT_ID } from '@config/application';

// Get services created and handled on client side
const getServices = () => {
    const userAgent = window?.navigator?.userAgent;
    const baseLanguage = window?.navigator?.language || null;

    return createServices({ userAgent, baseLanguage });
};

const startApp = async () => {
    const services = getServices();
    const appStore = await createAppStore({
        services,
    });

    const appContainer = document.getElementById(APP_ROOT_ID) as Element;
    const app = createApp({ store: appStore, services });

    const appRoot = createRoot(appContainer);
    appRoot.render(app);
};

const startPWAServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            /**
             * Note: For full PWA support application should have specific Service Worker to control Offline mode using caching, etc.
             * PWA Service Worker is created by Webpack Workbox Plugin during bundling phase.
             * More details: https://webpack.js.org/guides/progressive-web-application/
             */
            navigator.serviceWorker.register('/service-worker.js');
        });
    }
};

if (typeof window !== 'undefined') {
    startApp();

    if (WITH_PWA) {
        startPWAServiceWorker();
    }
}
