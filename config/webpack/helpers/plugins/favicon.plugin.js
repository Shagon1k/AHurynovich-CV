import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

import { SRC_APP_FAVICON_ENTRY, DIST_FAVICONS_PREFIX } from '../../../environment';

export default () =>
    new FaviconsWebpackPlugin({
        logo: SRC_APP_FAVICON_ENTRY,
        prefix: DIST_FAVICONS_PREFIX,
        cache: true,
        inject: false,
        devMode: 'webapp',
        favicons: {
            // Note: Application name, description, etc. are mostly for PWA to generate manifest.json
            appName: 'Aliaksei-Hurynovich-CV',
            appDescription: 'Aliaksei Hurynovichs CV app',
            developerName: 'Aliaksei Hurynovich',
            developerURL: null,
            background: '#ddd',
            theme_color: '#333',
            // We should align application start url based on it's root route.
            start_url: '../../',
            icons: {
                favicons: true,
                appleIcon: true,
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
