import PropTypes from 'prop-types';
import { Provider as ReduxStateProvider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ServicesProvider } from '@reusables/services-context';
import appReducer from '@client/store/store.reducer';
import { DEVICE_TYPES_CONTEXT_VALUES_MAP, DEFAULT_DEVICE_TYPE } from '../../constants';

const DEFAULT_DEVICE_INFO = {
    isMobile: false,
    isDesktop: false,
    isTablet: false,
};

const createServicesMock = (overrideServices) => ({
    i18n: {
        translate: (key) => key,
    },
    deviceDetect: {
        deviceInfo: DEFAULT_DEVICE_INFO,
    },
    ...overrideServices,
});

const ProvidersWrapper = ({ children, overrideServices, store }) => {
    return (
        <ReduxStateProvider store={store}>
            <ServicesProvider value={createServicesMock(overrideServices)}>{children}</ServicesProvider>
        </ReduxStateProvider>
    );
};

ProvidersWrapper.propTypes = {
    // (optional) Override services object
    overrideServices: PropTypes.shape({}),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    store: PropTypes.shape({}),
};

const getProvidersDecorator =
    () =>
    // eslint-disable-next-line react/display-name
    (Story, { args }) => {
        const deviceType = args?.device || DEFAULT_DEVICE_TYPE;
        const deviceInfo = {
            ...DEFAULT_DEVICE_INFO,
            [DEVICE_TYPES_CONTEXT_VALUES_MAP[deviceType]]: true,
        };
        const overrideServices = {
            deviceDetect: {
                deviceInfo,
            },
        };
        const store = configureStore({
            reducer: appReducer,
            preloadedState: {
                appInfo: {
                    ...deviceInfo,
                    language: 'en',
                },
            },
        });
        return (
            <ProvidersWrapper overrideServices={overrideServices} store={store}>
                <Story />
            </ProvidersWrapper>
        );
    };

export default getProvidersDecorator;
