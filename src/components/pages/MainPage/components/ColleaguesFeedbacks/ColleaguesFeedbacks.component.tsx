import { memo, Fragment } from 'react';

import { useTranslates } from '@reusables/custom-hooks';
import Section from '@components/base/Section';
import Carousel from '@components/base/Carousel';
import { hashCode } from '@utils/strings';
import owlImgUrl from '@assets/images/sections/colleagues-feedbacks/owl.svg?url';
import featherImgUrl from '@assets/images/sections/colleagues-feedbacks/feather.svg?url';
import portraitMaleImgUrl from '@assets/images/sections/colleagues-feedbacks/portrait_male.svg?url';
import portraitFemaleImgUrl from '@assets/images/sections/colleagues-feedbacks/portrait_female.svg?url';

import styles from './ColleaguesFeedbacks.module.scss';

export type IColleaguesFeedbacks = { authorRole: string; sourceName: string; text: string }[];

interface IColleaguesFeedbacksProps {
    colleaguesFeedbacksData: IColleaguesFeedbacks;
}

const ColleaguesFeedbacks: React.FC<IColleaguesFeedbacksProps> = ({ colleaguesFeedbacksData }) => {
    const { t } = useTranslates();

    const renderFeedback = ({ authorRole, sourceName, text }: IColleaguesFeedbacks[number]) => {
        const portraitUrl = Math.random() < 0.5 ? portraitMaleImgUrl : portraitFemaleImgUrl;

        return (
            <Fragment key={hashCode(`${authorRole}${sourceName}${text}`)}>
                <div className={styles['feedback-portrait-wrapper']}>
                    <img
                        className={styles['feedback-portrait']}
                        src={portraitUrl}
                        alt=''
                        aria-hidden={true}
                    />
                    <img
                        className={styles['feedback-feather']}
                        src={featherImgUrl}
                        alt=''
                        aria-hidden={true}
                    />
                </div>
                <h3 className={styles['feedback-title']}>
                    {authorRole} ({sourceName})
                </h3>
                {/*eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex*/}
                <span tabIndex={0} className={styles['feedback-text']}>
                    &quot;{text}&quot;
                </span>
            </Fragment>
        );
    };

    return (
        <Section
            contentClassName={styles['content-container']}
            title={t('pages.main.colleaguesFeedbacksSection.title')}
        >
            <div className={styles['owl-wrapper']}>
                <img className={styles['owl']} src={owlImgUrl} alt='' aria-hidden={true} />
            </div>
            <div className={styles['feedbacks-wrapper']}>
                <div className={styles['feedbacks']}>
                    <Carousel
                        titlesConfig={{
                            carousel: t('pages.main.colleaguesFeedbacksSection.carouselTitle'),
                            prevButton: t('pages.main.colleaguesFeedbacksSection.prevFeedback'),
                            nextButton: t('pages.main.colleaguesFeedbacksSection.nextFeedback'),
                            pagination: t('pages.main.colleaguesFeedbacksSection.paginationTitle'),
                            pagePrefix: t('pages.main.colleaguesFeedbacksSection.pageTitlePrefix'),
                        }}
                    >
                        {colleaguesFeedbacksData.map((feedback) => renderFeedback(feedback))}
                    </Carousel>
                </div>
            </div>
        </Section>
    );
};

export default memo(ColleaguesFeedbacks);
