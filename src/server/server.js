import express from 'express';
import helmet from 'helmet';

import { DIST_CLIENT_DIR } from '@config/environment';
import { SERVER_PORT } from '@config/application';

import { createApp } from '@client/application';
import { createAppStore } from '@client/store/store';

import apiRouter from './api';
import { createRenderMiddleware, createServicesMiddleware } from './middlewares';

export const startServer = () => {
    const server = express();

    server.use(
        express.static(DIST_CLIENT_DIR, {
            /**
             * NOTE: No need in index.html as index markup generated on SSR (see app-render.middleware)
             */
            index: false,
        })
    );
    server.use(
        helmet({
            /**
             * Need to re-configure CSP policy in order to have ability to inject inline scripts from server (e.g. Redux store state transfer purpose)
             * For more details see: https://stackoverflow.com/questions/65890616/helmet-causing-mern-app-hosted-on-heroku-cause-error-refused-to-execute-inline
             */
            contentSecurityPolicy: {
                directives: {
                    ...helmet.contentSecurityPolicy.getDefaultDirectives(),
                    'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
                },
            },
        })
    );

    server.use([createServicesMiddleware()]);
    server.use('/api', apiRouter);

    server.get(/.*/, createRenderMiddleware({ createApp, createAppStore }));

    server.listen(SERVER_PORT);
    console.log('Server started on port:', SERVER_PORT);
};
