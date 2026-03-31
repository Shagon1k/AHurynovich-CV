import { useEffect, useRef } from 'react';

import { useTranslates } from '@reusables/custom-hooks';
import { type IChatMessage } from '@slices/chatbot';

import styles from './MessageList.module.scss';

interface IMessageListProps {
    messages: IChatMessage[];
    isLoading: boolean;
    error: string | null;
}

const MESSAGE_CONTENT_CLASS = 'message-content';

const MessageList: React.FC<IMessageListProps> = ({ messages, isLoading, error }: IMessageListProps) => {
    const { t } = useTranslates();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    return (
        <div className={styles['message-list']} role='log' aria-live='polite' aria-atomic='false'>
            {messages.length === 0 && !isLoading && (
                <div className={styles['welcome-message']}>{t('chatbot.welcomeMessage')}</div>
            )}

            {messages.map((message) => {
                const messageClass = message.role === 'user' ? styles['message-user'] : styles['message-ai'];
                const messageLabel = message.role === 'user' ? t('chatbot.userLabel') : t('chatbot.aiLabel');

                return (
                    <div key={message.id} className={messageClass}>
                        <div className={styles['message-label']}>{messageLabel}:</div>
                        <div className={styles[MESSAGE_CONTENT_CLASS]}>{message.content}</div>
                    </div>
                );
            })}

            {isLoading && (
                <div className={styles['message-ai']}>
                    <div className={styles['message-label']}>{t('chatbot.aiLabel')}:</div>
                    <div className={styles[MESSAGE_CONTENT_CLASS]}>{t('chatbot.loadingMessage')}</div>
                </div>
            )}

            {error && (
                <div className={styles['message-error']}>
                    <div className={styles[MESSAGE_CONTENT_CLASS]}>{t('chatbot.errorMessage')}</div>
                </div>
            )}

            <div ref={messagesEndRef} />
        </div>
    );
};

export default MessageList;
