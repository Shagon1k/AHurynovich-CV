import { memo } from 'react';

import { useTranslates } from '@reusables/custom-hooks';
import Section from '@components/base/Section';
import { hashCode } from '@utils/strings';

import styles from './PastProjects.module.scss';

export type IPastProjectsList = { title: string; description: string; imgUrl: string }[];

interface IPastProjectsProps {
    pastProjectsData: IPastProjectsList;
}

const PastProjects: React.FC<IPastProjectsProps> = ({ pastProjectsData }) => {
    const { t } = useTranslates();

    return (
        <Section id='past-projects' title={t('pages.experience.pastProjectsSection.title')}>
            <ul className={styles['projects-list']}>
                {pastProjectsData.map((itemData) => (
                    <PastProjectItem
                        key={hashCode(`${itemData.title}${itemData.description}`)}
                        {...itemData}
                    />
                ))}
            </ul>
        </Section>
    );
};

type IPastProjectItemProps = IPastProjectsList[number];

const PastProjectItem: React.FC<IPastProjectItemProps> = ({ title, description, imgUrl }) => {
    const { t } = useTranslates();

    return (
        <li className={styles['projects-item']}>
            <div className={styles['project-card']}>
                <img
                    className={styles['project-card-logo']}
                    src={imgUrl}
                    alt={`${title} ${t('common.logo')}`}
                />
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- add ability to navigate with keyboard to reveal card content */}
                <div className={styles['project-card-content']} tabIndex={0}>
                    <h2 className={styles['project-card-title']}>{title}</h2>
                    <p className={styles['project-card-description']}>{description}</p>
                </div>
            </div>
        </li>
    );
};

export default memo(PastProjects);
