import clsx from 'clsx';
import { memo, useState } from 'react';
import sanitizeHTML from 'sanitize-html';

import Popup from '@components/base/Popup';
import { useTranslates } from '@reusables/custom-hooks';

import styles from './AccessibilityStatementButton.module.scss';

interface IAccessibilityStatementButtonProps {
    className?: string;
    statementMarkup: string;
}

const AccessibilityStatementButton: React.FC<IAccessibilityStatementButtonProps> = ({
    className = '',
    statementMarkup,
}) => {
    const { t } = useTranslates();
    const [isA11yStatementPopupShown, setIsA11yStatementPopupShown] = useState(false);
    const title = t('accessibilityStatement.title');

    const cn = clsx({
        [styles['a11y-statement-btn']]: true,
        [className]: Boolean(className),
    });

    return (
        <>
            <button
                className={cn}
                title={title}
                onClick={() => setIsA11yStatementPopupShown(true)}
                aria-label={title}
                aria-haspopup='dialog'
            >
                {title}
            </button>
            {isA11yStatementPopupShown && (
                <Popup onClose={() => setIsA11yStatementPopupShown(false)}>
                    <Popup.Header>{title}</Popup.Header>
                    <Popup.Content>
                        <div className={styles['a11y-statement-content']}>
                            <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(statementMarkup) }} />
                            <div className={styles['a11y-statement-note']}>
                                {t('accessibilityStatement.note')}
                            </div>
                        </div>
                    </Popup.Content>
                </Popup>
            )}
        </>
    );
};

export default memo(AccessibilityStatementButton);
