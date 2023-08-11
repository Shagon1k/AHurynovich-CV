import clsx from 'clsx';
import { useState, useEffect, useCallback, useRef, Children, memo } from 'react';

import { useTranslates } from '@reusables/custom-hooks';
import ArrowButton from '@components/base/ArrowButton';
import Pagination from './components/Pagination';

import styles from './Carousel.module.scss';

const PAGE_TOUCH_VERTICAL_CHANGE_BAN_THRESHOLD = 50;
const PAGE_TOUCH_HORIZONTAL_CHANGE_THRESHOLD = 60;

interface ICarouselProps extends React.PropsWithChildren {
    withPagination?: boolean;
    withInfiniteLoop?: boolean;
    titlesConfig?: {
        carousel: string;
        prevButton: string;
        nextButton: string;
        pagination?: string;
        pagePrefix?: string;
    };
    onSlideChange?: (currentPageIndex?: number) => void;
}

const Carousel: React.FC<ICarouselProps> = ({
    withPagination = true,
    withInfiniteLoop = false,
    titlesConfig,
    children,
    onSlideChange,
}) => {
    const { t } = useTranslates();
    const touchStartPosRef = useRef<{
        x: number | null;
        y: number | null;
    }>({
        x: null,
        y: null,
    });
    const isFirstRender = useRef(true);
    const firstItemIndex = 0;
    const lastItemIndex = Children.count(children) - 1;

    // Pagination
    const [currentPageIndex, setCurrentPageIndex] = useState(firstItemIndex);
    const handleNextPage = useCallback(() => {
        setCurrentPageIndex((currentPageIndex) =>
            currentPageIndex !== lastItemIndex ? currentPageIndex + 1 : firstItemIndex
        );
    }, [lastItemIndex]);
    const handlePrevPage = useCallback(() => {
        setCurrentPageIndex((currentPageIndex) =>
            currentPageIndex !== firstItemIndex ? currentPageIndex - 1 : lastItemIndex
        );
    }, [lastItemIndex]);
    const handlePageChange = useCallback((pageNumber: number) => {
        setCurrentPageIndex(pageNumber);
    }, []);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        onSlideChange?.(currentPageIndex);
    }, [onSlideChange, currentPageIndex]);

    //Touch
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartPosRef.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
        };
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        const { x: touchStartX, y: touchStartY } = touchStartPosRef.current;
        if (typeof touchStartX !== 'number' || typeof touchStartY !== 'number') return;

        const touchXDelta = e.changedTouches[0].clientX - touchStartX;
        const touchYDelta = e.changedTouches[0].clientY - touchStartY;

        touchStartPosRef.current = {
            x: null,
            y: null,
        };

        // Skip page change if vertical based manipulation detected (e.g. scroll)
        if (Math.abs(touchYDelta) > PAGE_TOUCH_VERTICAL_CHANGE_BAN_THRESHOLD) {
            return;
        }

        if (
            touchXDelta > PAGE_TOUCH_HORIZONTAL_CHANGE_THRESHOLD &&
            (withInfiniteLoop || currentPageIndex !== firstItemIndex)
        ) {
            handlePrevPage();
        } else if (
            touchXDelta < -PAGE_TOUCH_HORIZONTAL_CHANGE_THRESHOLD &&
            (withInfiniteLoop || currentPageIndex !== lastItemIndex)
        ) {
            handleNextPage();
        }
    };

    const {
        carousel: carouselTitle = t('carousel.title'),
        prevButton: prevButtonTitle = t('carousel.previous'),
        nextButton: nextButtonTitle = t('carousel.next'),
        pagination: paginationTitle = t('carousel.paginationTitle'),
        pagePrefix: pageTitlePrefix = t('carousel.pageTitlePrefix'),
    } = titlesConfig || {};

    return (
        <section className={styles['carousel']} aria-labelledby='carouselHeading'>
            <h2 id='carouselHeading' className='visuallyhidden'>
                {carouselTitle}
            </h2>
            <p className='visuallyhidden'>{t('carousel.description')}</p>
            <ul
                id='slides'
                className={styles['slides']}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
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
            <div className={styles['navigation']}>
                <ArrowButton
                    modifiers={{ direction: 'left' }}
                    title={prevButtonTitle}
                    isDisabled={!withInfiniteLoop ? currentPageIndex === firstItemIndex : false}
                    onClick={handlePrevPage}
                    ariaControls='slides'
                />
                {withPagination && (
                    <Pagination
                        count={Children.count(children)}
                        currentPageIndex={currentPageIndex}
                        paginationTitle={paginationTitle}
                        pageTitlePrefix={pageTitlePrefix}
                        onPageChange={handlePageChange}
                        ariaControls='slides'
                    />
                )}
                <ArrowButton
                    modifiers={{ direction: 'right' }}
                    title={nextButtonTitle}
                    isDisabled={!withInfiniteLoop ? currentPageIndex === lastItemIndex : false}
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
