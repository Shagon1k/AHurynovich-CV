import { type EnhancedStore as IEnhancedStore } from '@reduxjs/toolkit';
import { type IServices } from '@services';

export interface ICreateAppStoreOptions {
    initialState?: object;
    services: IServices;
}

export interface ICreateAppStore {
    (object: ICreateAppStoreOptions): Promise<IEnhancedStore>;
}
