import clsx from 'clsx';
import { useEffect, useRef } from 'react';

import { hashCode } from '@utils/strings';

import styles from './Pagination.module.scss';

const FOCUS_OUTLINE_OFFSET = 3;

const keepPageButtonVisible = (pagination: HTMLUListElement, pageButton: HTMLButtonElement) => {
    const paginationRect = pagination.getBoundingClientRect();
    const pageButtonRect = pageButton.getBoundingClientRect();
    const visibleLeft = paginationRect.left + FOCUS_OUTLINE_OFFSET;
    const visibleRight = paginationRect.right - FOCUS_OUTLINE_OFFSET;

    if (pageButtonRect.left < visibleLeft) {
        pagination.scrollLeft -= visibleLeft - pageButtonRect.left;
    } else if (pageButtonRect.right > visibleRight) {
        pagination.scrollLeft += pageButtonRect.right - visibleRight;
    }
};

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
    const paginationRef = useRef<HTMLUListElement | null>(null);
    const currFocusedIndexRef = useRef(currentPageIndex);
    const pagesButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const getOnPageChange = (i: number) => () => {
        onPageChange(i);
    };

    useEffect(() => {
        const pagination = paginationRef.current;
        const currentPageButton = pagesButtonsRef.current[currentPageIndex];

        if (!pagination || !currentPageButton) return;

        keepPageButtonVisible(pagination, currentPageButton);
    }, [currentPageIndex]);

    const handleKeybordNavigation = (e: React.KeyboardEvent) => {
        if (!['ArrowLeft', 'ArrowRight', 'Tab'].includes(e.code)) {
            return;
        }

        if (e.code === 'Tab') {
            currFocusedIndexRef.current = currentPageIndex;
            return;
        }

        e.preventDefault();
        const offset = e.code === 'ArrowLeft' ? -1 : 1;
        currFocusedIndexRef.current = (currFocusedIndexRef.current + offset + count) % count;
        const focusedPageButton = pagesButtonsRef.current[currFocusedIndexRef.current];
        const pagination = paginationRef.current;

        focusedPageButton?.focus({ preventScroll: true });

        if (pagination && focusedPageButton) {
            keepPageButtonVisible(pagination, focusedPageButton);
        }
    };

    return (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- Key down event delegation
        <ul
            ref={paginationRef}
            className={styles['pagination']}
            aria-label={paginationTitle}
            onKeyDown={handleKeybordNavigation}
        >
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
