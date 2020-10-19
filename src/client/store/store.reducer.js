import { combineReducers } from 'redux';

import hello from './reducers/hello/hello.reducer';

const reducers = combineReducers({
  hello,
});

export default reducers;
