import { SRC_SERVER_ENTRY, DIST_SERVER_DIR, WITH_SSR, DEV } from '../../environment';
import { getWebpackDefinePlugin, getWebpackMiniCssExtractPlugin } from '../helpers/plugins';
import {
  getWebpackMiniCssExtractLoader,
  getWebpackBabelLoader,
  getWebpackCssLoader,
  getWebpackCssModulesLoader,
  getWebpackSassLoader,
  getWebpackPostCssLoader,
} from '../helpers/loaders';
import { getAlias } from '../helpers/resolve';

const commonConfig = {
  entry: [SRC_SERVER_ENTRY],
  output: {
    path: DIST_SERVER_DIR,
    filename: 'index.js',
    publicPath: '/',
  },
  target: 'node',
  resolve: {
    alias: {},
  },
  plugins: [
    getWebpackMiniCssExtractPlugin(),
    getWebpackDefinePlugin({
      IS_SERVER: true,
      IS_CLIENT: false,
      WITH_SSR,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [getWebpackBabelLoader()],
      },
      {
        test: /\.s?css$/,
        oneOf: [
          {
            test: /\.module\.s?css$/,
            use: [
              getWebpackMiniCssExtractLoader(),
              getWebpackCssModulesLoader(DEV),
              getWebpackSassLoader(),
              getWebpackPostCssLoader(),
            ],
          },
          {
            use: [
              getWebpackMiniCssExtractLoader(),
              getWebpackCssLoader(),
              getWebpackSassLoader(),
              getWebpackPostCssLoader(),
            ],
          },
        ],
      },
    ],
  },
  resolve: {
    alias: getAlias(),
  },
};

export default commonConfig;
