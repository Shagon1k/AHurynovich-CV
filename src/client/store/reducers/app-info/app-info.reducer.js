import { SET_DEVICE_INFO } from './app-info.constants';

const initialState = Object.freeze({
    isMobile: undefined,
    isTablet: undefined,
    isDesktop: undefined,
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

        default:
            return state;
    }
};

export default appInfoReducer;
