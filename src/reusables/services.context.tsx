import React from 'react';

import { type IServices } from '@services';

/** Helps to provide application components to use general services */
export const ServicesContext = React.createContext<IServices | null>(null);
ServicesContext.displayName = 'ServicesContext';

export const ServicesProvider = ServicesContext.Provider;
export const ServicesConsumer = ServicesContext.Consumer;
