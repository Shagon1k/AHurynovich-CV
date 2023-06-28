import clsx from 'clsx';
import { memo, useCallback, useState } from 'react';

import { useTranslates } from '@reusables/custom-hooks';
import Section from '@components/base/Section';
import Carousel, { SLIDE_CHANGE_ANIMATION_TIME } from '@components/base/Carousel';
import { hashCode } from '@utils/strings';
import watcherImgUrl from '@assets/images/sections/career-flow/watcher.svg?url';
import projectorSideImgUrl from '@assets/images/sections/career-flow/projector_side.svg?url';
import projectorLightImgUrl from '@assets/images/sections/career-flow/projector-light.svg?url';

import styles from './CareerFlow.module.scss';

export type ICareerFlow = { title: string; date: string; description: string }[];

interface ICareerFlowProps {
    careerFlowData: ICareerFlow;
}

const CareerFlow: React.FC<ICareerFlowProps> = ({ careerFlowData }) => {
    const { t } = useTranslates();
    const [shouldLightAnimate, setShouldLightAnimate] = useState(false);

    const handleSlideChange = useCallback(() => {
        setShouldLightAnimate(true);

        setTimeout(() => {
            setShouldLightAnimate(false);
        }, SLIDE_CHANGE_ANIMATION_TIME);
    }, []);

    const careerFlowCn = clsx({
        [styles['career-flow']]: true,
        [styles['m-animate']]: shouldLightAnimate,
    });

    const lightCn = clsx({
        [styles['light']]: true,
        [styles['m-animate']]: shouldLightAnimate,
    });

    return (
        <Section
            contentClassName={styles['content-container']}
            title={t('pages.experience.careerFlowSection.title')}
        >
            <div className={styles['career-flow-wrapper']}>
                <div className={careerFlowCn}>
                    <Carousel
                        withPagination={false}
                        titlesConfig={{
                            carousel: t('pages.experience.careerFlowSection.carouselTitle'),
                            prevButton: t('pages.experience.careerFlowSection.prevFeedback'),
                            nextButton: t('pages.experience.careerFlowSection.nextFeedback'),
                        }}
                        onSlideChange={handleSlideChange}
                    >
                        {careerFlowData.map(({ title, date, description }) => (
                            <CareerFlowItem
                                key={hashCode(`${title}${date}${description}`)}
                                title={title}
                                date={date}
                                description={description}
                            />
                        ))}
                    </Carousel>
                </div>
            </div>
            <div className={styles['projector-wrapper']}>
                <img className={lightCn} src={projectorLightImgUrl} alt='' aria-hidden={true} />
                <img className={styles['projector']} src={projectorSideImgUrl} alt='' aria-hidden={true} />
                <img className={styles['watcher']} src={watcherImgUrl} alt='' aria-hidden={true} />
            </div>
        </Section>
    );
};

type ICareerFlowItemProps = ICareerFlow[number];

const CareerFlowItem: React.FC<ICareerFlowItemProps> = ({ title, date, description }) => (
    <>
        <h3 className={styles['career-flow-title']}>{title}</h3>
        <span className={styles['career-flow-date']}>{date}</span>
        {/*eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex*/}
        <span tabIndex={0} className={styles['career-flow-description']}>
            {description}
        </span>
    </>
);

export default memo(CareerFlow);
