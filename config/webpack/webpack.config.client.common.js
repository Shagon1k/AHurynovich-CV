import { SRC_ENTRY, DIST_DIR } from '../environment';
import { htmlPlugin } from './plugins';

const commonConfig = {
  entry: [SRC_ENTRY],
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/',
  },
  target: 'web',
  externals: ['jsdom'],
  resolve: {
    alias: {},
  },
  plugins: [htmlPlugin()],
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
