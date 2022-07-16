module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:import/warnings',
        'prettier/react',
    ],
    rules: {
        'no-var': 'error',
        'prefer-destructuring': 'warn',
        'react/prop-types': 'warn',
        'react/destructuring-assignment': 'off',
        'react/jsx-key': 'warn',
        'import/no-duplicates': 'warn',
        'import/no-cycle': 'warn',
    },
    globals: {
        /** Global environment variables */
        PRODUCTION: 'readonly',
        WITH_SSR: 'readonly',
        IS_SERVER: 'readonly',
        IS_CLIENT: 'readonly',
        /** Tests variables */
        jest: 'readonly',
        describe: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        /** Webpack Provide plugin variables */
        React: 'readonly',
        ReactDOMClient: 'readonly',
        ReactDOMServer: 'readonly',
        ReactRedux: 'readonly',
        Redux: 'readonly',
        PropTypes: 'readonly',
        /** Other variables */
        process: 'readonly',
        module: 'readonly',
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: ['babel', 'react', 'prettier'],
};
