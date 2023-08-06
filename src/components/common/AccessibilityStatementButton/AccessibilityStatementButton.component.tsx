import clsx from 'clsx';
import { memo, useState } from 'react';

import { useTranslates } from '@reusables/custom-hooks';
import Popup from '@components/base/Popup';

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

    const cn = clsx({
        [styles['a11y-statement-btn']]: true,
        [className]: Boolean(className),
    });

    return (
        <>
            <button
                className={cn}
                title={t('accessibilityStatement.title')}
                onClick={() => setIsA11yStatementPopupShown(true)}
                aria-label={t('accessibilityStatement.title')}
                aria-haspopup='dialog'
            >
                {t('accessibilityStatement.title')}
            </button>
            {isA11yStatementPopupShown && (
                <Popup onClose={() => setIsA11yStatementPopupShown(false)}>
                    <Popup.Header>{t('accessibilityStatement.title')}</Popup.Header>
                    <Popup.Content>
                        <div className={styles['a11y-statement-content']}>
                            <div className={styles['a11y-statement-note']}>
                                {t('accessibilityStatement.note')}
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: statementMarkup }} />
                        </div>
                    </Popup.Content>
                </Popup>
            )}
        </>
    );
};

export default memo(AccessibilityStatementButton);
