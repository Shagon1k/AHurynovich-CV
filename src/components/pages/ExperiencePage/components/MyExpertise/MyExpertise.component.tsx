import { memo } from 'react';
import { useSelector } from 'react-redux';

import Icon, { type IIconName } from '@components/base/Icon';
import Link from '@components/base/Link';
import Section from '@components/base/Section';
import { BP } from '@config/application';
import { useTranslates } from '@reusables/custom-hooks';
import { selectAppBreakpoint } from '@slices/app-info/app-info.selector';
import { hashCode } from '@utils/strings';

import batteryLevelImgUrl from './images/battery-level.svg?url';

import styles from './MyExpertise.module.scss';

type IExperiencesList = {
    name: string;
    level: number;
    description: string;
    iconName: IIconName;
    achievements: { title: string; url: string; badgeUrl: string }[];
}[];

interface IMyExpertiseProps {
    myExperienceData: IExperiencesList;
}

const MAX_LEVEL = 4;

const MyExpertise: React.FC<IMyExpertiseProps> = ({ myExperienceData }) => {
    const { t } = useTranslates();

    if (myExperienceData.length === 0) {
        return null;
    }

    return (
        <Section
            id='my-expertise'
            contentClassName={styles['content-container']}
            title={t('pages.experience.myExpertiseSection.title')}
        >
            <ul className={styles['experiences-list']}>
                {myExperienceData.map((itemData) => (
                    <MyExpertiseItem key={hashCode(`${itemData.name}${itemData.iconName}`)} {...itemData} />
                ))}
            </ul>
        </Section>
    );
};

type IMyExpertiseItemProps = IExperiencesList[number];

const MyExpertiseItem: React.FC<IMyExpertiseItemProps> = ({
    name,
    description,
    level,
    iconName,
    achievements,
}) => {
    const { t } = useTranslates();
    const breakpointName = useSelector(selectAppBreakpoint);
    const iconSize = [BP.XS, BP.S].includes(breakpointName) ? 'm' : 'l';

    const hasAchievements = achievements.length > 0;

    const levelDescription = t(
        `pages.experience.myExpertiseSection.levelToDescription.${Math.min(level, MAX_LEVEL)}`
    );
    return (
        <li className={styles['experiences-item']}>
            <div className={styles['experience-main']}>
                <div className={styles['experience-tv-wrapper']}>
                    <h2 className={styles['experience-title']}>{name}</h2>
                    <div className={styles['experience-tv']}>
                        <div className={styles['experience-tv-skill-icon']}>
                            <Icon name={iconName} size={iconSize} />
                        </div>
                        <div className={styles['experience-tv-battery']}>
                            {Array.from({ length: level }, (_, i) => (
                                // Having index as a key is "ok" for this case as equal elements rendered and order will not change
                                <img
                                    key={i}
                                    className={styles['experience-tv-battery-level']}
                                    src={batteryLevelImgUrl}
                                    alt=''
                                    aria-hidden={true}
                                />
                            ))}
                        </div>
                    </div>
                    <p className='visuallyhidden'>
                        {t('pages.experience.myExpertiseSection.expertiseLevelDescription', {
                            levelDescription,
                        })}
                    </p>
                </div>
                <span className={styles['experience-description']}>{description}</span>
            </div>
            {hasAchievements && (
                <>
                    <span className='visuallyhidden'>
                        {t('pages.experience.myExpertiseSection.achievementsListDescription')}
                    </span>
                    <ul className={styles['experience-achievements']}>
                        {achievements.map(({ title, url, badgeUrl }) => (
                            <li key={title}>
                                <Link
                                    className={styles['achievement-badge-link']}
                                    type='external'
                                    title={title}
                                    to={url}
                                >
                                    <img
                                        className={styles['achievement-badge-img']}
                                        src={badgeUrl}
                                        alt={`"${title}" ${t('common.badge')}`}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </li>
    );
};

export default memo(MyExpertise);
