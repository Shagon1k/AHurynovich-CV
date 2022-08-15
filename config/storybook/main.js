const { merge } = require('webpack-merge'); // eslint-disable-line no-undef
const overrideWebpackConfig = require('./webpack.config.storybook.es5'); // eslint-disable-line no-undef

module.exports = {
    stories: [
        './docs/*.stories.mdx',
        '../../src/**/*.stories.mdx',
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    webpackFinal: async (config) => merge(config, overrideWebpackConfig),
};
