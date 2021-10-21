import React from 'react';
import PropTypes from 'prop-types';
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

Application.propTypes = {
  /** Application creation options */
  options: PropTypes.shape({
    /** Whether application should be created on server side (SSR case) */
    isServer: PropTypes.bool,
    /** Current location path if exists */
    path: PropTypes.string,
    /** Application store */
    store: PropTypes.shape({}),
  }),
};

export default Application;
