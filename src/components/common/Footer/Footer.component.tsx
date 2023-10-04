import { memo } from 'react';

import Link from '@components/base/Link';
import AccessibilityStatementButton from '@components/common/AccessibilityStatementButton';
import { useTranslates, useSkipToContent } from '@reusables/custom-hooks';

import ContactForm from './components/ContactForm';
import Socials from './components/Socials';
import footerBgImgUrl from './images/footer-bg.webp';
import footerBgImg500Url from './images/footer-bg_500.webp';
import footerBgImg750Url from './images/footer-bg_750.webp';
import footerBgImg1000Url from './images/footer-bg_1000.webp';

import styles from './Footer.module.scss';

const SKIP_TO_ID = 'contact-me';

interface IFooterProps {
    sourceCodeUrl: string;
}

const Footer: React.FC<IFooterProps> = ({ sourceCodeUrl }) => {
    const { t } = useTranslates();
    const title = t('footer.title');

    useSkipToContent(SKIP_TO_ID, title, 0);

    return (
        <footer id={SKIP_TO_ID}>
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
                <div className={styles['contact-form']}>
                    <ContactForm />
                </div>
                <Socials />
            </div>
            <div className={styles['meta']}>
                <ul className={styles['meta-list']}>
                    <li className={styles['meta-item']}>
                        <AccessibilityStatementButton className={styles['meta-item-content']} />
                    </li>
                    <li className={styles['meta-item']}>
                        <Link type='external' to={sourceCodeUrl} className={styles['meta-item-content']}>
                            {t('footer.projectSourceCode')}
                        </Link>
                    </li>
                </ul>
                <div className={styles['copyright']}>
                    {t('footer.copyright', { year: new Date().getFullYear() })}
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);
