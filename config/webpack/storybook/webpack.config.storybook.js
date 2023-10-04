import { getWebpackCssModulesLoader, getWebpackSassLoader, getSvgRLoader } from '../helpers/loaders';
import { getWebpackProvidePlugin } from '../helpers/plugins';
import { getAlias } from '../helpers/resolve';

export const storyBookOverrideConfig = {
    plugins: [getWebpackProvidePlugin()],
    module: {
        rules: [
            {
                test: /\.module\.s?css$/,
                use: [
                    'style-loader',
                    getWebpackCssModulesLoader(),
                    getWebpackSassLoader({
                        // Note: Adding global styles
                        additionalData: `@use "@styles/main.scss";`,
                    }),
                ],
            },
            // Note: Adding ability to use SVG as resource using URL (e.g. in <img> tag)
            {
                test: /\.svg$/,
                type: 'asset/resource',
                resourceQuery: /url/, // *.svg?url
                generator: {
                    filename: `images/[name].[hash][ext][query]`,
                },
            },
            // Note: Adding ability to use SVG as React Component in jsx/tsx (e.g. <SVG />)
            {
                test: /\.svg$/,
                // issuer: /\.[jt]sx?$/,
                resourceQuery: { not: [/url/] }, // exclude React Component if *.svg?url
                use: [getSvgRLoader()],
            },
        ],
    },
    resolve: {
        alias: getAlias(),
    },
};

export default storyBookOverrideConfig;
