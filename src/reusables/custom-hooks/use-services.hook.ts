import React from 'react';
import { ServicesContext } from '@reusables/services-context';

// Custom hook to provide usage of services
export const useServices = () => {
    const services = React.useContext(ServicesContext);

    return services;
};
