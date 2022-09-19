// TS Style files extensions support
declare module '*.scss';
declare module '*.css';

// TS NPM modules declarations
declare module 'uuid';

// TS App Globals support
declare const WITH_SSR: boolean;
declare const WITH_PWA: boolean;
declare const IS_SERVER: boolean;
declare const IS_CLIENT: boolean;

// Window fields enhancement
interface Window {
    __PRELOADED_STATE__?: object;
}
