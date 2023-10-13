import { memo } from 'react';
import { useLocation } from 'react-router-dom';

import Link from '@components/base/Link';
import AccessibilityStatementButton from '@components/common/AccessibilityStatementButton';
import { useTranslates } from '@reusables/custom-hooks';
import { type ISkipToContentLink } from '@reusables/skip-to-content.context';

import styles from './AccessibilityHelper.module.scss';

interface IAccessibilityHelperProps {
    skipToContentLinks: ISkipToContentLink[];
    firstFocusableElemRef: React.RefObject<HTMLAnchorElement>;
}

const AccessibilityHelper: React.FC<IAccessibilityHelperProps> = ({
    skipToContentLinks,
    firstFocusableElemRef,
}) => {
    const { t } = useTranslates();
    const { pathname } = useLocation();

    const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.code === 'Escape') {
            firstFocusableElemRef.current?.focus();
        }
    };

    return (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- exception to handle "Escape" button click when A11y Helper on focus
        <div
            className={styles['accessibility-helper']}
            role='dialog'
            aria-modal={true}
            aria-labelledby='accessibility-helper-title'
            aria-describedby='accessibility-helper-description'
            onFocus={() => {
                document.addEventListener('keydown', handleEscapeKey);
            }}
            onBlur={() => {
                document.removeEventListener('keydown', handleEscapeKey);
            }}
        >
            <span id='accessibility-helper-title' className='visuallyhidden'>
                {t('header.accessibilityHelper.title')}
            </span>
            <span id='accessibility-helper-description' className='visuallyhidden'>
                {t('header.accessibilityHelper.description')}
            </span>
            <ul className={styles['skip-links-list']}>
                {skipToContentLinks.map(({ title, id }) => (
                    <li key={id} className={styles['skip-links-item']}>
                        <Link type='simple' to={`${pathname}#${id}`}>
                            {t('header.accessibilityHelper.skipToContent', { title })}
                        </Link>
                    </li>
                ))}
            </ul>
            <AccessibilityStatementButton
                id='helper-a11y-statement-btn'
                className={styles['a11y-statement-button']}
            />
        </div>
    );
};

AccessibilityHelper.displayName = 'AccessibilityHelper';

export default memo(AccessibilityHelper);
