import { SRC_SERVER_ENTRY, DIST_SERVER_DIR, WITH_SSR, IS_DEV } from '../../environment';
import { getWebpackDefinePlugin, getWebpackProvidePlugin } from '../helpers/plugins';
import {
    getWebpackBabelLoader,
    getWebpackCssLoader,
    getWebpackCssModulesLoader,
    getWebpackSassLoader,
} from '../helpers/loaders';
import { getAlias } from '../helpers/resolve';

const commonConfig = {
    entry: [SRC_SERVER_ENTRY],
    output: {
        path: DIST_SERVER_DIR,
        filename: 'index.js',
        publicPath: '/',
    },
    target: 'node',
    plugins: [
        getWebpackDefinePlugin({
            IS_SERVER: true,
            IS_CLIENT: false,
            WITH_SSR,
        }),
        getWebpackProvidePlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [getWebpackBabelLoader()],
            },
            {
                test: /\.s?css$/,
                oneOf: [
                    {
                        test: /\.module\.s?css$/,
                        /**
                         * NOTE: Extract loader is redundant for server side as there are no CSS bundles generated there.
                         * Only CSS Modules loader needed for selectors names generation (e.g. class names) to have consistency with those which are created in client-side bundle.
                         */
                        use: [getWebpackCssModulesLoader(IS_DEV, true), getWebpackSassLoader()],
                    },
                    {
                        use: [getWebpackCssLoader(), getWebpackSassLoader()],
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: getAlias(),
    },
};

export default commonConfig;
