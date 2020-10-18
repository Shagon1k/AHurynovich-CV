import path from 'path';

export const DEV = process.env.NODE_ENV !== 'production';
export const WEBPACK_MODE_DEV = 'development';
export const WEBPACK_MODE_PROD = 'production';
export const WEBPACK_MODE = DEV ? WEBPACK_MODE_DEV : WEBPACK_MODE_PROD;

export const ROOT_DIR = process.cwd();
export const CONFIG_DIR = path.resolve(ROOT_DIR, './config');

export const SRC_DIR = path.resolve(ROOT_DIR, './src');
export const SRC_APP_TEMPLATE = path.resolve(SRC_DIR, './index.html');
export const SRC_ENTRY = path.resolve(SRC_DIR, './index.js');

export const DIST_DIR = path.resolve(ROOT_DIR, './dist');