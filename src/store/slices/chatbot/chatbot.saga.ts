import { put, call, takeLatest } from 'redux-saga/effects';

import { sendChatMessage } from '@api/chatbot.api';
import { PayloadAction } from '@reduxjs/toolkit';

import { sendMessage, receiveMessage, setError } from './chatbot.slice';

/**
 * Handles sending a chat message to the API
 */
export function* handleSendMessage(action: PayloadAction<string>) {
    try {
        const response: string | null = yield call(sendChatMessage, action.payload);

        if (response) {
            yield put(receiveMessage(response));
        } else {
            yield put(setError('Failed to get response from AI assistant'));
        }
    } catch (error) {
        yield put(setError('An error occurred while processing your message'));
    }
}

/**
 * Watches for sendMessage actions
 */
export function* watchChatbot() {
    yield takeLatest(sendMessage.type, handleSendMessage);
}
