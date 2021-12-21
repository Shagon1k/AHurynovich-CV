import { call, getContext, put, takeLatest } from 'redux-saga/effects';
import { setAppLanguage } from '@reducers/app-info/app-info.actions';
import { CHANGE_LANGUAGE } from './i18n.constants';

/**
 * Initializes application i18n
 */
export function* initI18n() {
    const { i18n } = yield getContext('services');

    try {
        yield call(i18n.init);
        const currentLanguageCode = yield call(i18n.getLanguageCode);
        yield put(setAppLanguage(currentLanguageCode));
    } catch (e) {
        // TODO: Provide Store-specific error handling
        console.error(e);
    }
}

export function* changeLanguage({ payload: languageCode }) {
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
