import { BP, BP_TO_WIDTH } from '@config/application';
import { createSelector } from '@reduxjs/toolkit';

import { AppInfoState } from './app-info.slice';

interface IState {
    appInfo: AppInfoState;
}

const selectAppInfoState = (state: IState): AppInfoState => state.appInfo;
const selectAppViewportWidth = createSelector(
    selectAppInfoState,
    (appInfoState) => appInfoState.viewportDimensions.width || 0
);

export const selectLanguage = createSelector(selectAppInfoState, (appInfoState) => appInfoState.language);
export const selectIsMobile = createSelector(selectAppInfoState, (appInfoState) => appInfoState.isMobile);
export const selectIsDesktop = createSelector(selectAppInfoState, (appInfoState) => appInfoState.isDesktop);
export const selectIsAppScrolledDown = createSelector(
    selectAppInfoState,
    (appInfoState) => appInfoState.isAppScrolledDown
);
export const selectAppBreakpoint = createSelector(selectAppViewportWidth, (viewportWidth) => {
    const bpName = Object.entries(BP_TO_WIDTH).find(
        ([, [bpMin, bpMax]]) => bpMin <= viewportWidth && viewportWidth <= bpMax
    )?.[0] as BP;

    return bpName;
});
