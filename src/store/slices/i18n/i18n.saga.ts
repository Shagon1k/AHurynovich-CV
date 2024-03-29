import { AnyAction as IAnyAction } from 'redux';
import { call, getContext, put, takeLatest } from 'redux-saga/effects';

import type { ILanguageCodes, IServices } from '@services';
import { setAppLanguage } from '@slices/app-info/app-info.slice';

import { ACTION_TYPES } from './i18n.slice';

const { CHANGE_LANGUAGE } = ACTION_TYPES;

/**
 * Initializes application i18n
 */
export function* initI18n() {
    const { i18n } = (yield getContext('services')) as IServices;

    try {
        yield call(i18n.init);
        const currentLanguageCode: ILanguageCodes = yield call(i18n.getLanguageCode);
        yield put(setAppLanguage(currentLanguageCode));
    } catch (e) {
        // TODO: Provide Store-specific error handling
        console.error(e);
    }
}

export function* changeLanguage({ payload: languageCode }: IAnyAction) {
    const { i18n } = yield getContext('services');

    try {
        const isLanguageCodeSupported = i18n.checkLanguageSupported(languageCode);

        if (isLanguageCodeSupported) {
            yield call(i18n.changeLanguage, languageCode);
            yield put(setAppLanguage(languageCode));
        }
    } catch (e) {
        // TODO: Provide Store-specific error handling
        console.error(e);
    }
}

export function* watchI18n() {
    yield takeLatest(CHANGE_LANGUAGE, changeLanguage);
}
