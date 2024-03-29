import React from 'react';

import { ServicesContext } from '@reusables/services.context';

// Custom hook to provide usage of services
export const useServices = () => {
    return React.useContext(ServicesContext);
};
