import { useSelector } from 'react-redux';

import { ServicesConsumer } from '@reusables/services.context';
import { selectLanguage } from '@slices/app-info/app-info.selector';
import { mirrorFunction } from '@utils/functions';

interface IComponentWithTranslatesProps {
    t: (key?: string, options?: object) => string;
}

// Enhance passed component with translate function
export const withTranslates = <T extends IComponentWithTranslatesProps>(
    WrappedComponent: React.ComponentType<T>
) => {
    const ComponentWithTranslates = (props: Omit<T, keyof IComponentWithTranslatesProps>) => {
        /**
         * Note: On language change, all components which use translates should re-render to display correct translations.
         * To handle this + additionally provide languageCode is it passed as prop to HOC-decorated components.
         */
        const languageCode = useSelector(selectLanguage);
        return (
            <ServicesConsumer>
                {(services) => {
                    const translate = services?.i18n.translate || mirrorFunction;

                    return <WrappedComponent {...(props as T)} t={translate} languageCode={languageCode} />;
                }}
            </ServicesConsumer>
        );
    };

    ComponentWithTranslates.displayName = `WithTranslates(${WrappedComponent.name})`;

    return ComponentWithTranslates;
};
