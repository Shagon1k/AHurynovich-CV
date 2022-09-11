import {
    SRC_CLIENT_ENTRY,
    DIST_CLIENT_DIR,
    DIST_SCRIPTS_PREFIX,
    DIST_STYLES_PREFIX,
    DIST_FONTS_PREFIX,
    WITH_SSR,
    WITH_PWA,
    IS_DEV,
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
    getWebpackMiniCssExtractLoader,
    getWebpackCssLoader,
    getWebpackCssModulesLoader,
    getWebpackSassLoader,
} from '../helpers/loaders';
import { getAlias } from '../helpers/resolve';

const commonConfig = {
    entry: [SRC_CLIENT_ENTRY],
    output: {
        path: DIST_CLIENT_DIR,
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
            IS_SERVER: false,
            IS_CLIENT: true,
            WITH_SSR,
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
                            getWebpackCssModulesLoader(IS_DEV),
                            getWebpackSassLoader(),
                        ],
                    },
                    {
                        use: [
                            getWebpackMiniCssExtractLoader(),
                            getWebpackCssLoader(),
                            getWebpackSassLoader(),
                        ],
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
