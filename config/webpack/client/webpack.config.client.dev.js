import { DIST_DIR, WITH_SSR } from '../../environment';
import { getWebpackProgressBarPlugin, getWebpackDefinePlugin } from '../helpers/plugins';

const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    watch: WITH_SSR, // SSR approach's DEV mode does NOT use dev server => requires enabling "watch" mode directly
    plugins: [
        getWebpackDefinePlugin({
            IS_PRODUCTION: false,
            IS_DEV: true,
        }),
        getWebpackProgressBarPlugin({
            name: 'build:client:dev',
            minimal: true,
        }),
    ],
    devServer: {
        hot: true,
        host: 'localhost',
        compress: true,
        open: true,
        historyApiFallback: true,
        port: 1337,
        static: DIST_DIR,
        server: 'https',
    },
};

export default devConfig;
