import hello from '@slices/_example/hello.slice';
import appInfo from '@slices/app-info/app-info.slice';

/**
 * Main application reducer
 */
const appReducer = {
    hello,
    appInfo,
};

export default appReducer;
