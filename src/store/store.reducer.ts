import hello from '@slices/_example/hello.slice';
import appInfo from '@slices/app-info/app-info.slice';
import chatbot from '@slices/chatbot/chatbot.slice';
import contentConfig from '@slices/content-config/content-config.slice';

/**
 * Main application reducer
 */
const appReducer = {
    hello,
    appInfo,
    chatbot,
    contentConfig,
};

export default appReducer;
