import { ProvidePlugin } from 'webpack';

const DEFAULT_CONFIG = {
    React: 'react',
    ReactDOM: 'react-dom',
    ReactRedux: 'react-redux',
    Redux: 'redux',
    PropTypes: 'prop-types',
};

export default (config) => new ProvidePlugin({ ...DEFAULT_CONFIG, ...config });
