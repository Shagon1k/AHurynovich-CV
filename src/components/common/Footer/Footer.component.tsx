import { memo } from 'react';

import { useTranslates } from '@reusables/custom-hooks';
import footerBgImg500Url from '@assets/images/footer/bg/footer-bg_500.webp';
import footerBgImg750Url from '@assets/images/footer/bg/footer-bg_750.webp';
import footerBgImg1000Url from '@assets/images/footer/bg/footer-bg_1000.webp';
import footerBgImgUrl from '@assets/images/footer/bg/footer-bg.webp';
import ContactForm from './components/ContactForm';
import Socials from './components/Socials';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    const { t } = useTranslates();
    return (
        <footer>
            <img
                className={styles['bg-image']}
                src={footerBgImgUrl}
                srcSet={`${footerBgImgUrl} 1200w, ${footerBgImg1000Url} 1024w, ${footerBgImg750Url} 768w, ${footerBgImg500Url} 500w`}
                width='1200'
                height='400'
                alt=''
                aria-hidden={true}
                loading='lazy'
                decoding='async'
            />
            <h1 className={styles['title']}>{t('footer.title')}</h1>
            <div className={styles['content']}>
                <ContactForm className={styles['contact-form']} />
                <Socials />
            </div>
            <div className={styles['copyright']}>
                {t('footer.copyright', { year: new Date().getFullYear() })}
            </div>
        </footer>
    );
};

export default memo(Footer);