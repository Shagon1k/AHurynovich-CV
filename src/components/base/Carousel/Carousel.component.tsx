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
        carousel: string;
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
        carousel: carouselTitle = t('carousel.title'),
        prevButton: prevButtonTitle = t('carousel.previous'),
        nextButton: nextButtonTitle = t('carousel.next'),
        pagination: paginationTitle = t('carousel.paginationTitle'),
        pagePrefix: pageTitlePrefix = t('carousel.pageTitlePrefix'),
    } = titlesConfig || {};

    return (
        <section className={cn} aria-labelledby='carouselHeading'>
            <h2 id='carouselHeading' className='visuallyhidden'>
                {carouselTitle}
            </h2>
            <p className='visuallyhidden'>{t('carousel.description')}</p>
            {withPagination && (
                <Pagination
                    className={styles['pagination']}
                    count={Children.count(children)}
                    currentPageIndex={currentPageIndex}
                    paginationTitle={paginationTitle}
                    pageTitlePrefix={pageTitlePrefix}
                    onPageChange={handlePageChange}
                    ariaControls='slides'
                />
            )}
            <div className={`${styles['arrow-btn']} ${styles['m-left']}`}>
                <ArrowButton
                    title={prevButtonTitle}
                    direction='left'
                    isDisabled={currentPageIndex === 0}
                    onClick={handlePrevPage}
                    ariaControls='slides'
                />
            </div>
            <ul id='slides' className={styles['slides']}>
                {Children.map(children, (slideInner, i) => {
                    const isCurrentSlide = i === currentPageIndex;
                    const slideCn = clsx({
                        [styles['slide']]: true,
                        [styles['m-visible']]: isCurrentSlide,
                    });

                    return (
                        <li className={slideCn} aria-hidden={!isCurrentSlide} role='group'>
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
                    ariaControls='slides'
                />
            </div>
            <div className='visuallyhidden' aria-live='polite' aria-atomic={true}>
                {t('carousel.itemNumberText', {
                    current: currentPageIndex + 1,
                    total: Children.count(children),
                })}
            </div>
        </section>
    );
};

export default memo(Carousel);
