import path from 'path';
import { SRC_DIR, SRC_CLIENT_DIR, SRC_SERVER_DIR, SRC_COMMON_DIR, CONFIG_DIR } from '../../../environment';

const getAlias = () => ({
    src: path.resolve(SRC_DIR),
    '@config': path.resolve(CONFIG_DIR),
    '@sb-constants': path.resolve(CONFIG_DIR, 'storybook/constants.js'),
    '@client': path.resolve(SRC_CLIENT_DIR),
    '@server': path.resolve(SRC_SERVER_DIR),
    '@common': path.resolve(SRC_COMMON_DIR),
    '@utils': path.resolve(SRC_COMMON_DIR, 'utils'),
    '@services': path.resolve(SRC_COMMON_DIR, 'services'),
    '@api': path.resolve(SRC_CLIENT_DIR, 'api'),
    '@components': path.resolve(SRC_CLIENT_DIR, 'components'),
    '@pages': path.resolve(SRC_CLIENT_DIR, 'components/pages'),
    '@base': path.resolve(SRC_CLIENT_DIR, 'components/base'),
    '@reusables': path.resolve(SRC_CLIENT_DIR, 'reusables'),
    '@slices': path.resolve(SRC_CLIENT_DIR, 'store/slices'),
    '@styles': path.resolve(SRC_CLIENT_DIR, 'styles'),
    '@base-styles': path.resolve(SRC_CLIENT_DIR, 'styles/base'),
    '@base-styles-mixins': path.resolve(SRC_CLIENT_DIR, 'styles/base/_mixins'),
    '@base-styles-variables': path.resolve(SRC_CLIENT_DIR, 'styles/base/_variables'),
});

export default getAlias;
