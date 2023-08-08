import searchingYesImgUrl from './images/sfw_yes.svg?url';
import searchingNoImgUrl from './images/sfw_no.svg?url';
import { useTranslates } from '@reusables/custom-hooks';

import styles from './SearchingForWork.module.scss';

interface ISearchingForWorkProps {
    isSearchingForWork: boolean;
}

const SearchingForWork: React.FC<ISearchingForWorkProps> = ({ isSearchingForWork }) => {
    const { t } = useTranslates();
    const text = isSearchingForWork
        ? t('pages.main.aboutMeSection.searchingForWorkYes')
        : t('pages.main.aboutMeSection.searchingForWorkNo');
    const searchingImgUrl = isSearchingForWork ? searchingYesImgUrl : searchingNoImgUrl;
    const searchingImgDescription = isSearchingForWork
        ? t('pages.main.aboutMeSection.searchingForWorkLanternDescYes')
        : t('pages.main.aboutMeSection.searchingForWorkLanternDescNo');

    return (
        <div className={styles['container']}>
            <img className={styles['searching-image']} src={searchingImgUrl} alt={searchingImgDescription} />
            <div className={styles['searching-text-wrapper']}>
                <span id='searching-text' className={styles['searching-text']}>
                    {text}
                </span>
            </div>
        </div>
    );
};

export default SearchingForWork;
