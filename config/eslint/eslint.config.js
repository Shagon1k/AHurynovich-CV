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
    ReactDOM: 'readonly',
    ReactRedux: 'readonly',
    Redux: 'readonly',
    PropTypes: 'readonly',
    /** Other variables */
    process: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier']
};
