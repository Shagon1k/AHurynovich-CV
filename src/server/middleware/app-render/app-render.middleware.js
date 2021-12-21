import fse from 'fs-extra';
import ReactDOMServer from 'react-dom/server';

import { SRC_APP_TEMPLATE } from '@config/environment';

/**
 * Get rendering template
 * @return {Promise<*>}
 */
const getTemplate = async () => {
    try {
        const templateSrc = await fse.readFile(SRC_APP_TEMPLATE, 'utf-8');

        return templateSrc;
    } catch (err) {
        return err;
    }
};

/* eslint-disable indent */
const getAppStateStr = (state) => {
    const stringifiedAppState = `
    <script type="text/javascript">
	    // WARNING: See the following for security issues around embedding JSON in HTML:
	    // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
	    window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}
	  </script>
  `;

    return stringifiedAppState;
};
/* eslint-enable indent */

/**
 * Process template with data to be rendered
 *
 * @param {String} tpl - template string
 * @param {Object} options
 * @param {String} options.app - stringified application
 * @param {String} options.store - stringified application Redux store
 * @param {String} options.htmlAttributes - stringified HTML attributes (e.g. language)
 */
const processTemplate = (tpl, options) => {
    const { app, state, htmlAttributes } = options;

    const processedTemplate = tpl
        .replace(/<html(.*)>/, `<html ${htmlAttributes}>`)
        .replace(/<!--SSR_TEMPLATE_APP-->/, app)
        .replace(/<!--SSR_TEMPLATE_APP_STATE-->/, state);

    return processedTemplate;
};

/**
 *
 * @param {Object} options
 * @param {Function} options.createApp - basic function to create application
 * @return {Function}
 */
const createRenderMiddleware = (options) => async (req, res, next) => {
    const { createApp, createAppStore } = options;
    const requestPath = req.path || (req.url && req.url.path);
    const { services } = res.locals;
    const store = await createAppStore({ isServer: true, services });
    const helmetContext = {};
    const app = createApp({
        isServer: true,
        store,
        path: requestPath,
        services,
        helmetContext,
    });

    const template = await getTemplate();

    const stringifiedApp = ReactDOMServer.renderToString(app);
    const stringifiedAppState = getAppStateStr(store.getState());
    const { helmet } = helmetContext;

    // Replace template placeholders with appropriate data
    const responseBody = processTemplate(template, {
        app: stringifiedApp,
        state: stringifiedAppState,
        htmlAttributes: helmet.htmlAttributes.toString(), // updated Helmet generated HTML attributes
    });

    res.setHeader('Content-Type', 'text/html');
    res.status(200);
    res.send(responseBody);

    next();
};

export default createRenderMiddleware;
