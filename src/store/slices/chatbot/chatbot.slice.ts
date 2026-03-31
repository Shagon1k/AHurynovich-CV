import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { type IChatMessage } from './chatbot.types';

export interface IChatbotState {
    isOpen: boolean;
    messages: IChatMessage[];
    isLoading: boolean;
    error: string | null;
}

const initialState: IChatbotState = {
    isOpen: false,
    messages: [],
    isLoading: false,
    error: null,
};

const chatbotSlice = createSlice({
    name: 'chatbot',
    initialState,
    reducers: {
        openChat: (state) => {
            state.isOpen = true;
        },
        closeChat: (state) => {
            state.isOpen = false;
        },
        sendMessage: (state, action: PayloadAction<string>) => {
            const userMessage: IChatMessage = {
                id: `user-${Date.now()}`,
                role: 'user',
                content: action.payload,
                timestamp: Date.now(),
            };
            state.messages.push(userMessage);
            state.isLoading = true;
            state.error = null;
        },
        receiveMessage: (state, action: PayloadAction<string>) => {
            const aiMessage: IChatMessage = {
                id: `ai-${Date.now()}`,
                role: 'ai',
                content: action.payload,
                timestamp: Date.now(),
            };
            state.messages.push(aiMessage);
            state.isLoading = false;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        clearMessages: (state) => {
            state.messages = [];
            state.error = null;
        },
    },
});

export const { openChat, closeChat, sendMessage, receiveMessage, setError, clearMessages } =
    chatbotSlice.actions;
export default chatbotSlice.reducer;
