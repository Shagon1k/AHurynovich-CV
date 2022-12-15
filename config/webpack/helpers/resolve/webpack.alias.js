import path from 'path';
import { SRC_DIR, CONFIG_DIR } from '../../../environment';

const getAlias = () => ({
    src: path.resolve(SRC_DIR),
    '@config': path.resolve(CONFIG_DIR),
    '@sb-constants': path.resolve(CONFIG_DIR, 'storybook/constants.js'),
    '@src': path.resolve(SRC_DIR),
    '@utils': path.resolve(SRC_DIR, 'utils'),
    '@services': path.resolve(SRC_DIR, 'services'),
    '@api': path.resolve(SRC_DIR, 'api'),
    '@assets': path.resolve(SRC_DIR, 'assets'),
    '@components': path.resolve(SRC_DIR, 'components'),
    '@pages': path.resolve(SRC_DIR, 'components/pages'),
    '@reusables': path.resolve(SRC_DIR, 'reusables'),
    '@slices': path.resolve(SRC_DIR, 'store/slices'),
    '@styles': path.resolve(SRC_DIR, 'styles'),
    '@base-styles': path.resolve(SRC_DIR, 'styles/base'),
    '@base-styles-mixins': path.resolve(SRC_DIR, 'styles/base/_mixins'),
    '@base-styles-variables': path.resolve(SRC_DIR, 'styles/base/_variables'),
});

export default getAlias;
