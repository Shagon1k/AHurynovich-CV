import { getWebpackProgressBarPlugin, getWebpackDefinePlugin } from '../helpers/plugins';

const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    watch: true,
    plugins: [
        getWebpackDefinePlugin({
            IS_PRODUCTION: false,
            IS_DEV: true,
        }),
        getWebpackProgressBarPlugin({
            name: 'build:server:dev',
            minimal: true,
        }),
    ],
    watchOptions: {
        aggregateTimeout: 800,
        poll: 2000,
    },
};

export default devConfig;
