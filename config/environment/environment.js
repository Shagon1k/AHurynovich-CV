import path from 'path';

export const WITH_SSR = process.env.WITH_SSR;

export const DEV = process.env.NODE_ENV !== 'production';
export const WEBPACK_MODE_DEV = 'development';
export const WEBPACK_MODE_PROD = 'production';
export const WEBPACK_MODE = DEV ? WEBPACK_MODE_DEV : WEBPACK_MODE_PROD;

export const ROOT_DIR = process.cwd();
export const CONFIG_DIR = path.resolve(ROOT_DIR, './config');

export const SRC_DIR = path.resolve(ROOT_DIR, './src');
export const SRC_CLIENT_DIR = path.resolve(SRC_DIR, './client');
export const SRC_CLIENT_ENTRY = path.resolve(SRC_CLIENT_DIR, './index.js');
export const SRC_SERVER_DIR = path.resolve(SRC_DIR, './server');
export const SRC_SERVER_ENTRY = path.resolve(SRC_SERVER_DIR, './index.js');

export const SRC_APP_TEMPLATE = path.resolve(SRC_DIR, './index.html');

export const DIST_DIR = path.resolve(ROOT_DIR, './dist');
export const DIST_CLIENT_DIR = path.resolve(DIST_DIR, './client');
export const DIST_SERVER_DIR = path.resolve(DIST_DIR, './server');

export const SERVER_PORT = '3000';
