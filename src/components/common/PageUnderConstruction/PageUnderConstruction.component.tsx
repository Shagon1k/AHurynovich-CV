import { useTranslates } from '@reusables/custom-hooks';

import teddyBearImgUrl from './images/teddy-bear.svg?url';

import styles from './PageUnderConstruction.module.scss';

const PageUnderConstruction: React.FC = () => {
    const { t } = useTranslates();

    return (
        <div className={styles['page-under-construction']}>
            <h1 className={styles['heading-text']}>{t('pageUnderConstruction.heading')}</h1>
            <img
                className={styles['teddy-bear']}
                src={teddyBearImgUrl}
                alt={t('pageUnderConstruction.imageTitle')}
            />
            <span className={styles['info-text']}>{t('pageUnderConstruction.info')}</span>
        </div>
    );
};

export default PageUnderConstruction;
