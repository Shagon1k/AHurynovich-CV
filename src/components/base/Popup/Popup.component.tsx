import clsx from 'clsx';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';

import { POPUP_ROOT_ID } from '@config/application';
import Icon from '@components/base/Icon';
import { useTranslates } from '@reusables/custom-hooks';
import PopupHeader from './components/PopupHeader';
import PopupContent from './components/PopupContent';
import PopupFooter from './components/PopupFooter';

import styles from './Popup.module.scss';

interface IPopupProps extends React.PropsWithChildren {
    onClose: () => void;
}

interface IPopupParts {
    Header: typeof PopupHeader;
    Content: typeof PopupContent;
    Footer: typeof PopupFooter;
}

const POPUP_CHILDREN_TYPES: React.ComponentType[] = [PopupHeader, PopupFooter, PopupContent];

const Popup: React.FC<IPopupProps> & IPopupParts = ({ children, onClose }) => {
    const { t } = useTranslates();
    const popupCn = clsx({
        popup: true, // used for popup existing detection to set scroll hiding styles for <body>
        [styles['popup']]: true,
    });

    // remove all unacceptable children if any
    const purifiedChildren = React.Children.toArray(children).filter(
        (child) =>
            React.isValidElement(child) && POPUP_CHILDREN_TYPES.includes(child.type as React.ComponentType)
    );

    const handleOverlayClick = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    // Popup close effects
    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.code === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [onClose]);

    return createPortal(
        <FocusLock returnFocus={true}>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- Popup overlay click handling is an exception */}
            <div onClick={handleOverlayClick} className={styles['popup-overlay']}>
                <div className={popupCn} role='dialog' aria-modal={true} aria-labelledby='popup-header'>
                    <button
                        className={styles['popup-close-btn']}
                        onClick={onClose}
                        title={t('popup.closeButtonLabel')}
                        aria-label={t('popup.closeButtonLabel')}
                    >
                        <Icon className={styles['popup-close-btn-icn']} name='cross' size='s' />
                    </button>
                    {purifiedChildren}
                </div>
            </div>
        </FocusLock>,
        document.getElementById(POPUP_ROOT_ID) as HTMLElement
    );
};

Popup.Header = PopupHeader;
Popup.Content = PopupContent;
Popup.Footer = PopupFooter;

Popup.displayName = 'Popup';

export default Popup;
