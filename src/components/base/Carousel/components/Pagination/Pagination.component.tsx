import clsx from 'clsx';
import { hashCode } from '@utils/strings';

import styles from './Pagination.module.scss';

interface IPaginationProps {
    count: number;
    currentPageIndex: number;
    paginationTitle: string;
    pageTitlePrefix: string;
    onPageChange: (pageIndex: number) => void;
    ariaControls: string;
}

const Pagination: React.FC<IPaginationProps> = ({
    count,
    currentPageIndex,
    paginationTitle,
    pageTitlePrefix,
    onPageChange,
    ariaControls,
}) => {
    const getOnPageChange = (i: number) => () => {
        onPageChange(i);
    };

    return (
        <ul className={styles['pagination']} aria-label={paginationTitle}>
            {Array.from({ length: count }).map((_, i) => {
                const isCurrentPage = i === currentPageIndex;
                const pageCn = clsx({
                    [styles['page']]: true,
                    [styles['m-current']]: isCurrentPage,
                });
                const pageTitle = `${pageTitlePrefix} ${i + 1}`;
                const pageKey = hashCode(pageTitle);

                return (
                    <li className={styles['page-wrapper']} key={pageKey}>
                        <button
                            className={pageCn}
                            title={pageTitle}
                            onClick={getOnPageChange(i)}
                            aria-label={pageTitle}
                            aria-current={isCurrentPage}
                            aria-controls={ariaControls}
                        ></button>
                    </li>
                );
            })}
        </ul>
    );
};

export default Pagination;
