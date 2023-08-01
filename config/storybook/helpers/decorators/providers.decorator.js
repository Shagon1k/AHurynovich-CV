import { Provider as ReduxStateProvider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { ServicesProvider } from '@reusables/services.context';
import { SkipToContentProvider } from '@reusables/skip-to-content.context';
import appReducer from '@src/store/store.reducer';
import { DEVICE_TYPES_CONTEXT_VALUES_MAP, DEFAULT_DEVICE_TYPE } from '../../constants';

const DEFAULT_DEVICE_INFO = {
    isMobile: false,
    isDesktop: false,
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
        const skipToContentMock = {
            setSkipToContentLinks: () => {},
        };

        return (
            <ReduxStateProvider store={store}>
                <ServicesProvider value={createServicesMock(overrideServices)}>
                    <SkipToContentProvider value={skipToContentMock}>
                        <Story />
                    </SkipToContentProvider>
                </ServicesProvider>
            </ReduxStateProvider>
        );
    };

export default getProvidersDecorator;
