import clsx from 'clsx';
import { useState, useCallback, Ref as IRef } from 'react';

import GearSVG from '@assets/images/gear-thin.svg';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import LanguageSwitcher from './components/LanguageSwitcher';

import styles from './Header.module.scss';

interface IHeaderComponentProps {
    firstFocusableElemRef: IRef<HTMLAnchorElement>;
}

const HeaderComponent: React.FC<IHeaderComponentProps> = ({ firstFocusableElemRef }) => {
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
            <div className={styles['header-inner']}>
                <div className={`${gearWrapperCn} ${styles['m-left']}`}>
                    <GearSVG className={styles['gear']} />
                </div>
                <Logo
                    ref={firstFocusableElemRef}
                    onEnter={handleHeaderElemEnter}
                    onLeave={handleHeaderElemLeave}
                />
                <Navigation onEnter={handleHeaderElemEnter} onLeave={handleHeaderElemLeave} />
                <LanguageSwitcher onEnter={handleHeaderElemEnter} onLeave={handleHeaderElemLeave} />
                <div className={`${gearWrapperCn} ${styles['m-right']}`}>
                    <GearSVG className={styles['gear']} />
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;
