import { ServicesContext } from '@reusables/services-context';

/**
 * Custom hook to provide usage of services
 * @returns {Object} services
 */
export const useServices = () => {
    const services = React.useContext(ServicesContext);

    return services;
};
