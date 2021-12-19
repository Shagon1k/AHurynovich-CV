import { ServicesConsumer } from '@reusables/services-context';

/**
 * Enhance passed component with services
 * @param {Component} WrappedComponent - component to be enhanced with services
 * @returns {Component} component with services
 */
export const withServices = (WrappedComponent) => {
    const ComponentWithServices = (props) => (
        <ServicesConsumer>
            {(services) => <WrappedComponent {...props} services={services} />}
        </ServicesConsumer>
    );

    ComponentWithServices.displayName = `WithServices(${WrappedComponent.name})`;

    return ComponentWithServices;
};
