import clsx from 'clsx';
import { useState, useEffect, useRef, ReactNode as IReactNode } from 'react';
import FocusLock from 'react-focus-lock';
import { useLocation } from 'react-router-dom';
import { throttle } from 'throttle-debounce';

import { useTranslates } from '@reusables/custom-hooks';

import { INavItem } from '../../Navigation.component';

import styles from './NavigationMobile.module.scss';

const THROTTLE_DELAY = 200;

interface INavigationMobileProps {
    navItemsData: INavItem[];
    renderNavItems: (navItemsArr: INavItem[], navItemClassName: string) => IReactNode;
    onEnter: () => void;
    onLeave: () => void;
}

const NavigationMobile: React.FC<INavigationMobileProps> = ({
    navItemsData,
    renderNavItems,
    onEnter,
    onLeave,
}) => {
    const { t } = useTranslates();
    const location = useLocation();
    const [isOpened, setIsOpened] = useState(false);

    const toggleOpened = () => {
        setIsOpened((prevIsOpened) => !prevIsOpened);
    };

    const navListCn = clsx({
        [styles['nav-items-list']]: true,
        [styles['m-opened']]: isOpened,
    });

    const navItems = renderNavItems(navItemsData, styles['nav-item']);

    const navButtonRef = useRef<null | HTMLButtonElement>(null);

    const navigationBtnTitle = isOpened
        ? t('header.navigation.button.close')
        : t('header.navigation.button.open');

    // Navigation close effects
    useEffect(() => {
        if (isOpened) {
            const handleScroll = throttle(THROTTLE_DELAY, () => {
                setIsOpened(false);
            });

            const handleEscapeKey = (event: KeyboardEvent) => {
                if (event.code === 'Escape') {
                    setIsOpened(false);
                    navButtonRef.current?.focus();
                }
            };

            window.addEventListener('scroll', handleScroll, { passive: true });
            document.addEventListener('keydown', handleEscapeKey);

            return () => {
                window.removeEventListener('scroll', handleScroll);
                document.removeEventListener('keydown', handleEscapeKey);
            };
        }
    }, [isOpened]);
    useEffect(() => {
        setIsOpened(false);
    }, [location]);

    return (
        <FocusLock disabled={!isOpened}>
            <button
                className={styles['nav-button']}
                title={navigationBtnTitle}
                aria-label={navigationBtnTitle}
                aria-controls='nav-list'
                aria-expanded={isOpened}
                aria-haspopup='true'
                ref={navButtonRef}
                onClick={toggleOpened}
                onFocus={onEnter}
                onBlur={onLeave}
            >
                <div className={styles['nav-button-inner']}></div>
            </button>
            <ul id='nav-list' className={navListCn}>
                {navItems}
            </ul>
        </FocusLock>
    );
};

export default NavigationMobile;
