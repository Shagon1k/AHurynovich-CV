import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { ServicesProvider } from '@reusables/services-context';

const createServicesMock = (overrideServices) => ({
    i18n: {
        translate: (key) => key,
    },
    deviceDetect: {
        deviceInfo: {
            isMobile: false,
            isDesktop: true,
            isTablet: false,
        },
    },
    ...overrideServices,
});

const ProvidersWrapper = ({ children, overrideServices }) => {
    return <ServicesProvider value={createServicesMock(overrideServices)}>{children}</ServicesProvider>;
};

ProvidersWrapper.propTypes = {
    // (optional) Override services object
    overrideServices: PropTypes.shape({}),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

/**
 * Returns RTL custom render util wrapped with application Providers in order to support any Context usage.
 * @param {Object} overrideConfig - Default Providers setup override config
 * @param {Object} overrideConfig.overrideServices - Services override object
 * @returns {Function} Custom RTL render util
 */
const getRenderWithProviders =
    ({ overrideServices = {} } = {}) =>
    (ui, options) =>
        render(ui, {
            wrapper: (props) => <ProvidersWrapper overrideServices={overrideServices} {...props} />,
            ...options,
        });

export default getRenderWithProviders;
