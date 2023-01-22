import clsx from 'clsx';
import { useState, useCallback, Children, memo, type PropsWithChildren as IPropsWithChildren } from 'react';

import { useTranslates } from '@reusables/custom-hooks';
import ArrowButton from '@components/base/ArrowButton';
import Pagination from './components/Pagination';

import styles from './Carousel.module.scss';

interface ICarouselProps extends IPropsWithChildren {
    className?: string;
    withPagination?: boolean;
    titlesConfig?: {
        prevButton: string;
        nextButton: string;
        pagination: string;
        pagePrefix: string;
    };
}

const Carousel: React.FC<ICarouselProps> = ({
    className = '',
    withPagination = true,
    titlesConfig,
    children,
}) => {
    const cn = clsx({
        [className]: Boolean(className),
        [styles['carousel']]: true,
        [styles['m-with-pagination']]: withPagination,
    });
    const { t } = useTranslates();

    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const handleNextPage = useCallback(() => {
        setCurrentPageIndex((currentPageIndex) => currentPageIndex + 1);
    }, []);
    const handlePrevPage = useCallback(() => {
        setCurrentPageIndex((currentPageIndex) => currentPageIndex - 1);
    }, []);
    const handlePageChange = useCallback((pageNumber: number) => {
        setCurrentPageIndex(pageNumber);
    }, []);

    const {
        prevButton: prevButtonTitle = t('carousel.previous'),
        nextButton: nextButtonTitle = t('carousel.next'),
        pagination: paginationTitle = t('carousel.paginationTitle'),
        pagePrefix: pageTitlePrefix = t('carousel.pageTitlePrefix'),
    } = titlesConfig || {};

    return (
        <div className={cn}>
            {withPagination && (
                <Pagination
                    className={styles['pagination']}
                    count={Children.count(children)}
                    currentPageIndex={currentPageIndex}
                    paginationTitle={paginationTitle}
                    pageTitlePrefix={pageTitlePrefix}
                    onPageChange={handlePageChange}
                />
            )}
            <div className={`${styles['arrow-btn']} ${styles['m-left']}`}>
                <ArrowButton
                    title={prevButtonTitle}
                    direction='left'
                    isDisabled={currentPageIndex === 0}
                    onClick={handlePrevPage}
                />
            </div>
            <ul className={styles['slides']}>
                {Children.map(children, (slideInner, i) => {
                    const isCurrentSlide = i === currentPageIndex;
                    const slideCn = clsx({
                        [styles['slide']]: true,
                        [styles['m-visible']]: isCurrentSlide,
                    });

                    return (
                        <li className={slideCn} aria-hidden={!isCurrentSlide}>
                            {slideInner}
                        </li>
                    );
                })}
            </ul>
            <div className={`${styles['arrow-btn']} ${styles['m-right']}`}>
                <ArrowButton
                    title={nextButtonTitle}
                    direction='right'
                    isDisabled={currentPageIndex === Children.count(children) - 1}
                    onClick={handleNextPage}
                />
            </div>
        </div>
    );
};

export default memo(Carousel);
