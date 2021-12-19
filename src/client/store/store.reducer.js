import hello from './reducers/_example/hello.reducer';
import appInfo from '@reducers/app-info/app-info.reducer';

/**
 * Main application reducer
 */
const appReducer = Redux.combineReducers({
    hello,
    appInfo,
});

export default appReducer;
