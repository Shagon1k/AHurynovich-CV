import { SRC_SERVER_ENTRY, DIST_SERVER_DIR, DIST_SCRIPTS_PREFIX, WITH_SSR } from '../../environment';
import { getWebpackDefinePlugin, getWebpackProvidePlugin } from '../helpers/plugins';
import {
    getWebpackBabelLoader,
    getWebpackSourceMapLoader,
    getWebpackCssLoader,
    getWebpackCssModulesLoader,
    getWebpackSassLoader,
} from '../helpers/loaders';
import { getAlias } from '../helpers/resolve';

const commonConfig = {
    entry: [SRC_SERVER_ENTRY],
    output: {
        path: DIST_SERVER_DIR,
        publicPath: '/',
        filename: 'index.js',
        chunkFilename: `${DIST_SCRIPTS_PREFIX}/chunks/[name].[chunkhash].js`,
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
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [getWebpackBabelLoader(), getWebpackSourceMapLoader()],
            },
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
                         * Note: Extract loader is redundant for server side as there are no CSS bundles generated there.
                         * Only CSS Modules loader needed for selectors names generation (e.g. class names) to have consistency with those which are created in client-side bundle.
                         */
                        use: [getWebpackCssModulesLoader(true), getWebpackSassLoader()],
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
        /**
         * Note: Enable skipping enforce extensions for .ts(.tsx) files.
         * Passing array will provide Webpack with instructions how to manage skipped extensions for files.
         * More details: https://webpack.js.org/configuration/resolve/#resolveextensions
         */
        extensions: ['.ts', '.tsx', '...'],
    },
};

export default commonConfig;
