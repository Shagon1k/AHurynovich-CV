import clsx from 'clsx';
import { useSelector } from 'react-redux';

import { useTranslates } from '@reusables/custom-hooks';
import { selectIsAppScrolledDown } from '@slices/app-info/app-info.selector';
import BalloonSVG from '@assets/images/balloon.svg';

import styles from './ScrollTopButton.module.scss';

interface IScrollTopButtonProps {
    onFocusFirstElem: () => void;
}

const ScrollTopButton: React.FC<IScrollTopButtonProps> = ({ onFocusFirstElem }) => {
    const { t } = useTranslates();
    const isAppScrolledDown = useSelector(selectIsAppScrolledDown);
    const buttonCn = clsx({
        [styles['scroll-top-btn']]: true,
        [styles['m-visible']]: isAppScrolledDown,
    });

    const handleClick = () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        onFocusFirstElem();
    };

    return (
        <button
            className={buttonCn}
            onClick={handleClick}
            title={t('scrollTop.title')}
            aria-label={t('scrollTop.title')}
        >
            <BalloonSVG aria-describedby='balloon-description' className={styles['scroll-top-btn-img']} />
            <span className='visualyhidden' id='balloon-description'>
                {t('scrollTop.airBalloon')}
            </span>
        </button>
    );
};

export default ScrollTopButton;
