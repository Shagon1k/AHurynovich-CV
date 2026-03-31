import { useDispatch, useSelector } from 'react-redux';

import Popup from '@components/base/Popup';
import { useTranslates } from '@reusables/custom-hooks';
import {
    closeChat,
    selectIsOpen,
    selectMessages,
    selectIsLoading,
    selectError,
    sendMessage,
} from '@slices/chatbot';

import ChatInput from './components/ChatInput';
import MessageList from './components/MessageList';

import styles from './Chatbot.module.scss';

const Chatbot: React.FC = () => {
    const dispatch = useDispatch();
    const { t } = useTranslates();
    const isOpen = useSelector(selectIsOpen);
    const messages = useSelector(selectMessages);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const handleClose = () => {
        dispatch(closeChat());
    };

    const handleSendMessage = (message: string) => {
        dispatch(sendMessage(message));
    };

    if (!isOpen) {
        return null;
    }

    return (
        <Popup onClose={handleClose}>
            <Popup.Header>
                <h2 className={styles['chatbot-title']}>{t('chatbot.title')}</h2>
            </Popup.Header>
            <Popup.Content>
                <MessageList messages={messages} isLoading={isLoading} error={error} />
            </Popup.Content>
            <Popup.Footer>
                <ChatInput onSendMessage={handleSendMessage} isDisabled={isLoading} />
            </Popup.Footer>
        </Popup>
    );
};

export default Chatbot;
