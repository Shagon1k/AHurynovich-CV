import React from 'react';
import { IServices } from '@common/services';

/** Helps to provide application components to use general services by injection with specific HOC or hook */
export const ServicesContext = React.createContext<IServices | null>(null);
ServicesContext.displayName = 'ServicesContext';

export const ServicesProvider = ServicesContext.Provider;
export const ServicesConsumer = ServicesContext.Consumer;
