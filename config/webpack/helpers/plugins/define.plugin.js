import { DefinePlugin } from 'webpack';

const defaultConfig = {
  PRODUCTION: true,
};

export default (config) => new DefinePlugin({ ...defaultConfig, ...config });
