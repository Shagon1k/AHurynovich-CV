import { memo } from 'react';
import { useSelector } from 'react-redux';
import sanitizeHTML from 'sanitize-html';

import Section from '@components/base/Section';
import { useTranslates } from '@reusables/custom-hooks';
import { selectIsDesktop } from '@slices/app-info/app-info.selector';

import SearchingForWork from './components/SearchingForWork';
import aboutMePhotoUrl from './images/my-photo.webp';

import styles from './AboutMe.module.scss';

interface IAboutMeProps {
    isSearchingForWork: boolean;
    aboutMeMarkup: string;
}

const AboutMe: React.FC<IAboutMeProps> = ({ isSearchingForWork, aboutMeMarkup }) => {
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
            <div className={styles['text']}>
                <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(aboutMeMarkup) }} />
                {!isDesktop && <div className={styles['searching-text']}>{searchingText}</div>}
            </div>
            <img
                className={styles['photo']}
                src={aboutMePhotoUrl}
                alt={t('pages.main.aboutMeSection.photoDescription')}
            />
        </Section>
    );
};

export default memo(AboutMe);
