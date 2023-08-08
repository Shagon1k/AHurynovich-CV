import clsx from 'clsx';
import { memo, useState, useCallback } from 'react';

import Icon, { type IIconName } from '@components/base/Icon';
import Link from '@components/base/Link';
import { useTranslates } from '@reusables/custom-hooks';
import { hashCode } from '@utils/strings';
import trainLocoImgUrl from './images/train_loco.svg?url';
import trainCarriageImgUrl from './images/train_carriage.svg?url';
import trainSmokeImgUrl from './images/train_smoke.svg?url';

import styles from './Socials.module.scss';

interface ISocialInfo {
    name: string;
    iconName: IIconName;
    link: string;
}
export type ISocialsInfo = ISocialInfo[];
const SOCIALS_GROUP_LENGTH = 3;

interface ISocialsProps {
    socialsData: ISocialsInfo;
}

const Socials: React.FC<ISocialsProps> = ({ socialsData }) => {
    const [shouldSmokeAnimate, setShouldSmokeAnimate] = useState(false);

    const trainSmokeCn = clsx({
        [styles['train-smoke']]: true,
        [styles['m-animate']]: shouldSmokeAnimate,
    });

    const handleSocialElemEnter = useCallback(() => {
        setShouldSmokeAnimate(true);
    }, []);

    const handleSocialElemLeave = useCallback(() => {
        setShouldSmokeAnimate(false);
    }, []);

    return (
        <div className={styles['socials']}>
            <SocialGroup
                socialGroupData={socialsData.slice(0, SOCIALS_GROUP_LENGTH)}
                onSocialElementEnter={handleSocialElemEnter}
                onSocialElementLeave={handleSocialElemLeave}
            />
            <SocialGroup
                socialGroupData={socialsData.slice(SOCIALS_GROUP_LENGTH, SOCIALS_GROUP_LENGTH * 2)}
                onSocialElementEnter={handleSocialElemEnter}
                onSocialElementLeave={handleSocialElemLeave}
            />
            <img className={styles['train-loco']} src={trainLocoImgUrl} alt='' aria-hidden={true} />
            <img className={trainSmokeCn} src={trainSmokeImgUrl} alt='' aria-hidden={true} />
        </div>
    );
};

interface ISocialGroupProps {
    socialGroupData: ISocialsInfo;
    onSocialElementEnter: () => void;
    onSocialElementLeave: () => void;
}

const SocialGroup: React.FC<ISocialGroupProps> = ({
    socialGroupData,
    onSocialElementEnter,
    onSocialElementLeave,
}) => {
    const { t } = useTranslates();
    return (
        <div className={styles['socials-group']}>
            <img className={styles['train-carriage']} src={trainCarriageImgUrl} alt='' aria-hidden={true} />
            <ul className={styles['socials-list']}>
                {socialGroupData.map(({ name, iconName, link }) => (
                    <li key={hashCode(name)} className={styles['socials-item']}>
                        <Link
                            className={styles['socials-item-link']}
                            type='external'
                            title={t('footer.socials.goToMy', { name })}
                            to={link}
                            onEnter={onSocialElementEnter}
                            onLeave={onSocialElementLeave}
                        >
                            <Icon name={iconName} size='s' />
                            <span className='visuallyhidden'>{name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default memo(Socials);
