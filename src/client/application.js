import React from 'react';
import Application from './application.component';

export const createApp = ({ isServer, path, store } = {}) => {
    const app = (
        <Application
            options={{ isServer: isServer, path: path, store: store }}
        />
    );

    return app;
};
