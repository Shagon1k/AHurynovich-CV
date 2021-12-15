import { combineReducers } from 'redux';

import hello from './reducers/_example/hello.reducer';

const reducers = combineReducers({
    hello,
});

export default reducers;
