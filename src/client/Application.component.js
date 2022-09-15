import { Provider as ReduxStateProvider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import PropTypes from 'prop-types';

import { ServicesProvider } from '@reusables/services-context';
import Head from './components/base/AppHead';
import Routes from './components/routes';

import styles from './Application.module.scss';

const Application = ({ options }) => {
    const { isServer, path, store, services, helmetContext } = options;
    const AppRouter = isServer ? StaticRouter : BrowserRouter;
    const routerProps = isServer
        ? {
              context: {},
              location: path,
          }
        : {
              path: '/',
          };

    const renderApplication = () => (
        <ReduxStateProvider store={store}>
            <ServicesProvider value={services}>
                <AppRouter {...routerProps}>
                    <Head />
                    <div className={styles['app-container']}>
                        <Routes />
                    </div>
                </AppRouter>
            </ServicesProvider>
        </ReduxStateProvider>
    );

    return WITH_SSR ? (
        <HelmetProvider context={helmetContext}>{renderApplication()}</HelmetProvider>
    ) : (
        renderApplication()
    );
};

Application.propTypes = {
    /** Application creation options */
    options: PropTypes.shape({
        /** Whether application should be created on server side (SSR case) */
        isServer: PropTypes.bool,
        /** Current location path if exists */
        path: PropTypes.string,
        /** Application store */
        store: PropTypes.shape({}),
        /** Application services */
        services: PropTypes.shape({}),
        /** React Helmet context (used for async SSR flow) */
        helmetContext: PropTypes.shape({}),
    }),
};

export default Application;
