import { combineReducers } from 'redux';

import hello from './reducers/_example/hello.reducer';
import appInfo from '@reducers/app-info/app-info.reducer';

/**
 * Main application reducer
 */
const appReducer = combineReducers({
    hello,
    appInfo,
});

export default appReducer;
