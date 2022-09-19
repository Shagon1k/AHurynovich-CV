import { ServicesConsumer } from '@reusables/services-context';
import { mirrorFunction } from '@utils';

interface IComponentWithTranslatesProps {
    translate: (key?: string, options?: object) => string;
}

// Enhance passed component with translate function
export const withTranslates = <T extends IComponentWithTranslatesProps>(
    WrappedComponent: React.ComponentType<T>
) => {
    const ComponentWithTranslates = (props: Omit<T, keyof IComponentWithTranslatesProps>) => (
        <ServicesConsumer>
            {(services) => {
                const translate = services?.i18n.translate || mirrorFunction;

                return <WrappedComponent {...(props as T)} translate={translate} />;
            }}
        </ServicesConsumer>
    );

    ComponentWithTranslates.displayName = `WithTranslates(${WrappedComponent.name})`;

    return ComponentWithTranslates;
};
