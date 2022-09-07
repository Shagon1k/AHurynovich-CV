import WorkboxPlugin from 'workbox-webpack-plugin';

// Needed for PWA purpose
export default () =>
    new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
        maximumFileSizeToCacheInBytes: 1000000,
    });
