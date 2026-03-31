import { type IChatbotState } from './chatbot.slice';

interface IState {
    chatbot: IChatbotState;
}

export const selectIsOpen = (state: IState): boolean => state.chatbot.isOpen;
export const selectMessages = (state: IState): IChatbotState['messages'] => state.chatbot.messages;
export const selectIsLoading = (state: IState): boolean => state.chatbot.isLoading;
export const selectError = (state: IState): string | null => state.chatbot.error;
