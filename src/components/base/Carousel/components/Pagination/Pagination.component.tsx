import clsx from 'clsx';
import { hashCode } from '@utils/strings';

import styles from './Pagination.module.scss';

interface IPaginationProps {
    className?: string;
    count: number;
    currentPageIndex: number;
    paginationTitle: string;
    pageTitlePrefix: string;
    onPageChange: (pageIndex: number) => void;
}

const Pagination: React.FC<IPaginationProps> = ({
    className = '',
    count,
    currentPageIndex,
    paginationTitle,
    pageTitlePrefix,
    onPageChange,
}) => {
    const cn = clsx({
        [className]: Boolean(className),
        [styles['pagination']]: true,
    });

    const getOnPageChange = (i: number) => () => {
        onPageChange(i);
    };

    return (
        <ul className={cn} aria-label={paginationTitle}>
            {Array.from({ length: count }).map((_, i) => {
                const pageCn = clsx({
                    [styles['page']]: true,
                    [styles['m-current']]: i === currentPageIndex,
                });
                const pageTitle = `${pageTitlePrefix} ${i + 1}`;
                const pageKey = hashCode(pageTitle);

                return (
                    <li className={styles['page-wrapper']} key={pageKey}>
                        <button
                            className={pageCn}
                            title={pageTitle}
                            aria-label={pageTitle}
                            onClick={getOnPageChange(i)}
                        ></button>
                    </li>
                );
            })}
        </ul>
    );
};

export default Pagination;
