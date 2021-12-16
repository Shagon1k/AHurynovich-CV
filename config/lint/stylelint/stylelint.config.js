module.exports = {
    extends: ['stylelint-config-standard-scss'],
    plugins: ['stylelint-scss'],
    rules: {
        'string-quotes': 'single',
        indentation: 4,
        'scss/at-mixin-argumentless-call-parentheses': 'always',
    },
};
