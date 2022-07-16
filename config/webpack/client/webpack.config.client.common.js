import { SRC_CLIENT_ENTRY, DIST_CLIENT_DIR, WITH_SSR, IS_DEV, SRC_ROBOTS_ENTRY } from '../../environment';
import {
    getWebpackHtmlPlugin,
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
        filename: 'js/index.js',
        chunkFilename: 'js/chunks/[name].[chunkhash].js',
    },
    target: 'web',
    externals: ['jsdom'],
    plugins: [
        getWebpackMiniCssExtractPlugin({
            filename: 'css/styles.css',
            chunkFilename: 'css/chunks/[name].[chunkhash].css',
        }),
        getWebpackHtmlPlugin(),
        getWebpackCopyPlugin([{ from: SRC_ROBOTS_ENTRY, to: 'robots.txt' }]),
        getWebpackFaviconPlugin(),
        getWebpackDefinePlugin({
            IS_SERVER: false,
            IS_CLIENT: true,
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
