import merge from 'webpack-merge';
import commonConfig from './webpack.config.server.common';
import devConfig from './webpack.config.server.dev';
import prodConfig from './wepback.config.server.prod';
import { IS_DEV } from '../../environment';

const envConfig = IS_DEV ? devConfig : prodConfig;
const config = merge(commonConfig, envConfig);

export default config;
