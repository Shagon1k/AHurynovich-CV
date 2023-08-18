import { memo } from 'react';

import Icon, { type IIconName } from '@components/base/Icon';
import Link from '@components/base/Link';
import Section from '@components/base/Section';
import { ROUTES_CONFIG } from '@components/routes/routes.config';
import { useTranslates } from '@reusables/custom-hooks';

import airshipImgUrl from './images/airship.svg?url';
import flagImgUrl from './images/flag.svg?url';

import styles from './MySkills.module.scss';

export type ISkillsList = { name: string; iconName: IIconName }[];

interface IMySkillsProps {
    skillsListData: ISkillsList;
}

const MySkills: React.FC<IMySkillsProps> = ({ skillsListData }) => {
    const { t } = useTranslates();

    return (
        <Section
            modifiers={{ withSideMargin: false }}
            id='my-skills'
            contentClassName={styles['content-container']}
            title={t('pages.main.mySkillsSection.title')}
        >
            <ul className={styles['skills-list']}>
                <li className={styles['airship-wrapper']}>
                    <img className={styles['airship']} src={airshipImgUrl} alt='' aria-hidden={true} />
                </li>
                {skillsListData.map(({ name, iconName }) => (
                    <li key={name} className={styles['skills-item']}>
                        <img className={styles['flag']} src={flagImgUrl} alt='' aria-hidden={true} />
                        <div className={styles['flag-icon']}>
                            <Icon name={iconName} size='m' isDecorative={false} title={name} />
                        </div>
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
