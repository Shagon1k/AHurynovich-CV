import HTMLWebpackPlugin from 'html-webpack-plugin';
import { HtmlWebpackSkipAssetsPlugin } from 'html-webpack-skip-assets-plugin';

import { SRC_APP_TEMPLATE, DIST_CLIENT_DIR } from '../../../environment';

export default () => [
    new HTMLWebpackPlugin({
        filename: `${DIST_CLIENT_DIR}/index.html`,
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
];
