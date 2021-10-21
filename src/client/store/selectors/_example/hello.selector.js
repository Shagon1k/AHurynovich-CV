export const getHelloState = (state) => state.hello;
export const getIsHelloSelector = (state) => getHelloState(state).isHello;
