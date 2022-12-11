import { useCallback, useMemo, memo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useTranslates } from '@reusables/custom-hooks';
import { selectIsMobile } from '@slices/app-info/app-info.selector';
import NavigationMobile from './components/NavigationMobile';
import NavigationDesktop from './components/NavigationDesktop';

import styles from './Navigation.module.scss';

export interface INavItem {
    title: string;
    href: string;
}

interface INavigationComponentProps {
    onEnter: () => void;
    onLeave: () => void;
}

const NavigationComponent: React.FC<INavigationComponentProps> = ({ onEnter, onLeave }) => {
    const isMobile = useSelector(selectIsMobile);
    const { t } = useTranslates();
    const navItemsData = useMemo(
        () => [
            {
                title: t('header.navigation.experienceLinkTitle'),
                href: '/',
            },
            {
                title: t('header.navigation.passionsLinkTitle'),
                href: '/',
            },
        ],
        [t] // Re-calculate if language changed
    );

    const renderNavItems = useCallback(
        (navItemsArr: INavItem[], navItemClassName: string) =>
            navItemsArr.map((navItem) => {
                return (
                    <li key={navItem.title} className={navItemClassName}>
                        <Link
                            className={styles['nav-item-link']}
                            to={navItem.href}
                            onFocus={onEnter}
                            onBlur={onLeave}
                            onMouseEnter={onEnter}
                            onMouseLeave={onLeave}
                        >
                            {navItem.title}
                        </Link>
                    </li>
                );
            }),
        [onEnter, onLeave]
    );

    return (
        <nav aria-label={t('header.navigation.title')}>
            {isMobile ? (
                <NavigationMobile
                    navItemsData={navItemsData}
                    renderNavItems={renderNavItems}
                    onEnter={onEnter}
                    onLeave={onLeave}
                />
            ) : (
                <NavigationDesktop navItemsData={navItemsData} renderNavItems={renderNavItems} />
            )}
        </nav>
    );
};

export default memo(NavigationComponent);
