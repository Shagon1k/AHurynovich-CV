import React from 'react';
import { Provider as ReduxStateProvider } from 'react-redux';
import { BrowserRouter, StaticRouter } from 'react-router-dom';

import Routes from './components/routes';

import './application.module.scss';

const Application = ({ options }) => {
  const { isServer, path, store } = options;
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
    <ReduxStateProvider store={store}>
      <AppRouter {...routerProps}>
        <div className="appContainer">
          <Routes />
        </div>
      </AppRouter>
    </ReduxStateProvider>
  );
};

export default Application;
