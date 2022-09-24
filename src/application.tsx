import Application from './Application.component';

import { Store as IStore } from 'redux';
import { IServices } from '@services';

export interface IApplicationOptions {
    store: IStore;
    services: IServices;
}

export interface ICreateAppFunction {
    (object: IApplicationOptions): JSX.Element;
}

// Main application render function
export const createApp: ICreateAppFunction = ({ store, services }: IApplicationOptions) => {
    const app = <Application options={{ store, services }} />;

    return app;
};
