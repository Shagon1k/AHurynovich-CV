import PropTypes from 'prop-types';
import { Provider as ReduxStateProvider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

import appReducer from '@src/store/store.reducer';
import { ServicesProvider } from '@reusables/services-context';

const createServicesMock = (overrideServices) => ({
    i18n: {
        translate: (key) => key,
    },
    deviceDetect: {
        deviceInfo: {
            isMobile: false,
            isDesktop: true,
            isTablet: false,
        },
    },
    ...overrideServices,
});

const ProvidersWrapper = ({ children, services, store }) => (
    <ReduxStateProvider store={store}>
        <ServicesProvider value={services}>{children}</ServicesProvider>
    </ReduxStateProvider>
);

ProvidersWrapper.propTypes = {
    // Mocked services
    services: PropTypes.shape({}),
    // Mocked Redux's store
    store: PropTypes.shape({}),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

/**
 * Returns RTL custom render util wrapped with application Providers in order to support any Context usage.
 *
 * Warning! Should be used only for React container components tests (e.g. integration tests).
 * For example, simple custom hooks which use Redux's store/services/etc. could be simply mocked instead (e.g. useTranslates hook).
 *
 * @param {Object} overrideConfig - Default Providers setup override config
 * @param {Object} overrideConfig.overrideServices - Services override object
 * @param {Object} overrideConfig.overrideDefaultState - Redux's store default state override object
 * @returns {Function} Custom RTL render util
 */
const getRenderWithProviders = ({ overrideServices = {}, overrideDefaultState = {} } = {}) => {
    const mockedServices = createServicesMock(overrideServices);
    const mockedStore = configureStore({
        reducer: appReducer,
        preloadedState: overrideDefaultState,
    });
    return (ui, options) =>
        render(ui, {
            wrapper: (props) => <ProvidersWrapper services={mockedServices} store={mockedStore} {...props} />,
            ...options,
        });
};

export default getRenderWithProviders;
