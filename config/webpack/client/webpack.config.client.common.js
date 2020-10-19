import { SRC_CLIENT_ENTRY, DIST_CLIENT_DIR, WITH_SSR } from '../../environment';
import { htmlPlugin, definePlugin } from '../plugins';

const commonConfig = {
  entry: [SRC_CLIENT_ENTRY],
  output: {
    path: DIST_CLIENT_DIR,
    filename: 'index.js',
    publicPath: '/',
  },
  target: 'web',
  externals: ['jsdom'],
  resolve: {
    alias: {},
  },
  plugins: [
    htmlPlugin(),
    definePlugin({
      IS_SERVER: false,
      IS_CLIENT: true,
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
