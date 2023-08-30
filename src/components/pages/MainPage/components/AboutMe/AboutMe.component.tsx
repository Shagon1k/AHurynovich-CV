import { memo } from 'react';
import { useSelector } from 'react-redux';

import Section from '@components/base/Section';
import { useTranslates } from '@reusables/custom-hooks';
import { selectIsDesktop } from '@slices/app-info/app-info.selector';

import SearchingForWork from './components/SearchingForWork';
import aboutMePhotoUrl from './images/my-photo.webp';

import styles from './AboutMe.module.scss';

interface IAboutMeProps {
    isSearchingForWork: boolean;
    aboutMeText: string;
}

const AboutMe: React.FC<IAboutMeProps> = ({ isSearchingForWork, aboutMeText }) => {
    const isDesktop = useSelector(selectIsDesktop);
    const { t } = useTranslates();
    const searchingText = isSearchingForWork
        ? t('pages.main.aboutMeSection.searchingForWorkYes')
        : t('pages.main.aboutMeSection.searchingForWorkNo');

    return (
        <Section
            modifiers={{ withSideMargin: false }}
            id='about-me'
            contentClassName={styles['content-container']}
            title={t('pages.main.aboutMeSection.title')}
            showTitle={false}
        >
            {isDesktop && (
                <div className={styles['searching']}>
                    <SearchingForWork isSearchingForWork={isSearchingForWork} />
                </div>
            )}
            <p className={styles['text']}>
                {aboutMeText}
                {!isDesktop && <div className={styles['searching-text']}>{searchingText}</div>}
            </p>
            <img
                className={styles['photo']}
                src={aboutMePhotoUrl}
                alt={t('pages.main.aboutMeSection.photoDescription')}
            />
        </Section>
    );
};

export default memo(AboutMe);
