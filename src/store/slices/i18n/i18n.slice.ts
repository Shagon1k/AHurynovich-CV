import { createAction } from '@reduxjs/toolkit';

export const ACTION_TYPES = {
    CHANGE_LANGUAGE: 'i18n/changeLanguage',
};

export const changeLanguage = createAction<string>(ACTION_TYPES.CHANGE_LANGUAGE);
