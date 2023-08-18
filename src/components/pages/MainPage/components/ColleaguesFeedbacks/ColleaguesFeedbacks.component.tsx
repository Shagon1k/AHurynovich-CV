import { memo, useRef } from 'react';

import Carousel from '@components/base/Carousel';
import Section from '@components/base/Section';
import { useTranslates } from '@reusables/custom-hooks';
import { hashCode } from '@utils/strings';

import featherImgUrl from './images/feather.svg?url';
import owlImgUrl from './images/owl.svg?url';
import portraitFemaleImgUrl from './images/portrait_female.svg?url';
import portraitMaleImgUrl from './images/portrait_male.svg?url';

import styles from './ColleaguesFeedbacks.module.scss';

export type IColleaguesFeedbacksList = { authorRole: string; sourceName: string; text: string }[];

interface IColleaguesFeedbacksProps {
    colleaguesFeedbacksData: IColleaguesFeedbacksList;
}

const ColleaguesFeedbacks: React.FC<IColleaguesFeedbacksProps> = ({ colleaguesFeedbacksData }) => {
    const { t } = useTranslates();

    return (
        <Section
            id='colleagues-feedbacks'
            contentClassName={styles['content-container']}
            title={t('pages.main.colleaguesFeedbacksSection.title')}
        >
            <img className={styles['owl']} src={owlImgUrl} alt='' aria-hidden={true} />
            <div className={styles['feedbacks']}>
                <Carousel
                    titlesConfig={{
                        carousel: t('pages.main.colleaguesFeedbacksSection.carouselTitle'),
                        prevButton: t('pages.main.colleaguesFeedbacksSection.prevFeedback'),
                        nextButton: t('pages.main.colleaguesFeedbacksSection.nextFeedback'),
                        pagination: t('pages.main.colleaguesFeedbacksSection.paginationTitle'),
                        pagePrefix: t('pages.main.colleaguesFeedbacksSection.pageTitlePrefix'),
                    }}
                    withInfiniteLoop
                >
                    {colleaguesFeedbacksData.map((itemData) => (
                        <Feedback
                            key={hashCode(`${itemData.authorRole}${itemData.sourceName}`)}
                            {...itemData}
                        />
                    ))}
                </Carousel>
            </div>
        </Section>
    );
};

type IFeedbackItemProps = IColleaguesFeedbacksList[number];

const Feedback: React.FC<IFeedbackItemProps> = ({ authorRole, sourceName, text }) => {
    const portraitUrl = useRef(Math.random() < 0.5 ? portraitMaleImgUrl : portraitFemaleImgUrl);

    return (
        <>
            <div className={styles['feedback-portrait-wrapper']}>
                <img
                    className={styles['feedback-portrait']}
                    src={portraitUrl.current}
                    alt=''
                    aria-hidden={true}
                />
                <img className={styles['feedback-feather']} src={featherImgUrl} alt='' aria-hidden={true} />
            </div>
            <h3 className={styles['feedback-title']}>
                {authorRole} ({sourceName})
            </h3>
            {/*eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex --- add ability to navigate with keyboard to scroll the content*/}
            <span tabIndex={0} className={styles['feedback-text']}>
                &quot;{text}&quot;
            </span>
        </>
    );
};

export default memo(ColleaguesFeedbacks);
