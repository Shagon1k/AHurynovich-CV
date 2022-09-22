import { getWebpackProgressBarPlugin, getWebpackDefinePlugin } from '../helpers/plugins';

const prodConfig = {
    mode: 'production',
    /**
     * Note: Set to 'source-map' due to:
     * 1) easy debug potential error;
     * 2) it could potentially help others to learn/advice, there is MIT License for code, so who cares about stealing? :D
     * Alternatively sourcemaps generation could be configured to be hosted to some authentication-based URL so be used only with access provided.
     */
    devtool: 'source-map',
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
