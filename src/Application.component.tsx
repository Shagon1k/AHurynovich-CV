import { Provider as ReduxStateProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { useState, useRef, useCallback, Suspense } from 'react';

import { ServicesProvider } from '@reusables/services-context';
import Loader from '@components/base/Loader';
import Head from '@components/common/AppHead';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import ScrollTopButton from '@components/common/ScrollTopButton';
import Routes from '@components/routes';

import styles from './Application.module.scss';

import { type IApplicationOptions } from './application.types';

interface IApplicationProps {
    options: IApplicationOptions;
}

const Application: React.FC<IApplicationProps> = ({ options }: IApplicationProps) => {
    const { store, services } = options;

    const [isAppLoading, setIsAppLoading] = useState(false);
    const handleAppLoadingStart = useCallback(() => {
        setIsAppLoading(true);
    }, []);
    const handleAppLoadingEnd = useCallback(() => {
        setIsAppLoading(false);
    }, []);

    const firstFocusableElemRef = useRef<null | HTMLAnchorElement>(null);
    const handleFocusFirstElem = useCallback(() => {
        firstFocusableElemRef.current?.focus();
    }, []);

    return (
        <ReduxStateProvider store={store}>
            <ServicesProvider value={services}>
                <BrowserRouter>
                    <Head />
                    <div className={styles['app-container']}>
                        <Header firstFocusableElemRef={firstFocusableElemRef} />
                        <main aria-busy={isAppLoading}>
                            <Suspense
                                fallback={
                                    <div className={styles['global-loader']}>
                                        <Loader
                                            withOverlay
                                            onLoadingStart={handleAppLoadingStart}
                                            onLoadingEnd={handleAppLoadingEnd}
                                        />
                                    </div>
                                }
                            >
                                <Routes />
                            </Suspense>
                        </main>
                        <Footer />
                        {/* Note: To follow A11y rules "Scroll top" button should always be the last element (e.g. after page footer)
                            Additionally, focus must be returned to the first focusable element of the page.

                            Warning: Additionally this button includes side effect to scroll USER's view to top on route change. */}
                        <ScrollTopButton onFocusFirstElem={handleFocusFirstElem} />
                    </div>
                </BrowserRouter>
            </ServicesProvider>
        </ReduxStateProvider>
    );
};

export default Application;
