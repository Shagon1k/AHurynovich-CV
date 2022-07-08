import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

import { SRC_APP_FAVICON_ENTRY, DIST_FAVICONS_PREFIX } from '../../../environment';

export default () =>
    new FaviconsWebpackPlugin({
        logo: SRC_APP_FAVICON_ENTRY,
        prefix: DIST_FAVICONS_PREFIX,
        cache: true,
        inject: true,
        favicons: {
            // NOTE: Application name, description, etc. are mostly for PWA to generate manifest.json
            appName: 'Aliaksei-Hurynovich-CV',
            appDescription: 'Aliaksei Hurynovichs CV app',
            developerName: 'Aliaksei Hurynovich',
            icons: {
                favicons: true,
                appleIcon: true,
                android: false,
                appleStartup: false,
                coast: false,
                yandex: false,
                windows: false,
                firefox: false,
                opengraph: false,
                twitter: false,
            },
        },
    });
