import { SRC_CLIENT_ENTRY, DIST_CLIENT_DIR, WITH_SSR, DEV } from '../../environment';
import {
    getWebpackHtmlPlugin,
    getWebpackDefinePlugin,
    getWebpackProvidePlugin,
    getWebpackMiniCssExtractPlugin,
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
        filename: 'index.js',
        publicPath: '/',
    },
    target: 'web',
    externals: ['jsdom'],
    plugins: [
        getWebpackMiniCssExtractPlugin({
            filename: 'styles.css',
        }),
        getWebpackHtmlPlugin(),
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
                            getWebpackCssModulesLoader(DEV),
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
