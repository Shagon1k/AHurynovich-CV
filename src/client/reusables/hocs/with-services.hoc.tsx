import { ServicesConsumer } from '@reusables/services-context';
import { IServices } from '@common/services';

interface IComponentWithServicesProps {
    services: IServices;
}

// Enhance passed component with services
export const withServices = <T extends IComponentWithServicesProps>(
    WrappedComponent: React.ComponentType<T>
) => {
    const ComponentWithServices = (props: Omit<T, keyof IComponentWithServicesProps>) => (
        <ServicesConsumer>
            {(services) => <WrappedComponent {...(props as T)} services={services} />}
        </ServicesConsumer>
    );

    ComponentWithServices.displayName = `WithServices(${WrappedComponent.name})`;

    return ComponentWithServices;
};
