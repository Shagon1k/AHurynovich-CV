import { WEBPACK_MODE_DEV } from '../../environment';
import { getWebpackProgressBarPlugin, getWebpackDefinePlugin } from '../helpers/plugins';

const devConfig = {
  mode: WEBPACK_MODE_DEV,
  devtool: 'eval-source-map',
  watch: true,
  plugins: [
    getWebpackDefinePlugin({
      PRODUCTION: false,
      DEV: true,
    }),
    getWebpackProgressBarPlugin({
      name: 'build:server:dev',
      minimal: true,
    }),
  ],
  watchOptions: {
    aggregateTimeout: 800,
    poll: 2000,
  },
};

export default devConfig;
