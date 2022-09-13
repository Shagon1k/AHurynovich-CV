import fse from 'fs-extra';
import { v4 as uuidV4 } from 'uuid';
import { Writable } from 'node:stream';
import { renderToPipeableStream } from 'react-dom/server';

import { DIST_APP_TEMPLATE } from '@config/environment';

const getAppStateStr = (state, CSPNonce) => {
    const stringifiedAppState = `
    <script type="text/javascript" nonce="${CSPNonce}">
	    // WARNING: See the following for security issues around embedding JSON in HTML:
	    // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
	    window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}
	  </script>
  `;

    return stringifiedAppState;
};

/**
 * Get rendering template
 * @return {Promise<*>}
 */
const getProcessedTemplateParts = async (appState) => {
    try {
        const templateSource = await fse.readFile(DIST_APP_TEMPLATE, 'utf-8');
        /**
         * Note: CSP nonce used to validate injected content (scripts, styles, etc.)
         * This one is used for stringified App State script injection.
         * More details: https://content-security-policy.com/nonce/
         */
        const CSPNonce = uuidV4();
        const stringifiedAppState = getAppStateStr(appState, CSPNonce);

        const processedTemplate = templateSource
            .replace('SSR_TEMPLATE_SCRIPT_NONCE', CSPNonce)
            .replace('<!--SSR_TEMPLATE_APP_STATE-->', stringifiedAppState);

        // [0] - HTML response part before rendered App, [1] - HTML response part after rendered App
        return processedTemplate.split('<!--SSR_TEMPLATE_APP-->');
    } catch (err) {
        return err;
    }
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

    const [templateBefore, templateAfter] = await getProcessedTemplateParts(store.getState());

    const writableStream = new Writable({
        write(chunk, _encoding, cb) {
            res.write(chunk, cb);
        },
        final() {
            res.end(templateAfter);
        },
    });

    const { pipe } = renderToPipeableStream(app, {
        onShellReady() {
            res.setHeader('Content-type', 'text/html');
            // Helmet Context is only populated after rendered App (Shell) ready
            const resultTemplateBefore = templateBefore.replace(
                /<html(.*)>/,
                `<html ${helmetContext.helmet.htmlAttributes.toString()}>`
            );
            res.write(resultTemplateBefore);
            pipe(writableStream);
        },
        onError(x) {
            console.error(x);
        },
    });

    next();
};

export default createRenderMiddleware;
