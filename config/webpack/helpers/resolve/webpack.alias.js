import path from 'path';
import {
    SRC_DIR,
    SRC_CLIENT_DIR,
    SRC_SERVER_DIR,
    SRC_COMMON_DIR,
    CONFIG_DIR,
} from '../../../environment';

const getAlias = () => ({
    src: path.resolve(SRC_DIR),
    '@client': path.resolve(SRC_CLIENT_DIR),
    '@server': path.resolve(SRC_SERVER_DIR),
    '@common': path.resolve(SRC_COMMON_DIR),
    '@services': path.resolve(SRC_COMMON_DIR, 'services'),
    '@components': path.resolve(SRC_CLIENT_DIR, 'components'),
    '@pages': path.resolve(SRC_CLIENT_DIR, 'components/pages'),
    '@base': path.resolve(SRC_CLIENT_DIR, 'components/base'),
    '@reusables': path.resolve(SRC_CLIENT_DIR, 'reusables'),
    '@reducers': path.resolve(SRC_CLIENT_DIR, 'store/reducers'),
    '@selectors': path.resolve(SRC_CLIENT_DIR, 'store/selectors'),
    '@styles': path.resolve(SRC_CLIENT_DIR, 'styles'),
    '@common-styles': path.resolve(SRC_CLIENT_DIR, 'styles/common'),
    '@base-styles-mixins': path.resolve(SRC_CLIENT_DIR, 'styles/base/_mixins'),
    '@base-styles-variables': path.resolve(SRC_CLIENT_DIR, 'styles/base/_variables'),
    '@config': path.resolve(CONFIG_DIR),
});

export default getAlias;
