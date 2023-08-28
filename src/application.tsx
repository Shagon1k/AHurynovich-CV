import Application from './Application.component';
import { type IApplicationOptions, type ICreateAppFunction } from './application.types';

// Main application render function
export const createApp: ICreateAppFunction = ({ store, services }: IApplicationOptions) => {
    return <Application options={{ store, services }} />;
};
