import { WEBPACK_MODE_PROD } from '../../environment';
import { progressBarPlugin, definePlugin } from '../plugins';

const prodConfig = {
  mode: WEBPACK_MODE_PROD,
  devtool: 'eval-cheap-module-source-map',
  watch: false,
  plugins: [
    definePlugin({
      PRODUCTION: true,
      DEV: false
    }),
    progressBarPlugin({
      name: 'build:server:prod',
      minimal: false,
    }),
  ],
};

export default prodConfig;
