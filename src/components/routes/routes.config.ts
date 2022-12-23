import { lazy } from 'react';

const MainPage = lazy(() => import(/* webpackPrefetch: true */ '@pages/MainPage'));
const Experience = lazy(() => import(/* webpackPrefetch: true */ '@pages/ExperiencePage'));
const PassionsPage = lazy(() => import(/* webpackPrefetch: true */ '@pages/PassionsPage'));

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
} as const;
