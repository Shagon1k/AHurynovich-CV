import { ProvidePlugin } from 'webpack';

const DEFAULT_CONFIG = {
    React: 'react',
    PropTypes: 'prop-types',
};

export default (config) => new ProvidePlugin({ ...DEFAULT_CONFIG, ...config });
