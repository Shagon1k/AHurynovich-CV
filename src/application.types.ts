import { type Store as IStore } from 'redux';

import { type IServices } from '@services';

export interface IApplicationOptions {
    store: IStore;
    services: IServices;
}

export interface ICreateAppFunction {
    (object: IApplicationOptions): JSX.Element;
}
