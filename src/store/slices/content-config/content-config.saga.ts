import { put, call } from 'redux-saga/effects';

import { getAppContentConfig } from '@api/app-content-config.api';

import { setContentConfig } from './content-config.slice';
import { type IContentConfig } from './content-config.types';

/**
 * Populates application content configuration (basically all customizable data)
 */
export function* initAppContentConfig() {
    const contentConfig: IContentConfig | null = yield call(getAppContentConfig);

    if (contentConfig) {
        yield put(setContentConfig(contentConfig));
    }
}
