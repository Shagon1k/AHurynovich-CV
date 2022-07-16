import CopyWebpackPlugin from 'copy-webpack-plugin';

export default (patternsConfig = []) =>
    new CopyWebpackPlugin({
        options: {
            concurrency: 50,
        },
        patterns: patternsConfig,
    });
