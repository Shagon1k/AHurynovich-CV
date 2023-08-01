import { memo } from 'react';

import { useTranslates } from '@reusables/custom-hooks';
import Section from '@components/base/Section';
import Icon, { type IIconName } from '@components/base/Icon';

import styles from './FiveReasons.module.scss';

export type IFiveReasons = { name: string; iconName: IIconName; description: string }[];

interface IFiveReasonsProps {
    fiveReasonsData: IFiveReasons;
}

const FiveReasons: React.FC<IFiveReasonsProps> = ({ fiveReasonsData }) => {
    const { t } = useTranslates();

    return (
        <Section
            id='five-reasons-to-work'
            className={styles['section']}
            title={t('pages.main.fiveReasonsSection.title')}
        >
            <ul className={styles['reasons-list']}>
                {fiveReasonsData.map(({ name, iconName, description }) => (
                    <li key={name} className={styles['reasons-item']}>
                        <Icon name={iconName} size='xl' />
                        <h2 className={styles['reason-name']}>{name}</h2>
                        <p className={styles['reason-description']}>{description}</p>
                    </li>
                ))}
            </ul>
        </Section>
    );
};

export default memo(FiveReasons);
