import Application from './Application.component';

import { FilledContext as IHelmetContext } from 'react-helmet-async';
import { Store as IStore } from 'redux';
import { IServices } from '@common/services';

export interface IApplicationOptions {
    isServer?: boolean; // Whether application should be created on server side (SSR case)
    path?: string; // Current location path if exists
    store: IStore;
    services: IServices;
    helmetContext?: IHelmetContext | { helmet?: { htmlAttributes: object } }; // React Helmet context (used for async SSR flow) (Filled | Unfilled)
}

export interface ICreateAppFunction {
    (object: IApplicationOptions): JSX.Element;
}

// Main application render function
export const createApp: ICreateAppFunction = ({
    isServer,
    path,
    store,
    services,
    helmetContext,
}: IApplicationOptions) => {
    const app = (
        <Application options={{ isServer: isServer, path: path, store: store, services, helmetContext }} />
    );

    return app;
};
