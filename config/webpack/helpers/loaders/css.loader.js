/**
 * Returns CSS Modules loader based on application type
 * @param {Boolean} isExportOnlyLocals - Whether only CSS Modules locals should be exported (e.g. for SSR case)
 * @returns {Object} CSS Modules loader configuration object
 */
export const getWebpackCssModulesLoader = (isExportOnlyLocals = false) => ({
    loader: 'css-loader',
    options: {
        sourceMap: true,
        import: false,
        modules: {
            compileType: 'module',
            exportOnlyLocals: isExportOnlyLocals,
            /**
             * Note: There is no point of using hash-based naming for classnames:
             * it reduces usefulness for developers to achieve minor performance profit (~1%).
             * More details: https://github.com/facebook/create-react-app/pull/3965#issuecomment-362868477
             * In addition, there is no need to use "path" in ident name as it decreases readability with
             * low chance to have classnames collision (which is equal to zero in case equal components name avoiding).
             */
            localIdentName: '[name]__[local]',
        },
    },
});

export const getWebpackCssLoader = () => ({
    loader: 'css-loader',
});
