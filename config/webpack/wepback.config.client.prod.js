import { WEBPACK_MODE_PROD } from '../environment';
import { progressBarPlugin, definePlugin } from './plugins';

const prodConfig = {
  mode: WEBPACK_MODE_PROD,
  devtool: 'eval-cheap-module-source-map',
  watch: true,
  plugins: [
    definePlugin({
      PRODUCTION: true,
      DEV: false
    }),
    progressBarPlugin({
      name: 'build:prod',
      minimal: false,
    }),
  ],
};

export default prodConfig;
