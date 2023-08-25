import hello from '@slices/_example/hello.slice';
import appInfo from '@slices/app-info/app-info.slice';
import contentConfig from '@slices/content-config/content-config.slice';

/**
 * Main application reducer
 */
const appReducer = {
    hello,
    appInfo,
    contentConfig,
};

export default appReducer;
