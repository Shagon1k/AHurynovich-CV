export default () => ({
    loader: '@svgr/webpack',
    options: {
        titleProp: true, // Add ability to provide SVG title through property pass
        descProp: true, // Add ability to provide SVG description through property pass
        svgo: true, // SVG image optimization
        memo: true, // Wrap all SVG's with React.memo (additional optimization)
    },
});
