import { useCallback, useMemo, memo } from 'react';
import { useSelector } from 'react-redux';

import Link from '@components/base/Link';
import { ROUTES_CONFIG } from '@components/routes/routes.config';
import { BP } from '@config/application';
import { useTranslates } from '@reusables/custom-hooks';
import { selectAppBreakpoint, selectIsMobile } from '@slices/app-info/app-info.selector';

import NavigationDesktop from './components/NavigationDesktop';
import NavigationMobile from './components/NavigationMobile';

import styles from './Navigation.module.scss';

export interface INavItem {
    title: string;
    href: string;
}

interface INavigationProps {
    onEnter: () => void;
    onLeave: () => void;
}

const Navigation: React.FC<INavigationProps> = ({ onEnter, onLeave }) => {
    const isMobile = useSelector(selectIsMobile);
    const breakpointName = useSelector(selectAppBreakpoint);
    const isCompactNavigation = isMobile || [BP.XS, BP.S].includes(breakpointName);
    const { t } = useTranslates();
    const navItemsData = useMemo(
        () => [
            {
                title: t('header.navigation.experienceLinkTitle'),
                href: ROUTES_CONFIG.experience.path,
            },
            {
                title: t('header.navigation.passionsLinkTitle'),
                href: ROUTES_CONFIG.passions.path,
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
                            onEnter={onEnter}
                            onLeave={onLeave}
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
            {isCompactNavigation ? (
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

export default memo(Navigation);
