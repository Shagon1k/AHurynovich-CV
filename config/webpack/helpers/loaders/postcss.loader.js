export default () => ({
    loader: 'postcss-loader',
    options: {
        postcssOptions: {
            parser: false,
            // Note: 'postcss-preset-env' uses browserlist to provide plugins of modern CSS features for old browser versions (e.g. OKLCH color model).
            plugins: ['autoprefixer', 'postcss-hover-media-feature', 'postcss-preset-env'],
        },
    },
});
