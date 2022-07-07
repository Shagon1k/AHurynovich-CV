import HTMLWebpackPlugin from 'html-webpack-plugin';

import { SRC_APP_TEMPLATE, DIST_CLIENT_DIR } from '../../../environment';

export default () =>
    new HTMLWebpackPlugin({
        filename: `${DIST_CLIENT_DIR}/index.html`,
        template: SRC_APP_TEMPLATE,
        hash: false,
        minify: {
            minifyJS: true,
        },
        inject: false,
    });
