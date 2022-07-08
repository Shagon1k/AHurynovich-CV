import getScopedName from '../get-scoped-name.helper';

/**
 * Returns CSS Modules loader based on application type
 * @param {Boolean} isDev - Whether development environment setup
 * @param {Boolean} isExportOnlyLocals - Whether only CSS Modules locals should be exported (e.g. for SSR case)
 * @returns {Object} CSS Modules loader configuration object
 */
export const getWebpackCssModulesLoader = (isDev, isExportOnlyLocals = false) => ({
    loader: 'css-loader',
    options: {
        sourceMap: true,
        import: false,
        modules: {
            compileType: 'module',
            exportOnlyLocals: isExportOnlyLocals,
            ...(isDev
                ? {
                      localIdentName: '[path]_[name]_[local]',
                  }
                : {
                      getLocalIdent: (context, localIdentName, localName) =>
                          getScopedName(localName, context.resourcePath),
                  }),
        },
    },
});

export const getWebpackCssLoader = () => ({
    loader: 'css-loader',
});
