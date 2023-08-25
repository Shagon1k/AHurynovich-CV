import HTMLWebpackPlugin from 'html-webpack-plugin';
import { HtmlWebpackSkipAssetsPlugin } from 'html-webpack-skip-assets-plugin';

import PreloadWebpackPlugin from '@vue/preload-webpack-plugin';

import { PRELOAD_ASSETS_URLS } from '../../../../src/assets/preload.config.js';
import { SRC_APP_TEMPLATE, DIST_DIR } from '../../../environment';

const preloadAssetsRegexPattern = PRELOAD_ASSETS_URLS.map((assetUrl) => {
    const [name, extension] = assetUrl.split('.');
    return `${name}(.*)\\.${extension}`;
}).join('|');

export default () => [
    new HTMLWebpackPlugin({
        filename: `${DIST_DIR}/index.html`,
        template: SRC_APP_TEMPLATE,
        inject: true,
        hash: false,
        minify: {
            minifyJS: true,
        },
    }),
    new HtmlWebpackSkipAssetsPlugin({
        // Used to have direct control of JS/CSS files injection keeping ability to automatically inject other files (favicons, PWA manifest, etc.)
        excludeAssets: [/\.js/, /\.css/],
    }),
    new PreloadWebpackPlugin({
        // Used to have ability to preload/prefetch some assets. As result generates <link> tag with specific "rel" attribute
        rel: 'preload',
        include: 'all',
        as(entry) {
            if (/\.css$/.test(entry)) return 'style';
            if (/\.(woff|woff2|ttf)$/.test(entry)) return 'font';
            if (/\.(png|webp|jpg|jpeg|gif|svg|svg\?url)$/.test(entry)) return 'image';
            return 'script';
        },
        // The only possibility to preload/prefetch inject specific files - include all with fallback to pass based on file name
        fileBlacklist: [new RegExp(`^((?!(${preloadAssetsRegexPattern})).)*$`)],
    }),
];
