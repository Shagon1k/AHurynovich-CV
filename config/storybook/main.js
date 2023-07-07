const { merge } = require('webpack-merge'); // eslint-disable-line no-undef
const overrideWebpackConfig = require('./webpack.config.storybook.es5'); // eslint-disable-line no-undef

module.exports = {
    stories: [
        './docs/*.stories.mdx',
        '../../src/**/*.stories.mdx',
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-mdx-gfm'],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    core: {
        builder: 'webpack5',
    },
    webpackFinal: async (config) => {
        // Removing Storybook's default Webpack config for SVG in order to replace with own (as override config has lower priority)
        const fileLoaderRule = config.module.rules.find((rule) => rule.test.test('.svg'));
        fileLoaderRule.exclude = /\.svg$/;

        return merge(config, overrideWebpackConfig);
    },
    docs: {
        autodocs: false,
    },
};
