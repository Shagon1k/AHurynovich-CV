import { WEBPACK_MODE_PROD } from '../../environment';
import { getWebpackProgressBarPlugin, getWebpackDefinePlugin } from '../helpers/plugins';

const prodConfig = {
  mode: WEBPACK_MODE_PROD,
  devtool: 'eval-cheap-module-source-map',
  watch: false,
  plugins: [
    getWebpackDefinePlugin({
      PRODUCTION: true,
      DEV: false
    }),
    getWebpackProgressBarPlugin({
      name: 'build:server:prod',
      minimal: false,
    }),
  ],
};

export default prodConfig;
