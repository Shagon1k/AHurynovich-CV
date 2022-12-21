import clsx from 'clsx';

import searchingYesImgUrl from '@assets/images/about-me/sfw_yes.svg?url';
import searchingNoImgUrl from '@assets/images/about-me/sfw_no.svg?url';
import { useTranslates } from '@reusables/custom-hooks';

import styles from './SearchingForWork.module.scss';

interface ISearchingForWorkProps {
    className?: string;
    isSearchingForWork: boolean;
}

const SearchingForWork: React.FC<ISearchingForWorkProps> = ({ isSearchingForWork, className = '' }) => {
    const containerCn = clsx({
        [className]: Boolean(className),
        [styles['searching-container']]: true,
    });
    const { t } = useTranslates();
    const text = isSearchingForWork
        ? t('pages.main.aboutMeSection.searchingForWorkYes')
        : t('pages.main.aboutMeSection.searchingForWorkNo');
    const searchingImgUrl = isSearchingForWork ? searchingYesImgUrl : searchingNoImgUrl;
    const searchingImgDescription = isSearchingForWork
        ? t('pages.main.aboutMeSection.searchingForWorkLanternDescYes')
        : t('pages.main.aboutMeSection.searchingForWorkLanternDescNo');

    return (
        <div className={containerCn}>
            <img
                className={styles['searching-image']}
                src={searchingImgUrl}
                alt={searchingImgDescription}
                aria-describedby='searching-description'
            />
            <div className={styles['searching-text-container']}>
                <span id='searching-text' className={styles['searching-text']}>
                    {text}
                </span>
            </div>
        </div>
    );
};

export default SearchingForWork;
