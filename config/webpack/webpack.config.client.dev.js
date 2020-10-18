import { WEBPACK_MODE_DEV } from '../environment';
import { progressBarPlugin, definePlugin, hmrPlugin } from './plugins';

const devConfig = {
  mode: WEBPACK_MODE_DEV,
  devtool: 'inline-source-map',
  plugins: [
    hmrPlugin(),
    definePlugin({
      PRODUCTION: false,
      DEV: true,
    }),
    progressBarPlugin({
      name: 'build:dev',
      minimal: true,
    }),
  ],
  devServer: {
    hot: true,
    host: 'localhost',
    compress: true,
    open: true,
    historyApiFallback: true,
    compress: true,
    port: 1337,
  },
  watchOptions: {
    aggregateTimeout: 800,
    poll: 2000,
  },
};

export default devConfig;
