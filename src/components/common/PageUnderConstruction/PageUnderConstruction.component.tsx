import { useTranslates } from '@reusables/custom-hooks';

import teddyBearImgUrl from './images/teddy-bear.svg?url';

import styles from './PageUnderConstruction.module.scss';

const PageUnderConstruction: React.FC = () => {
    const { t } = useTranslates();

    return (
        <div className={styles['page-under-construction']}>
            <img
                className={styles['teddy-bear']}
                src={teddyBearImgUrl}
                alt={t('pageUnderConstruction.imageTitle')}
            />
            <h1 className={styles['heading-text']}>{t('pageUnderConstruction.heading')}</h1>
            <span className={styles['info-text']}>{t('pageUnderConstruction.info')}</span>
        </div>
    );
};

export default PageUnderConstruction;
