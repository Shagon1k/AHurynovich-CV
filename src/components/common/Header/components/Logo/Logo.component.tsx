import clsx from 'clsx';
import { forwardRef, memo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useTranslates } from '@reusables/custom-hooks';
import { selectIsAppScrolledDown } from '@slices/app-info/app-info.selector';
import { ROUTES_CONFIG } from '@components/routes/routes.config';
import LogoSVG from '@assets/images/logo.svg?url';

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
            className={logoCn}
            to={ROUTES_CONFIG.main.path}
            title={t('header.navigation.homePageLinkTitle')}
            ref={ref}
            onFocus={onEnter}
            onBlur={onLeave}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            <img className={styles['logo-image']} src={LogoSVG} alt={t('header.logoDescription')} />
        </Link>
    );
});

Logo.displayName = 'Logo';

export default memo(Logo);
