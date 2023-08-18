import clsx from 'clsx';
import { useRef } from 'react';

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
    const currFocusedIndexRef = useRef(currentPageIndex);
    const pagesButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const getOnPageChange = (i: number) => () => {
        onPageChange(i);
    };

    const handleKeybordNavigation = (e: React.KeyboardEvent) => {
        if (!['ArrowLeft', 'ArrowRight', 'Tab'].includes(e.code)) {
            return;
        }

        if (e.code === 'Tab') {
            currFocusedIndexRef.current = currentPageIndex;
            return;
        }

        const offset = e.code === 'ArrowLeft' ? -1 : 1;
        currFocusedIndexRef.current = (currFocusedIndexRef.current + offset + count) % count;
        pagesButtonsRef.current[currFocusedIndexRef.current]?.focus();
    };

    return (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- Key down event delegation
        <ul className={styles['pagination']} aria-label={paginationTitle} onKeyDown={handleKeybordNavigation}>
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
                            ref={(el) => (pagesButtonsRef.current[i] = el)}
                            className={pageCn}
                            title={pageTitle}
                            onClick={getOnPageChange(i)}
                            aria-label={pageTitle}
                            aria-current={isCurrentPage}
                            aria-controls={ariaControls}
                            tabIndex={isCurrentPage ? 0 : -1}
                        ></button>
                    </li>
                );
            })}
        </ul>
    );
};

export default Pagination;
