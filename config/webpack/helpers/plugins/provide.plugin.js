import { ProvidePlugin } from 'webpack';

const DEFAULT_CONFIG = {
    React: 'react',
};

export default (config) => new ProvidePlugin({ ...DEFAULT_CONFIG, ...config });
