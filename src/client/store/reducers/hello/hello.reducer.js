/*
 * Hello reducer
 */

import constants from './hello.constants';

const { MAKE_HELLO, MAKE_BYE } = constants;

const initialState = {
  isHello: false,
};

const hello = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_HELLO: {
      return { ...state, isHello: true };
    }

    case MAKE_BYE: {
      return { ...state, isHello: false };
    }

    default:
      return state;
  }
};

export default hello;
