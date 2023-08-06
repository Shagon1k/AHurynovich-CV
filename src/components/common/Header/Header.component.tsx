import clsx from 'clsx';
import { memo, useState, useCallback } from 'react';

import GearSVG from '@assets/images/gears/gear.svg';
import { type ISkipToContentLink } from '@reusables/skip-to-content.context';
import AccessibilityHelper from './components/AccessibilityHelper';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import LanguageSwitcher from './components/LanguageSwitcher';

import styles from './Header.module.scss';

interface IHeaderProps {
    firstFocusableElemRef: React.RefObject<HTMLAnchorElement>;
    skipToContentLinks: ISkipToContentLink[];
}

const Header: React.FC<IHeaderProps> = ({ firstFocusableElemRef, skipToContentLinks }) => {
    const [shouldGearsAnimate, setShouldGearsAnimate] = useState(false);
    const gearWrapperCn = clsx({
        [styles['gear-wrapper']]: true,
        [styles['m-animate']]: shouldGearsAnimate,
    });

    const handleHeaderElemEnter = useCallback(() => {
        setShouldGearsAnimate(true);
    }, []);

    const handleHeaderElemLeave = useCallback(() => {
        setShouldGearsAnimate(false);
    }, []);

    return (
        <header className={styles['header']}>
            <AccessibilityHelper
                skipToContentLinks={skipToContentLinks}
                firstFocusableElemRef={firstFocusableElemRef}
            />
            <div className={styles['header-inner']}>
                <div className={`${gearWrapperCn} ${styles['m-left']}`}>
                    <GearSVG className={styles['gear']} aria-hidden={true} />
                </div>
                <Logo
                    ref={firstFocusableElemRef}
                    onEnter={handleHeaderElemEnter}
                    onLeave={handleHeaderElemLeave}
                />
                <Navigation onEnter={handleHeaderElemEnter} onLeave={handleHeaderElemLeave} />
                <LanguageSwitcher onEnter={handleHeaderElemEnter} onLeave={handleHeaderElemLeave} />
                <div className={`${gearWrapperCn} ${styles['m-right']}`}>
                    <GearSVG className={styles['gear']} aria-hidden={true} />
                </div>
            </div>
        </header>
    );
};

export default memo(Header);
