import { Provider as ReduxStateProvider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import { ServicesProvider } from '@reusables/services.context';
import { SkipToContentProvider } from '@reusables/skip-to-content.context';
import appReducer from '@src/store/store.reducer';
import { render } from '@testing-library/react';

const createServicesMock = (overrideServices) => ({
    i18n: {
        translate: (key) => key,
    },
    deviceDetect: {
        deviceInfo: {
            isMobile: false,
            isDesktop: true,
        },
    },
    ...overrideServices,
});

const createSkipToContentMock = (overrideSkipToContent) => ({
    setSkipToContentLinks: () => {},
    ...overrideSkipToContent,
});

/**
 * Returns RTL custom render util wrapped with application Providers in order to support any Context usage.
 *
 * Warning! Should be used only for React container components tests (e.g. integration tests).
 * For example, simple custom hooks which use Redux's store/services/etc. could be simply mocked instead (e.g. useTranslates hook).
 *
 * @param {Object} overrideConfig - Default Providers setup override config
 * @param {Object} overrideConfig.overrideDefaultState - Redux's store default state override object
 * @param {Object} overrideConfig.overrideServices - Services context value override object
 * @param {Object} overrideConfig.overrideSkipToContent - Skip To Content context value override object
 * @returns {Function} Custom RTL render util
 */
const getRenderWithProviders = ({
    overrideDefaultState = {},
    overrideServices = {},
    overrideSkipToContent = {},
} = {}) => {
    const mockedStore = configureStore({
        reducer: appReducer,
        preloadedState: overrideDefaultState,
    });
    const mockedServices = createServicesMock(overrideServices);
    const mockedSkipToContent = createSkipToContentMock(overrideSkipToContent);
    return (ui, options) =>
        render(ui, {
            wrapper: (props) => (
                <ReduxStateProvider store={mockedStore}>
                    <ServicesProvider value={mockedServices}>
                        <SkipToContentProvider value={mockedSkipToContent}>
                            {props.children}
                        </SkipToContentProvider>
                    </ServicesProvider>
                </ReduxStateProvider>
            ),
            ...options,
        });
};

export default getRenderWithProviders;
