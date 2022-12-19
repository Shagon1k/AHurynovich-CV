import MainPage from '@pages/MainPage';
import Experience from '@pages/ExperiencePage';
import PassionsPage from '@pages/PassionsPage';

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
