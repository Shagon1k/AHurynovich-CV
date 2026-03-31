import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from '@components/base/Icon';
import { BP } from '@config/application';
import { useTranslates } from '@reusables/custom-hooks';
import { selectAppBreakpoint } from '@slices/app-info/app-info.selector';
import { openChat } from '@slices/chatbot';

import styles from './ChatButton.module.scss';

interface IChatButtonProps {
    onEnter: () => void;
    onLeave: () => void;
}

const ChatButton: React.FC<IChatButtonProps> = ({ onEnter, onLeave }: IChatButtonProps) => {
    const dispatch = useDispatch();
    const { t } = useTranslates();
    const breakpointName = useSelector(selectAppBreakpoint);
    const iconSize = [BP.XS, BP.S].includes(breakpointName) ? 'xs' : 's';
    const title = t('header.chatButton.title');

    const handleClick = () => {
        dispatch(openChat());
    };

    return (
        <button
            className={styles['chat-button']}
            title={title}
            onClick={handleClick}
            onFocus={onEnter}
            onBlur={onLeave}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            aria-label={title}
        >
            <Icon name='chat' size={iconSize} isDecorative={false} title={title} />
        </button>
    );
};

export default memo(ChatButton);
