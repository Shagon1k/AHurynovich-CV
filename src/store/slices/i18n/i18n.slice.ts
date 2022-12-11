import { createAction } from '@reduxjs/toolkit';

import { ILanguageCodes } from '@services';

export const ACTION_TYPES = {
    CHANGE_LANGUAGE: 'i18n/changeLanguage',
};

export const changeLanguage = createAction<ILanguageCodes>(ACTION_TYPES.CHANGE_LANGUAGE);
