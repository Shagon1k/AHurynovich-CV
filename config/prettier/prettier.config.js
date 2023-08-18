module.exports = {
    printWidth: 110,
    endOfLine: 'auto',
    singleQuote: true,
    jsxSingleQuote: true,
    trailingComma: 'es5',
    semi: true,
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: 'always',
    tabWidth: 4,
    useTabs: false,
    importOrder: [
        '^(?![@./]).*', // NPM packages imports
        '@', // "@" allias-based imports
        '^([./]).*(?<!scss)$', // non-styling relative imports
        '^([./]).*(.scss)$', // styling relative imports
    ],
    importOrderSeparation: true,
    plugins: ['@trivago/prettier-plugin-sort-imports'],
};
