// Used in Webpack config to generate assets preload (<link> tag with "rel=preload")

/**
 * Note: Even though it speed ups specific assets download, it takes some of web app bandwidth for that.
 * Such files loaded on browser idle time, but still takes additional load time.
 * As a result, the more you preload, the more you can block initial render.
 * Thus, files should be preloaded selective (only the ones which 100% be used and vital for initial render).
 */

const PRELOAD_FONTS_URLS = [
    'Moyenage-regular.woff2',
    'Raleway-regular.woff2',
    'Raleway-medium.woff2',
    'Raleway-bold.woff2',
];

const PRELOAD_IMAGES_URLS = ['bg-image.webp', 'my-photo.webp', 'logo.svg'];

export const PRELOAD_ASSETS_URLS = [...PRELOAD_FONTS_URLS, ...PRELOAD_IMAGES_URLS];
