# PWA
1. [ General information ](#general-information)
2. [ Technology stack used ](#technology-stack-used)
3. [ PWA build ](#pwa-build)

## General Information
Right now project has pretty straightforward **[PWA](https://web.dev/progressive-web-apps/)** support. PWA enables installation as Mobile/Desktop Application.

## Technology Stack used
In order to support PWA approach the following **utilities were used**:
- **[Webpack Favicon Plugin](https://www.npmjs.com/package/favicons-webpack-plugin)** - to prepare PWA [`manifest.json`](https://developer.mozilla.org/en-US/docs/Web/Manifest) and Icons PWA setup;
- **[Webpack Workbox Plugin](https://developer.chrome.com/docs/workbox/modules/workbox-webpack-plugin/)** - to generate PWA Service Worker for Offline mode support;
    > 💡 ***Note**: Using [Workbox GenerateSW](https://developer.chrome.com/docs/workbox/modules/workbox-webpack-plugin/#generatesw) limits control of offline mode (e.g. caching strategy).*
- **Service Worker** - created by Webpack Workbox Plugin it registered in Application entry file when PWA support enabled (see [/src/client/index.js](/src/client/index.js)).

## PWA Build
To build Application with PWA support - use `npm run build:client:prod:pwa` which injects WITH_PWA environment variable used to control it.
