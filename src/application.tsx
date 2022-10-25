import Application from './Application.component';

import { type IApplicationOptions, type ICreateAppFunction } from './application.types';

// Main application render function
export const createApp: ICreateAppFunction = ({ store, services }: IApplicationOptions) => {
    const app = <Application options={{ store, services }} />;

    return app;
};
