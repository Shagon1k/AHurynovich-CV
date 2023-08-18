import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_LANGUAGE_CODE, ILanguageCodes } from '@services';

const initialState = {
    isMobile: false,
    isDesktop: false,
    isAppScrolledDown: false,
    language: DEFAULT_LANGUAGE_CODE,
    viewportDimensions: {
        width: undefined,
        height: undefined,
    },
};
export interface AppInfoState {
    isMobile: boolean; // Including tablet devices
    isDesktop: boolean;
    isAppScrolledDown: boolean;
    language: ILanguageCodes;
    viewportDimensions: IViewportDimensions;
}

interface IDeviceInfo {
    isMobile?: boolean; // Including tablet devices
    isDesktop?: boolean;
}

export interface IViewportDimensions {
    width?: number;
    height?: number;
}

const appInfoSlice = createSlice({
    name: 'appInfo',
    initialState,
    reducers: {
        // Sets provided information about device (is mobile/desktop/tablet)
        setDeviceInfo(state: AppInfoState, action: { payload: IDeviceInfo }) {
            const { payload } = action;
            state.isMobile = payload.isMobile || false;
            state.isDesktop = payload.isDesktop || false;
        },
        // Sets provided language as application language
        setAppLanguage(state: AppInfoState, action: { payload: ILanguageCodes }) {
            const { payload } = action;
            state.language = payload;
        },
        // Set ups whether currently app scrolled down or not
        setIsAppScrolledDown(state: AppInfoState, action: { payload: boolean }) {
            const { payload } = action;
            state.isAppScrolledDown = payload;
        },
        // Set current viewport dimensions (width and height)
        setViewportDimensions(state: AppInfoState, action: { payload: IViewportDimensions }) {
            const { payload } = action;
            state.viewportDimensions = payload;
        },
    },
});

export const { setDeviceInfo, setAppLanguage, setIsAppScrolledDown, setViewportDimensions } =
    appInfoSlice.actions;
export default appInfoSlice.reducer;
