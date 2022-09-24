import { DIST_DIR } from '../../environment';
import { getWebpackProgressBarPlugin, getWebpackDefinePlugin } from '../helpers/plugins';

const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    watch: false,
    plugins: [
        getWebpackDefinePlugin({
            IS_PRODUCTION: false,
            IS_DEV: true,
        }),
        getWebpackProgressBarPlugin({
            name: 'build:dev',
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
    },
};

export default devConfig;
