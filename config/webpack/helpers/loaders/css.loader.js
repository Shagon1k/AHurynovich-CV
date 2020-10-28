import getScopedName from '../get-scoped-name.helper';

export const getWebpackCssModulesLoader = (isDev) => ({
  loader: 'css-loader',
  options: {
    sourceMap: true,
    import: false,
    modules: {
      compileType: 'module',
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
