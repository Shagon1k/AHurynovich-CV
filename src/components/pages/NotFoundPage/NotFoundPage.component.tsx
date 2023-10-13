import { useTranslates } from '@reusables/custom-hooks';

import yodaWithGlassesImgUrl from './images/yoda-with-glasses.svg?url';

import styles from './NotFoundPage.module.scss';

const NotFoundPage: React.FC = () => {
    const { t } = useTranslates();

    return (
        <div className={styles['not-found-page']}>
            <h1 className={styles['heading-text']}>{t('pages.notFound.mainSection.heading')}</h1>
            <img
                className={styles['yoda-with-glasses']}
                src={yodaWithGlassesImgUrl}
                alt={t('pages.notFound.mainSection.imageTitle')}
            />
            <span className={styles['info-text']}>{t('pages.notFound.mainSection.info')}</span>
            <span className={styles['joke-text']}>{t('pages.notFound.mainSection.joke')}</span>
        </div>
    );
};

export default NotFoundPage;
