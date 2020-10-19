import express from 'express';

import apiRouter from './api';
import { createRenderMiddleware } from './middleware';

import { DIST_CLIENT_DIR, SERVER_PORT } from '../../config/environment';
import { createApp } from '../client/application';
import { createAppStore } from '../client/store/store';

export const startServer = () => {
  const server = express();

  server.use(
    express.static(DIST_CLIENT_DIR, {
      index: false,
    })
  );

  server.use('/api', apiRouter);

  server.get(/.*/, createRenderMiddleware({ createApp, createAppStore }));

  server.listen(SERVER_PORT);
  console.log('Server started on port:', SERVER_PORT);
};
