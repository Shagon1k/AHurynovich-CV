import React from 'react';
import Application from './application.component';

export const createApp = ({ isServer, path } = {}) => {
  const app = <Application options={{ isServer: isServer, path: path }} />;

  return app;
};
