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
        xdescribe: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        cy: 'readonly',
        before: 'readonly',
        after: 'readonly',
        /** Webpack Provide plugin variables */
        React: 'readonly',
        /** Other variables */
        process: 'readonly',
        module: 'readonly',
        global: 'readonly',
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: ['babel', 'react', 'prettier'],
};
