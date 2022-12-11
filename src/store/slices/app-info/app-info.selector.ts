import { createSelector } from '@reduxjs/toolkit';
import { AppInfoState } from './app-info.slice';

interface IState {
    appInfo: AppInfoState;
}

const selectAppInfoState = (state: IState): AppInfoState => state.appInfo;

export const selectLanguage = createSelector(selectAppInfoState, (appInfoState) => appInfoState.language);
export const selectIsMobile = createSelector(selectAppInfoState, (appInfoState) => appInfoState.isMobile);
export const selectIsDesktop = createSelector(selectAppInfoState, (appInfoState) => appInfoState.isDesktop);
export const selectIsAppScrolledDown = createSelector(
    selectAppInfoState,
    (appInfoState) => appInfoState.isAppScrolledDown
);
