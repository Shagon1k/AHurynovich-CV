import { useState, FormEvent } from 'react';

import Button from '@components/base/Button';
import Input from '@components/base/Input';
import { useTranslates } from '@reusables/custom-hooks';

import styles from './ChatInput.module.scss';

interface IChatInputProps {
    onSendMessage: (message: string) => void;
    isDisabled: boolean;
}

const ChatInput: React.FC<IChatInputProps> = ({ onSendMessage, isDisabled }: IChatInputProps) => {
    const { t } = useTranslates();
    const [message, setMessage] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmedMessage = message.trim();

        if (trimmedMessage && !isDisabled) {
            onSendMessage(trimmedMessage);
            setMessage('');
        }
    };

    return (
        <form className={styles['chat-input-form']} onSubmit={handleSubmit}>
            <Input
                id='chat-message-input'
                type='text'
                label={t('chatbot.inputLabel')}
                placeholder={t('chatbot.inputPlaceholder')}
                value={message}
                onChange={setMessage}
                isDisabled={isDisabled}
                maxLength={500}
                modifiers={{ withBottomMargin: false }}
            />
            <Button
                type='submit'
                title={t('chatbot.sendButton')}
                isDisabled={isDisabled || !message.trim()}
            />
        </form>
    );
};

export default ChatInput;
