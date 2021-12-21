import { ServicesContext } from '@reusables/services-context';
import { mirrorFunction } from '@utils';

/**
 * Custom hook to provide translate function
 * @returns {Function} translate
 */
export const useTranslate = () => {
    const services = React.useContext(ServicesContext);
    const { translate = mirrorFunction } = services.i18n;

    return translate;
};
