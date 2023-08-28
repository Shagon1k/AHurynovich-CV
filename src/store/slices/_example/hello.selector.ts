import { createSelector } from '@reduxjs/toolkit';

import { IHelloState } from './hello.slice';

interface IState {
    hello: IHelloState;
}

const selectHelloState = (state: IState): IHelloState => state.hello;

export const selectIsHello = createSelector(selectHelloState, (helloState) => helloState.isHello);
