import fse from 'fs-extra';
import { Writable } from 'node:stream';
import { renderToPipeableStream } from 'react-dom/server';

import { DIST_APP_TEMPLATE } from '@config/environment';

import { Request as IRequest, Response as IResponse, NextFunction as INext } from 'express';
import { ICreateAppFunction } from '@client/application';
import { ICreateAppStore } from '@client/store/store';

const getAppStateStr = (state: object, CSPNonce: string) => {
    const stringifiedAppState = `
    <script type="text/javascript" nonce="${CSPNonce}">
	    // WARNING: See the following for security issues around embedding JSON in HTML:
	    // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
	    window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}
	  </script>
  `;

    return stringifiedAppState;
};

// Get rendering template
const getProcessedTemplateParts = async (appState: object, CSPNonce: string) => {
    const templateSource = await fse.readFile(DIST_APP_TEMPLATE, 'utf-8');
    const stringifiedAppState = getAppStateStr(appState, CSPNonce);

    const processedTemplate = templateSource
        .replace('SSR_TEMPLATE_SCRIPT_NONCE', CSPNonce)
        .replace('<!--SSR_TEMPLATE_APP_STATE-->', stringifiedAppState);

    // [0] - HTML response part before rendered App, [1] - HTML response part after rendered App
    return processedTemplate.split('<!--SSR_TEMPLATE_APP-->');
};

const createRenderMiddleware =
    (options: { createApp: ICreateAppFunction; createAppStore: ICreateAppStore; CSPNonce: string }) =>
    async (req: IRequest, res: IResponse, next: INext) => {
        const { createApp, createAppStore, CSPNonce } = options;
        const requestPath = req.path || req.url;
        const { services } = res.locals;
        const store = await createAppStore({ isServer: true, services });
        const helmetContext: { helmet?: { htmlAttributes: object } } = {};
        const app = createApp({
            isServer: true,
            store,
            path: requestPath,
            services,
            helmetContext,
        });

        const [templateBefore, templateAfter] = await getProcessedTemplateParts(store.getState(), CSPNonce);

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
                    `<html ${helmetContext?.helmet?.htmlAttributes.toString()}>`
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
