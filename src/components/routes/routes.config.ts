import { lazy } from 'react';

const MainPage = lazy(
    () => import(/* webpackChunkName: "main-page", webpackPrefetch: true */ '@pages/MainPage')
);
const Experience = lazy(
    () => import(/* webpackChunkName: "experience-page", webpackPrefetch: true */ '@pages/ExperiencePage')
);
const PassionsPage = lazy(
    () => import(/* webpackChunkName: "passions-page", webpackPrefetch: true */ '@pages/PassionsPage')
);
const NotFoundPage = lazy(
    () => import(/* webpackChunkName: "not-found-page", webpackPrefetch: true */ '@pages/NotFoundPage')
);

export const ROUTES_CONFIG = {
    main: {
        id: 'main',
        path: '/',
        titleTranslationKey: 'pages.main.title',
        Element: MainPage,
    },
    experience: {
        id: 'experience',
        path: '/experience',
        titleTranslationKey: 'pages.experience.title',
        Element: Experience,
    },
    passions: {
        id: 'passions',
        path: '/passions',
        titleTranslationKey: 'pages.passions.title',
        Element: PassionsPage,
    },
    notFound: {
        id: 'notFound',
        path: '*',
        titleTranslationKey: 'pages.notFound.title',
        Element: NotFoundPage,
    },
} as const;
