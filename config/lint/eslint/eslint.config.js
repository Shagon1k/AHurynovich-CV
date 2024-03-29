module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: [
        'babel',
        'react',
        'prettier',
        'react-hooks',
        'jsx-a11y',
        'no-unsanitized',
        'sonarjs',
        'optimize-regex',
        'no-secrets',
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:import/warnings',
        'prettier/react',
        'plugin:jsx-a11y/strict',
        'plugin:sonarjs/recommended',
        'plugin:optimize-regex/recommended',
    ],
    rules: {
        'no-var': 'error',
        'prefer-destructuring': 'warn',
        'react/prop-types': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-key': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import/no-duplicates': 'warn',
        'import/no-cycle': 'warn',
        'no-unsanitized/method': 'error',
        'no-unsanitized/property': 'error',
        'sonarjs/no-redundant-jump': 'off', // Reason: conflicts with TS noImplicitReturns
        'no-secrets/no-secrets': ['error', { tolerance: 4.5 }],
    },
    globals: {
        /** Global environment variables */
        WITH_PWA: 'readonly',
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
    settings: {
        react: {
            version: 'detect',
        },
    },
    /**
     * Note: TSLint became deprecated from 2019 due to high code duplication with ESLint. Nowadays ESLint is used to format TypeScript files.
     * More details: https://blog.palantir.com/tslint-in-2019-1a144c2317a9
     * As Project intends to support both JS and TS, special override configuration used for TypeScript files.
     */
    overrides: [
        {
            // TS overrides
            files: ['*.{ts,tsx}'],
            parser: '@typescript-eslint/parser',
            /**
             * Note: 'typescript-eslint' disables some rules from 'eslint:recommended' as they are checked by TypeScript itself (e.g. constant reassign, object keys duplication)
             * More details: https://github.com/typescript-eslint/typescript-eslint/blob/v2.23.0/packages/eslint-plugin/src/configs/eslint-recommended.ts
             * Therefore it is required to handle TypeScript checking every time after ESlint checking (e.g. using 'tsc' command) as described cases will NOT be detected by ESLint.
             */
            plugins: ['@typescript-eslint'],
            extends: [
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
            ],
            rules: {
                '@typescript-eslint/consistent-type-definitions': 'error',
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: ['typeAlias', 'interface'],
                        format: ['PascalCase'],
                        prefix: ['I'],
                    },
                    {
                        selector: 'typeParameter',
                        format: ['PascalCase'],
                        prefix: ['T'],
                    },
                ],
            },
        },
        {
            // RTL (tests) overrides
            files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec).[jt]s?(x)'],
            extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended'],
        },
    ],
};
