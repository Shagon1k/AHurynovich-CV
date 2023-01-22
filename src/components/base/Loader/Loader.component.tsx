import clsx from 'clsx';
import { useState, useEffect } from 'react';

import { useTranslates } from '@reusables/custom-hooks';
import LoaderGearS from '@assets/images/loader/loader-gear-s.svg';
import LoaderGearM from '@assets/images/loader/loader-gear-m.svg';
import LoaderGearL from '@assets/images/loader/loader-gear-l.svg';

import styles from './Loader.module.scss';

const DEFAULT_SHOW_DELAY_MS = 200;

interface ILoaderProps {
    message?: string;
    withOverlay?: boolean;
    showDelayMs?: number;
    onLoadingStart?: () => void;
    onLoadingEnd?: () => void;
}

const Loader: React.FC<ILoaderProps> = ({
    message = '',
    withOverlay = false,
    showDelayMs = DEFAULT_SHOW_DELAY_MS,
    onLoadingStart,
    onLoadingEnd,
}) => {
    const [isShown, setIsShown] = useState(false);
    const { t } = useTranslates();
    const loadingMessage = message || t('common.loading');
    const messageCn = clsx({
        [styles['message']]: true,
        visuallyhidden: !message, // Note: Even not passed message not displayed visually, default message still vital to alert for A11y
    });

    useEffect(() => {
        const showTimeout = setTimeout(() => {
            setIsShown(true);
            onLoadingStart?.();
        }, showDelayMs);

        return () => {
            onLoadingEnd?.();
            clearTimeout(showTimeout);
        };
    }, [showDelayMs, onLoadingStart, onLoadingEnd]);

    return (
        <>
            {isShown && (
                <>
                    {withOverlay && <div className={styles['overlay']}></div>}
                    <div className={styles['container']}>
                        <div className={styles['loader']} aria-hidden={true}>
                            <LoaderGearS className={styles['gear-s']} />
                            <LoaderGearM className={styles['gear-m']} />
                            <LoaderGearL className={styles['gear-l']} />
                        </div>
                        <span className={messageCn} role='alert'>
                            {loadingMessage}
                        </span>
                    </div>
                </>
            )}
        </>
    );
};

export default Loader;
