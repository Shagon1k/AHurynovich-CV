import { createSlice } from '@reduxjs/toolkit';

import { DEFAULT_LANGUAGE } from '@services/i18n/config/i18n.config';

const initialState = Object.freeze({
    isMobile: undefined,
    isTablet: undefined,
    isDesktop: undefined,
    language: DEFAULT_LANGUAGE,
});

const appInfoSlice = createSlice({
    name: 'appInfo',
    initialState,
    reducers: {
        /**
         * Sets provided information about device (is mobile/desktop/tablet)
         * @param {Object} state - current state
         * @param {Object} action - action
         * @param {Object} action.payload - device info to set
         */
        setDeviceInfo(state, action) {
            const { payload = {} } = action;
            state.isMobile = payload.isMobile || false;
            state.isTablet = payload.isTablet || false;
            state.isDesktop = payload.isDesktop || false;
        },
        /**
         * Sets provided language as application language
         * @param {Object} state - current state
         * @param {Object} action - action
         * @param {String} action.payload - language key to set
         */
        setAppLanguage(state, action) {
            const { payload = '' } = action;
            state.language = payload;
        },
    },
});

export const { setDeviceInfo, setAppLanguage } = appInfoSlice.actions;
export default appInfoSlice.reducer;
