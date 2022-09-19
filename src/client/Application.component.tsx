import { Provider as ReduxStateProvider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

import { ServicesProvider } from '@reusables/services-context';
import Head from './components/base/AppHead';
import Routes from './components/routes';

import styles from './Application.module.scss';

import { IApplicationOptions } from './application';

interface IApplicationProps {
    options: IApplicationOptions;
}

const Application: React.FC<IApplicationProps> = ({ options }: IApplicationProps) => {
    const { isServer, path, store, services, helmetContext } = options;
    const AppRouter = isServer ? StaticRouter : BrowserRouter;
    const routerProps = isServer
        ? {
              context: {},
              location: path || '/',
          }
        : {
              basename: '/',
              location: '',
          };

    const renderApplication = (): JSX.Element => (
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

export default Application;
