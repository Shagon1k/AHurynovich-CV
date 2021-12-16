import { DefinePlugin } from 'webpack';

const DEFAULT_CONFIG = {
  PRODUCTION: true,
};

export default (config) => new DefinePlugin({ ...DEFAULT_CONFIG, ...config });
