import { useTranslates } from '@reusables/custom-hooks';
import TeddyBearSVG from './images/teddy-bear.svg';

import styles from './PageUnderConstruction.module.scss';

const PageUnderConstruction: React.FC = () => {
    const { t } = useTranslates();

    return (
        <div className={styles['page-under-construction']}>
            <TeddyBearSVG
                className={styles['teddy-bear']}
                title={t('pageUnderConstruction.imageTitle')}
                aria-label={t('pageUnderConstruction.imageTitle')}
            />
            <h1 className={styles['heading-text']}>{t('pageUnderConstruction.heading')}</h1>
            <span className={styles['info-text']}>{t('pageUnderConstruction.info')}</span>
        </div>
    );
};

export default PageUnderConstruction;
