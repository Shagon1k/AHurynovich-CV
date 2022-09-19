import express from 'express';
import helmet from 'helmet';
import { v4 as uuidV4 } from 'uuid';

import { DIST_CLIENT_DIR } from '@config/environment';
import { SERVER_PORT } from '@config/application';

import { createApp } from '@client/application';
import { createAppStore } from '@client/store/store';

import apiRouter from './api';
import { createRenderMiddleware, createServicesMiddleware } from './middlewares';

export const startServer = () => {
    const server = express();

    /**
     * Note: CSP nonce used to validate injected content (scripts, styles, etc.)
     * This one is used for stringified App State script injection.
     * More details: https://content-security-policy.com/nonce/
     */
    const CSPNonce = uuidV4();

    server.use(
        express.static(DIST_CLIENT_DIR, {
            /**
             * No need in index.html as index markup generated on SSR (see app-render.middleware)
             */
            index: false,
        })
    );
    server.use(
        helmet({
            /**
             * Need to re-configure CSP policy in order to have ability to inject inline scripts from server (e.g. Redux store state transfer purpose)
             * More details: https://stackoverflow.com/questions/65890616/helmet-causing-mern-app-hosted-on-heroku-cause-error-refused-to-execute-inline
             * This part should be synchronized with "Content-Security-Policy" meta of index.html template.
             */
            contentSecurityPolicy: {
                directives: {
                    ...helmet.contentSecurityPolicy.getDefaultDirectives(),
                    'script-src': ["'self'", `'nonce-${CSPNonce}'`],
                    'style-src': ["'self'"],
                    'object-src': ["'none'"],
                },
            },
        })
    );

    server.use([createServicesMiddleware()]);
    server.use('/api', apiRouter);

    server.get(/.*/, createRenderMiddleware({ createApp, createAppStore, CSPNonce }));

    server.listen(SERVER_PORT);
    console.log('Server started on port:', SERVER_PORT);
};
