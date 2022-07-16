import HTMLWebpackPlugin from 'html-webpack-plugin';

import { SRC_APP_TEMPLATE, DIST_CLIENT_DIR } from '../../../environment';

export default () =>
    new HTMLWebpackPlugin({
        filename: `${DIST_CLIENT_DIR}/index.html`,
        template: SRC_APP_TEMPLATE,
        /** NOTE: Injection should be turned OFF to keep control in JS/CSS/etc. files injection through index.html
         * Sadly, but injection could not be used on file type basis (e.g. to webpack inject only favicon and avoid double CSS/JS injection)
         */
        inject: false,
        hash: false,
        minify: {
            minifyJS: true,
        },
    });
