import { ServicesConsumer } from '@reusables/services-context';
import { mirrorFunction } from '@utils';

/**
 * Enhance passed component with translate function
 * @param {Component} WrappedComponent - component to be enhanced with translate function
 * @returns {Component} component with translate function
 */
export const withTranslates = (WrappedComponent) => {
    const ComponentWithTranslates = (props) => (
        <ServicesConsumer>
            {(services) => {
                const { translate = mirrorFunction } = services.i18n;

                return <WrappedComponent {...props} translate={translate} />;
            }}
        </ServicesConsumer>
    );

    ComponentWithTranslates.displayName = `WithTranslates(${WrappedComponent.name})`;

    return ComponentWithTranslates;
};
