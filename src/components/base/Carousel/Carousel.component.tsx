import clsx from 'clsx';
import {
    useState,
    useCallback,
    useRef,
    Children,
    memo,
    type PropsWithChildren as IPropsWithChildren,
} from 'react';

import { useTranslates } from '@reusables/custom-hooks';
import ArrowButton from '@components/base/ArrowButton';
import Pagination from './components/Pagination';

import styles from './Carousel.module.scss';

const PAGE_TOUCH_DELTA_THRESHOLD = 40;

interface ICarouselProps extends IPropsWithChildren {
    withPagination?: boolean;
    withInfiniteLoop?: boolean;
    titlesConfig?: {
        carousel: string;
        prevButton: string;
        nextButton: string;
        pagination?: string;
        pagePrefix?: string;
    };
    onSlideChange?: () => void;
}

const Carousel: React.FC<ICarouselProps> = ({
    withPagination = true,
    withInfiniteLoop = false,
    titlesConfig,
    children,
    onSlideChange,
}) => {
    const { t } = useTranslates();
    const touchStartXPosRef = useRef<number | null>(null);
    const firstItemIndex = 0;
    const lastItemIndex = Children.count(children) - 1;

    // Pagination
    const [currentPageIndex, setCurrentPageIndex] = useState(firstItemIndex);
    const handleNextPage = useCallback(() => {
        setCurrentPageIndex((currentPageIndex) =>
            currentPageIndex !== lastItemIndex ? currentPageIndex + 1 : firstItemIndex
        );
        onSlideChange?.();
    }, [lastItemIndex, onSlideChange]);
    const handlePrevPage = useCallback(() => {
        setCurrentPageIndex((currentPageIndex) =>
            currentPageIndex !== firstItemIndex ? currentPageIndex - 1 : lastItemIndex
        );
        onSlideChange?.();
    }, [lastItemIndex, onSlideChange]);
    const handlePageChange = useCallback(
        (pageNumber: number) => {
            setCurrentPageIndex(pageNumber);
            onSlideChange?.();
        },
        [onSlideChange]
    );

    //Touch
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartXPosRef.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        const touchStartXPos = touchStartXPosRef.current;
        if (typeof touchStartXPos !== 'number' || !Number.isFinite(touchStartXPos)) return;

        const touchDelta = e.changedTouches[0].clientX - touchStartXPos;
        if (
            touchDelta > PAGE_TOUCH_DELTA_THRESHOLD &&
            (withInfiniteLoop || currentPageIndex !== firstItemIndex)
        ) {
            handlePrevPage();
        } else if (
            touchDelta < -PAGE_TOUCH_DELTA_THRESHOLD &&
            (withInfiniteLoop || currentPageIndex !== lastItemIndex)
        ) {
            handleNextPage();
        }

        touchStartXPosRef.current = null;
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
                    title={prevButtonTitle}
                    direction='left'
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
                    title={nextButtonTitle}
                    direction='right'
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
