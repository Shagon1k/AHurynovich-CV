import clsx from 'clsx';
import { forwardRef, memo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useTranslates } from '@reusables/custom-hooks';
import { selectIsAppScrolledDown } from '@slices/app-info/app-info.selector';

import LogoSVG from '@assets/images/logo.svg?url';

import styles from './Logo.module.scss';

interface ILogoComponentProps {
    onEnter: () => void;
    onLeave: () => void;
}

const LogoComponent = forwardRef<HTMLAnchorElement, ILogoComponentProps>(({ onEnter, onLeave }, ref) => {
    const isAppScrolledDown = useSelector(selectIsAppScrolledDown);
    const { t } = useTranslates();
    const logoCn = clsx({
        [styles['logo']]: true,
        [styles['m-compact']]: isAppScrolledDown,
    });

    return (
        <Link
            className={logoCn}
            to='/'
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

LogoComponent.displayName = 'LogoComponent';

export default memo(LogoComponent);
