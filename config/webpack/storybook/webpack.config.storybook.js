import { getWebpackProvidePlugin } from '../helpers/plugins';
import { getWebpackCssModulesLoader, getWebpackSassLoader } from '../helpers/loaders';
import { getAlias } from '../helpers/resolve';

export const storyBookOverrideConfig = {
    plugins: [getWebpackProvidePlugin()],
    module: {
        rules: [
            {
                test: /\.module\.s?css$/,
                use: ['style-loader', getWebpackCssModulesLoader(), getWebpackSassLoader()],
            },
        ],
    },
    resolve: {
        alias: getAlias(),
    },
};

export default storyBookOverrideConfig;
