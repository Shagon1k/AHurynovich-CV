import { WEBPACK_MODE_DEV, DIST_DIR } from '../../environment';
import { progressBarPlugin, definePlugin, hmrPlugin } from '../plugins';

const devConfig = {
  mode: WEBPACK_MODE_DEV,
  devtool: 'eval-source-map',
  watch: true,
  plugins: [
    hmrPlugin(),
    definePlugin({
      PRODUCTION: false,
      DEV: true,
    }),
    progressBarPlugin({
      name: 'build:client:dev',
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
    contentBase: DIST_DIR
  }
};

export default devConfig;
