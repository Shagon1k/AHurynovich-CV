import React from 'react';
import { BrowserRouter, StaticRouter } from 'react-router-dom';

import Routes from './components/routes';

const Application = ({ options }) => {
  const { isServer, path } = options;
  const AppRouter = isServer ? StaticRouter : BrowserRouter;
  const routerProps = isServer
    ? {
        context: {},
        location: path,
      }
    : {
        path: '/',
      };

  return (
    <AppRouter {...routerProps}>
      <div className="appContainer">
        <Routes />
      </div>
    </AppRouter>
  );
};

export default Application;
