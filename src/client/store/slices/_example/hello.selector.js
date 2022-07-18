import { createSelector } from '@reduxjs/toolkit';

export const selectHelloState = (state) => state.hello;

export const selectIsHello = createSelector(selectHelloState, (helloState) => helloState.isHello);
