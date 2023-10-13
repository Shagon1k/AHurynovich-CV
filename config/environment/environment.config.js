import path from 'path';

const { NODE_ENV, WITH_PWA: ENV_WITH_PWA } = process.env;

export const IS_DEV = NODE_ENV !== 'production';
export const WITH_PWA = ENV_WITH_PWA === 'true';

export const ROOT_DIR = process.cwd();
export const CONFIG_DIR = path.resolve(ROOT_DIR, './config');
export const SRC_ROBOTS_ENTRY = path.resolve(CONFIG_DIR, './robots/robots.txt');
export const SRC_SITEMAP_ENTRY = path.resolve(CONFIG_DIR, './robots/sitemap.xml');

export const SRC_DIR = path.resolve(ROOT_DIR, './src');
export const SRC_ASSETS_DIR = path.resolve(SRC_DIR, './assets');
export const SRC_APP_FAVICON_ENTRY = path.resolve(SRC_ASSETS_DIR, './images/favicon.png');
export const SRC_APP_ENTRY = path.resolve(SRC_DIR, './index.ts');

export const SRC_APP_TEMPLATE = path.resolve(SRC_DIR, './index.html');

export const DIST_DIR = path.resolve(ROOT_DIR, './dist');
export const DIST_FAVICONS_PREFIX = 'assets/favicons';
export const DIST_FONTS_PREFIX = 'assets/fonts';
export const DIST_IMAGES_PREFIX = 'assets/images';
export const DIST_SCRIPTS_PREFIX = 'js';
export const DIST_STYLES_PREFIX = 'css';
