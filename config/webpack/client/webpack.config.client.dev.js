import { WEBPACK_MODE_DEV, DIST_DIR } from '../../environment';
import {
  getWebpackProgressBarPlugin,
  getWebpackDefinePlugin,
  getWebpackHmrPlugin,
} from '../helpers/plugins';

const devConfig = {
  mode: WEBPACK_MODE_DEV,
  devtool: 'eval-source-map',
  watch: true,
  plugins: [
    getWebpackHmrPlugin(),
    getWebpackDefinePlugin({
      PRODUCTION: false,
      DEV: true,
    }),
    getWebpackProgressBarPlugin({
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
    contentBase: DIST_DIR,
  },
};

export default devConfig;
