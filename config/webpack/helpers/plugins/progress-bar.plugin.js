import ProgressBarPlugin from 'webpackbar';

export default ({ name, minimal = true } = {}) =>
    new ProgressBarPlugin({
        name,
        minimal,
    });
