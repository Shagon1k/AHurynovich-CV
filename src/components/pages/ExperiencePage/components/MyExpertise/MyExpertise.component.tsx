import { memo } from 'react';
import { useSelector } from 'react-redux';

import { BP } from '@config/application';
import { selectAppBreakpoint } from '@slices/app-info/app-info.selector';
import { useTranslates } from '@reusables/custom-hooks';
import Section from '@components/base/Section';
import Icon, { type IIconName } from '@components/base/Icon';
import { hashCode } from '@utils/strings';
import batteryLevelImgUrl from '@assets/images/sections/my-expertise/battery-level.svg?url';

import styles from './MyExpertise.module.scss';

export type IExperiencesList = { name: string; level: number; description: string; iconName: IIconName }[];

interface IMyExpertiseProps {
    myExperienceData: IExperiencesList;
}

const MAX_LEVEL = 4;

const MyExpertise: React.FC<IMyExpertiseProps> = ({ myExperienceData }) => {
    const { t } = useTranslates();

    return (
        <Section
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

const MyExpertiseItem: React.FC<IMyExpertiseItemProps> = ({ name, description, level, iconName }) => {
    const { t } = useTranslates();
    const breakpointName = useSelector(selectAppBreakpoint) || '';
    const iconSize = [BP.XS, BP.S].includes(breakpointName) ? 'm' : 'l';

    const levelDescription = t(
        `pages.experience.myExpertiseSection.levelToDescription.${Math.min(level, MAX_LEVEL)}`
    );
    return (
        <li className={styles['experiences-item']}>
            <div className={styles['experience-tv-wrapper']}>
                <h2 className={styles['experience-title']}>{name}</h2>
                <div className={styles['experience-tv']}>
                    <Icon className={styles['experience-tv-skill-icon']} name={iconName} size={iconSize} />
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
        </li>
    );
};

export default memo(MyExpertise);
