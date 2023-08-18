import { createSelector } from '@reduxjs/toolkit';

import { HelloState } from './hello.slice';

interface IState {
    hello: HelloState;
}

const selectHelloState = (state: IState): HelloState => state.hello;

export const selectIsHello = createSelector(selectHelloState, (helloState) => helloState.isHello);
