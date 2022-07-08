import { WEBPACK_MODE_PROD } from '../../environment';
import { getWebpackProgressBarPlugin, getWebpackDefinePlugin } from '../helpers/plugins';

const prodConfig = {
    mode: WEBPACK_MODE_PROD,
    devtool: 'eval-cheap-module-source-map',
    plugins: [
        getWebpackDefinePlugin({
            IS_PRODUCTION: true,
            IS_DEV: false,
        }),
        getWebpackProgressBarPlugin({
            name: 'build:server:prod',
            minimal: false,
        }),
    ],
};

export default prodConfig;
