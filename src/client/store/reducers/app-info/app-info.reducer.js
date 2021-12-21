import { SET_DEVICE_INFO, SET_APP_LANGUAGE } from './app-info.constants';
import { DEFAULT_LANGUAGE } from '@services/i18n/config/i18n.config';

const initialState = Object.freeze({
    isMobile: undefined,
    isTablet: undefined,
    isDesktop: undefined,
    language: DEFAULT_LANGUAGE,
});

const appInfoReducer = (state = initialState, action) => {
    const { type, payload = {} } = action;

    switch (type) {
        case SET_DEVICE_INFO: {
            return {
                ...state,
                isMobile: payload.isMobile || false,
                isTablet: payload.isTablet || false,
                isDesktop: payload.isDesktop || false,
            };
        }
        case SET_APP_LANGUAGE: {
            return {
                ...state,
                language: payload,
            };
        }
        default:
            return state;
    }
};

export default appInfoReducer;
