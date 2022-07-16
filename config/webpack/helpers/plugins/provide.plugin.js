import { ProvidePlugin } from 'webpack';

const DEFAULT_CONFIG = {
    React: 'react',
    ReactDOMClient: 'react-dom/client',
    ReactDOMServer: 'react-dom/server',
    ReactRedux: 'react-redux',
    Redux: 'redux',
    PropTypes: 'prop-types',
};

export default (config) => new ProvidePlugin({ ...DEFAULT_CONFIG, ...config });
