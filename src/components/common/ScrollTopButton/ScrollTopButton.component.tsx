import clsx from 'clsx';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { useTranslates } from '@reusables/custom-hooks';
import { selectIsAppScrolledDown } from '@slices/app-info/app-info.selector';
import BalloonSVG from './images/balloon.svg';

import styles from './ScrollTopButton.module.scss';

const scrollTop = (isSmooth?: boolean) => {
    window.scrollTo({
        top: 0,
        behavior: isSmooth ? 'smooth' : 'auto',
    });
};

interface IScrollTopButtonProps {
    onFocusFirstElem: () => void;
}

const ScrollTopButton: React.FC<IScrollTopButtonProps> = ({ onFocusFirstElem }) => {
    const { t } = useTranslates();
    const { pathname } = useLocation();
    const isAppScrolledDown = useSelector(selectIsAppScrolledDown);
    const buttonCn = clsx({
        [styles['scroll-top-btn']]: true,
        [styles['m-visible']]: isAppScrolledDown,
    });

    // Route change scroll top side effect
    useEffect(() => {
        scrollTop();
    }, [pathname]);

    const handleClick = () => {
        scrollTop(true);
        onFocusFirstElem();
    };

    return (
        <button
            className={buttonCn}
            onClick={handleClick}
            title={t('scrollTop.title')}
            aria-label={t('scrollTop.title')}
        >
            <BalloonSVG aria-label={t('scrollTop.airBalloon')} className={styles['scroll-top-btn-img']} />
        </button>
    );
};

export default ScrollTopButton;
