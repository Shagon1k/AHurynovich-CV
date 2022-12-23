import { useState, useEffect } from 'react';

import LoaderGearS from '@assets/images/loader/loader-gear-s.svg';
import LoaderGearM from '@assets/images/loader/loader-gear-m.svg';
import LoaderGearL from '@assets/images/loader/loader-gear-l.svg';

import styles from './Loader.module.scss';

const DEFAULT_SHOW_DELAY_MS = 200;

interface ILoaderProps {
    message?: string;
    withOverlay?: boolean;
    showDelayMs?: number;
}

const Loader: React.FC<ILoaderProps> = ({
    message = '',
    withOverlay = false,
    showDelayMs = DEFAULT_SHOW_DELAY_MS,
}) => {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const showTimeout = setTimeout(() => setIsShown(true), showDelayMs);
        return () => {
            clearTimeout(showTimeout);
        };
    }, [showDelayMs]);

    return (
        <>
            {isShown && (
                <>
                    {withOverlay && <div className={styles['overlay']}></div>}
                    <div className={styles['container']}>
                        <div className={styles['loader']}>
                            <LoaderGearS className={styles['gear-s']} />
                            <LoaderGearM className={styles['gear-m']} />
                            <LoaderGearL className={styles['gear-l']} />
                        </div>
                        {message && <div className={styles['message']}>{message}</div>}
                    </div>
                </>
            )}
        </>
    );
};

export default Loader;
