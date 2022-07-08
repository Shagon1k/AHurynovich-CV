import path from 'path';

export const { NODE_ENV, WITH_SSR } = process.env;

export const IS_DEV = NODE_ENV !== 'production';
export const WEBPACK_MODE_DEV = 'development';
export const WEBPACK_MODE_PROD = 'production';
export const WEBPACK_MODE = IS_DEV ? WEBPACK_MODE_DEV : WEBPACK_MODE_PROD;

export const ROOT_DIR = process.cwd();
export const CONFIG_DIR = path.resolve(ROOT_DIR, './config');

export const SRC_DIR = path.resolve(ROOT_DIR, './src');
export const SRC_CLIENT_DIR = path.resolve(SRC_DIR, './client');
export const SRC_ASSETS_DIR = path.resolve(SRC_CLIENT_DIR, './assets');
export const SRC_APP_FAVICON_ENTRY = path.resolve(SRC_ASSETS_DIR, './images/favicon.png');
export const SRC_CLIENT_ENTRY = path.resolve(SRC_CLIENT_DIR, './index.js');

export const SRC_SERVER_DIR = path.resolve(SRC_DIR, './server');
export const SRC_SERVER_ENTRY = path.resolve(SRC_SERVER_DIR, './index.js');
export const SRC_COMMON_DIR = path.resolve(SRC_DIR, './common');

export const SRC_APP_TEMPLATE = path.resolve(SRC_DIR, './index.html');

export const DIST_DIR = path.resolve(ROOT_DIR, './dist');
export const DIST_CLIENT_DIR = path.resolve(DIST_DIR, './client');
export const DIST_ASSETS_DIR = path.resolve(DIST_CLIENT_DIR, './assets');
export const DIST_FAVICONS_PREFIX = 'assets/favicons/';
export const DIST_APP_TEMPLATE = path.resolve(DIST_CLIENT_DIR, './index.html');
export const DIST_SERVER_DIR = path.resolve(DIST_DIR, './server');

export const SERVER_PORT = '3000';
