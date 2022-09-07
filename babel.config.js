const BABELRC_ROOTS = ['src/*'];

module.exports = {
    presets: [
        '@babel/preset-react',
        [
            '@babel/preset-env',
            {
                /**
                 * Note: With useBuiltIns 'usage' option Babel goes through targets (specified in package.json "browserslist") and
                 * uses 'core-js' package to add specific polyfills in bundle when they are needed based on that targets.
                 * Alternatively, 'entry' option could be used but it will require add core-js polyfills directly in entry file.
                 * As all of them will be included in that case bundle size increases.
                 */
                useBuiltIns: 'usage',
                corejs: 3,
            },
        ],
    ],
    plugins: ['@babel/plugin-transform-runtime'],
    env: {
        production: {
            plugins: [],
            babelrcRoots: BABELRC_ROOTS,
        },
        development: {
            plugins: [],
            babelrcRoots: BABELRC_ROOTS,
        },
        test: {
            plugins: [],
        },
    },
};
