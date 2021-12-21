import express from 'express';
import helmet from 'helmet';

import apiRouter from './api';
import { createRenderMiddleware, createServicesMiddleware } from './middleware';

import { DIST_CLIENT_DIR, SERVER_PORT } from '@config/environment';
import { createApp } from '@client/application';
import { createAppStore } from '@client/store/store';

export const startServer = () => {
    const server = express();

    server.use(
        express.static(DIST_CLIENT_DIR, {
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
