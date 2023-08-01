import { memo } from 'react';
import { useLocation } from 'react-router-dom';

import { useTranslates } from '@reusables/custom-hooks';
import { type ISkipToContentLink } from '@reusables/skip-to-content.context';
import Link from '@components/base/Link';

import styles from './SkipToContent.module.scss';

interface ISkipToContentProps {
    links: ISkipToContentLink[];
}

const SkipToContent: React.FC<ISkipToContentProps> = ({ links }) => {
    const { t } = useTranslates();
    const { pathname } = useLocation();

    return (
        <div className={styles['skip-to-content']}>
            <ul>
                {links.map(({ title, id }) => (
                    <li key={id} className={styles['skip-links-item']}>
                        <Link type='simple' to={`${pathname}#${id}`}>
                            {t('header.skipToContent', { title })}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

SkipToContent.displayName = 'SkipToContent';

export default memo(SkipToContent);
