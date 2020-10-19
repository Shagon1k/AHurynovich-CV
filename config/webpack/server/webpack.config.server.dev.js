import { WEBPACK_MODE_DEV } from '../../environment';
import { progressBarPlugin, definePlugin } from '../plugins';

const devConfig = {
  mode: WEBPACK_MODE_DEV,
  devtool: 'eval-source-map',
  watch: true,
  plugins: [
    definePlugin({
      PRODUCTION: false,
      DEV: true,
    }),
    progressBarPlugin({
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
