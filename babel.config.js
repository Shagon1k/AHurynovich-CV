const BABELRC_ROOTS = ['src/*'];

module.exports = {
    presets: [
        '@babel/preset-react',
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'entry',
                targets: {
                    browsers: ['last 2 versions', 'safari >= 7'],
                    node: 'current',
                },
                corejs: 3,
            },
        ],
    ],
    plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-transform-regenerator',
    ],
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
            plugins: ['dynamic-import-node'],
        },
    },
};
