import { Provider as ReduxStateProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { useRef, useCallback } from 'react';

import { ServicesProvider } from '@reusables/services-context';
import Head from '@common/AppHead';
import Header from '@common/Header';
import ScrollTopButton from '@common/ScrollTopButton';
import Routes from '@components/routes';

import styles from './Application.module.scss';

import { type IApplicationOptions } from './application.types';

interface IApplicationProps {
    options: IApplicationOptions;
}

const Application: React.FC<IApplicationProps> = ({ options }: IApplicationProps) => {
    const { store, services } = options;
    const routerProps = {
        basename: '/',
        location: '',
    };

    const firstFocusableElemRef = useRef<null | HTMLAnchorElement>(null);

    const handleFocusFirstElem = useCallback(() => {
        firstFocusableElemRef.current?.focus();
    }, []);

    const renderApplication = (): JSX.Element => (
        <ReduxStateProvider store={store}>
            <ServicesProvider value={services}>
                <BrowserRouter {...routerProps}>
                    <Head />
                    <div className={styles['app-container']}>
                        <Header firstFocusableElemRef={firstFocusableElemRef} />
                        <main>
                            <Routes />
                        </main>
                        {/* Note: To follow A11y rules "Scroll top" button should always be the last element (e.g. after page footer)
                            Additionally, focus must be returned to the first focusable element of the page. */}
                        <ScrollTopButton onFocusFirstElem={handleFocusFirstElem} />
                    </div>
                </BrowserRouter>
            </ServicesProvider>
        </ReduxStateProvider>
    );

    return renderApplication();
};

export default Application;
