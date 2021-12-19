import { MAKE_HELLO, MAKE_BYE } from './hello.constants';

export const makeHello = () => ({
    type: MAKE_HELLO,
});

export const makeBye = () => ({
    type: MAKE_BYE,
});
