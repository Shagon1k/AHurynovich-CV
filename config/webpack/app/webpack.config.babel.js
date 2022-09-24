import merge from 'webpack-merge';
import commonConfig from './webpack.config.common';
import devConfig from './webpack.config.dev';
import prodConfig from './wepback.config.prod';
import { IS_DEV } from '../../environment';

const envConfig = IS_DEV ? devConfig : prodConfig;
const config = merge(commonConfig, envConfig);

export default config;
