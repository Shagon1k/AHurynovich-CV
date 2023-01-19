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
    skillsListData: ISkillsList;
}

const MySkills: React.FC<IMySkillsProps> = ({ skillsListData }) => {
    const { t } = useTranslates();

    return (
        <Section
            contentClassName={styles['container']}
            title={t('pages.main.mySkillsSection.title')}
            withMargin={false}
        >
            <ul className={styles['skills-list']}>
                <li className={styles['airship-wrapper']} aria-hidden={true}>
                    <AirshipSVG className={styles['airship']} />
                </li>
                {skillsListData.map(({ name, iconName }) => (
                    <li key={name} className={styles['skills-item']}>
                        <FlagSVG className={styles['flag']} aria-hidden={true} />
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
            <p className={styles['find-more-note']}>
                {t('pages.main.mySkillsSection.findMore')}
                {<Link to={ROUTES_CONFIG.experience.path}>{t('header.navigation.experienceLinkTitle')}</Link>}
            </p>
        </Section>
    );
};

export default memo(MySkills);
