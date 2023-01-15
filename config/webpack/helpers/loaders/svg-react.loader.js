export default () => ({
    loader: '@svgr/webpack',
    options: {
        titleProp: true, // Add ability to provide SVG title through property pass
    },
});
