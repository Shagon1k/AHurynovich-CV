import Application from './Application.component';

import { IApplicationOptions, ICreateAppFunction } from './application.models';

// Main application render function
export const createApp: ICreateAppFunction = ({ store, services }: IApplicationOptions) => {
    const app = <Application options={{ store, services }} />;

    return app;
};
