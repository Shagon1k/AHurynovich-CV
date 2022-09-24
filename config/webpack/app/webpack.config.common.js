import {
    SRC_APP_ENTRY,
    DIST_DIR,
    DIST_SCRIPTS_PREFIX,
    DIST_STYLES_PREFIX,
    DIST_FONTS_PREFIX,
    WITH_PWA,
    SRC_ROBOTS_ENTRY,
} from '../../environment';
import {
    getWebpackHtmlPlugins,
    getWebpackDefinePlugin,
    getWebpackProvidePlugin,
    getWebpackMiniCssExtractPlugin,
    getWebpackCopyPlugin,
    getWebpackFaviconPlugin,
} from '../helpers/plugins';
import {
    getWebpackBabelLoader,
    getWebpackSourceMapLoader,
    getWebpackMiniCssExtractLoader,
    getWebpackCssLoader,
    getWebpackCssModulesLoader,
    getWebpackPostCssLoader,
    getWebpackSassLoader,
} from '../helpers/loaders';
import { getAlias } from '../helpers/resolve';

const commonConfig = {
    entry: [SRC_APP_ENTRY],
    output: {
        path: DIST_DIR,
        publicPath: '/',
        filename: `${DIST_SCRIPTS_PREFIX}/index.js`,
        chunkFilename: `${DIST_SCRIPTS_PREFIX}/chunks/[name].[chunkhash].js`,
    },
    target: 'web',
    externals: ['jsdom'],
    plugins: [
        getWebpackMiniCssExtractPlugin({
            filename: `${DIST_STYLES_PREFIX}/styles.css`,
            chunkFilename: `${DIST_STYLES_PREFIX}/chunks/[name].[chunkhash].css`,
        }),
        ...getWebpackHtmlPlugins(),
        getWebpackCopyPlugin([{ from: SRC_ROBOTS_ENTRY, to: 'robots.txt' }]),
        getWebpackFaviconPlugin(),
        getWebpackDefinePlugin({
            WITH_PWA,
        }),
        getWebpackProvidePlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                type: 'asset/resource',
                generator: {
                    filename: `${DIST_FONTS_PREFIX}/[hash][ext][query]`,
                },
            },
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
                        use: [
                            getWebpackMiniCssExtractLoader(),
                            getWebpackCssModulesLoader(),
                            getWebpackPostCssLoader(),
                            getWebpackSassLoader(),
                        ],
                    },
                    {
                        use: [
                            getWebpackMiniCssExtractLoader(),
                            getWebpackCssLoader(),
                            getWebpackPostCssLoader(),
                            getWebpackSassLoader(),
                        ],
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
