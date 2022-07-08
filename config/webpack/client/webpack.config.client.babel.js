import merge from 'webpack-merge';
import commonConfig from './webpack.config.client.common';
import devConfig from './webpack.config.client.dev';
import prodConfig from './wepback.config.client.prod';
import { IS_DEV } from '../../environment';

const envConfig = IS_DEV ? devConfig : prodConfig;
const config = merge(commonConfig, envConfig);

export default config;
