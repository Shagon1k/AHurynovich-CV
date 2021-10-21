/*
 * Actions hello
 */

import constants from './hello.constants';

const { MAKE_HELLO, MAKE_BYE } = constants;

export const makeHello = () => ({
  type: MAKE_HELLO,
});

export const makeBye = () => ({
  type: MAKE_BYE,
});
