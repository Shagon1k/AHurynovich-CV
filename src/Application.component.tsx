import { Provider as ReduxStateProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ServicesProvider } from '@reusables/services-context';
import Head from './components/base/AppHead';
import Routes from './components/routes';

import styles from './Application.module.scss';

import { IApplicationOptions } from './application';

interface IApplicationProps {
    options: IApplicationOptions;
}

const Application: React.FC<IApplicationProps> = ({ options }: IApplicationProps) => {
    const { store, services } = options;
    const routerProps = {
        basename: '/',
        location: '',
    };

    const renderApplication = (): JSX.Element => (
        <ReduxStateProvider store={store}>
            <ServicesProvider value={services}>
                <BrowserRouter {...routerProps}>
                    <Head />
                    <div className={styles['app-container']}>
                        <Routes />
                    </div>
                </BrowserRouter>
            </ServicesProvider>
        </ReduxStateProvider>
    );

    return renderApplication();
};

export default Application;
