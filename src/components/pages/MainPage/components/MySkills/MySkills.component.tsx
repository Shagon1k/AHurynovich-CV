import { memo } from 'react';

import { useTranslates } from '@reusables/custom-hooks';
import Section from '@components/base/Section';
import Icon, { type IIconName } from '@components/base/Icon';
import Link from '@components/base/Link';
import { ROUTES_CONFIG } from '@components/routes/routes.config';
import AirshipSVG from '@assets/images/my-skills/airship.svg';
import FlagSVG from '@assets/images/my-skills/flag.svg';

import styles from './MySkills.module.scss';

export type ISkillsList = { name: string; iconName: IIconName }[];

interface IMySkillsProps {
    skillsList: ISkillsList;
}

const MySkills: React.FC<IMySkillsProps> = ({ skillsList }) => {
    const { t } = useTranslates();

    return (
        <Section contentClassName={styles['container']} title={t('pages.main.mySkillsSection.title')}>
            <ul className={styles['skills-container']}>
                <li className={styles['airship-wrapper']} aria-hidden={true}>
                    <AirshipSVG className={styles['airship']} />
                </li>
                {skillsList.map(({ name, iconName }) => (
                    <li key={iconName} className={styles['flag-wrapper']}>
                        <FlagSVG className={styles['flag']} />
                        <Icon
                            className={styles['flag-icon']}
                            name={iconName}
                            size='m'
                            isDecorative={false}
                            title={name}
                        />
                    </li>
                ))}
            </ul>
            <span className={styles['find-more-note']}>
                {t('pages.main.mySkillsSection.findMore')}
                {<Link to={ROUTES_CONFIG.experience.path}>{t('header.navigation.experienceLinkTitle')}</Link>}
            </span>
        </Section>
    );
};

export default memo(MySkills);
