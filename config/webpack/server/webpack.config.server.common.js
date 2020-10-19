import { SRC_SERVER_ENTRY, DIST_SERVER_DIR, WITH_SSR } from '../../environment';
import { definePlugin } from '../plugins';

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
    definePlugin({
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
        loader: 'babel-loader',
      },
    ],
  },
};

export default commonConfig;
