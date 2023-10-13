import clsx from 'clsx';
import { forwardRef, memo } from 'react';
import { useSelector } from 'react-redux';

import Link from '@components/base/Link';
import { ROUTES_CONFIG } from '@components/routes/routes.config';
import { useTranslates } from '@reusables/custom-hooks';
import { selectIsAppScrolledDown } from '@slices/app-info/app-info.selector';

import logoImgUrl from './images/logo.svg?url';

import styles from './Logo.module.scss';

interface ILogoProps {
    onEnter: () => void;
    onLeave: () => void;
}

const Logo = forwardRef<HTMLAnchorElement, ILogoProps>(({ onEnter, onLeave }, ref) => {
    const isAppScrolledDown = useSelector(selectIsAppScrolledDown);
    const { t } = useTranslates();
    const logoCn = clsx({
        [styles['logo']]: true,
        [styles['m-compact']]: isAppScrolledDown,
    });

    return (
        <Link
            id='logo-link'
            className={logoCn}
            to={ROUTES_CONFIG.main.path}
            title={t('header.navigation.homePageLinkTitle')}
            ref={ref}
            onEnter={onEnter}
            onLeave={onLeave}
        >
            <img className={styles['logo-image']} src={logoImgUrl} alt={t('header.logoDescription')} />
        </Link>
    );
});

Logo.displayName = 'Logo';

export default memo(Logo);
