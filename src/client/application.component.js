import { Provider as ReduxStateProvider } from 'react-redux';
import { BrowserRouter, StaticRouter } from 'react-router-dom';

import { ServicesProvider } from '@reusables/services-context';
import Routes from './components/routes';

import './application.module.scss';

const Application = ({ options }) => {
    const { isServer, path, store, services } = options;
    const AppRouter = isServer ? StaticRouter : BrowserRouter;
    const routerProps = isServer
        ? {
              context: {},
              location: path,
          }
        : {
              path: '/',
          };

    return (
        <ReduxStateProvider store={store}>
            <ServicesProvider value={services}>
                <AppRouter {...routerProps}>
                    <div className="appContainer">
                        <Routes />
                    </div>
                </AppRouter>
            </ServicesProvider>
        </ReduxStateProvider>
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
    }),
};

export default Application;
