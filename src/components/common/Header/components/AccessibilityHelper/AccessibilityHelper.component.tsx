import { memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useTranslates } from '@reusables/custom-hooks';
import { type ISkipToContentLink } from '@reusables/skip-to-content.context';
import Link from '@components/base/Link';
import AccessibilityStatementButton from '@components/common/AccessibilityStatementButton';

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

    // Helper popup close effects
    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.code === 'Escape') {
                firstFocusableElemRef.current?.focus();
            }
        };

        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [firstFocusableElemRef]);

    return (
        <div
            className={styles['accessibility-helper']}
            role='dialog'
            aria-modal={true}
            aria-describedby='accessibility-helper-description'
        >
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
            <AccessibilityStatementButton className={styles['a11y-statement-button']} />
        </div>
    );
};

AccessibilityHelper.displayName = 'AccessibilityHelper';

export default memo(AccessibilityHelper);
