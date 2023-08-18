import { useState, useRef, useCallback, Suspense } from 'react';
import { Provider as ReduxStateProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Loader from '@components/base/Loader';
import Head from '@components/common/AppHead';
import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import ScrollTopButton from '@components/common/ScrollTopButton';
import Routes from '@components/routes';
import { ServicesProvider } from '@reusables/services.context';
import { SkipToContentProvider, type ISkipToContentLink } from '@reusables/skip-to-content.context';

import { type IApplicationOptions } from './application.types';

import styles from './Application.module.scss';

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

    const [skipToContentLinks, setSkipToContentLinks] = useState<ISkipToContentLink[]>([]);

    return (
        <ReduxStateProvider store={store}>
            <ServicesProvider value={services}>
                <SkipToContentProvider value={{ setSkipToContentLinks }}>
                    <BrowserRouter>
                        <Head />
                        <div className={styles['app-container']}>
                            <Header
                                firstFocusableElemRef={firstFocusableElemRef}
                                skipToContentLinks={skipToContentLinks}
                            />
                            <main aria-busy={isAppLoading}>
                                <Suspense
                                    fallback={
                                        <Loader
                                            withOverlay
                                            onLoadingStart={handleAppLoadingStart}
                                            onLoadingEnd={handleAppLoadingEnd}
                                        />
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
                </SkipToContentProvider>
            </ServicesProvider>
        </ReduxStateProvider>
    );
};

export default Application;
