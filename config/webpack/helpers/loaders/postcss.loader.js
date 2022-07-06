export default () => ({
    loader: 'postcss-loader',
    options: {
        postcssOptions: {
            parser: false,
            plugins: ['autoprefixer'],
        },
    },
});
