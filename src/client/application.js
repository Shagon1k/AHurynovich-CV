import Application from './application.component';

/**
 * Main application render function
 * @param {Object} options - render options
 * @param {Boolean} isServer - whether app rendering happen on server side or not
 * @param {String} path - current route path
 * @param {Object} store - app Redux store
 * @param {Object} services - app services
 * @param {Object} helmetContext - React Helmet context (used for async SSR flow)
 * @returns {Object} rendered app
 */
export const createApp = ({ isServer, path, store, services, helmetContext } = {}) => {
    const app = (
        <Application
            options={{ isServer: isServer, path: path, store: store, services, helmetContext }}
        />
    );

    return app;
};
