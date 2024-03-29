import { memo } from 'react';

import Carousel from '@components/base/Carousel';
import Section from '@components/base/Section';
import { useTranslates } from '@reusables/custom-hooks';
import { hashCode } from '@utils/strings';

import featherImgUrl from './images/feather.svg?url';
import owlImgUrl from './images/owl.svg?url';
import portraitFemaleImgUrl from './images/portrait_female.svg?url';
import portraitMaleImgUrl from './images/portrait_male.svg?url';

import styles from './ColleaguesFeedbacks.module.scss';

type IColleaguesFeedbacksList = {
    author: { name: string; role: string; gender: 'f' | 'm' };
    sourceName: string;
    text: string;
}[];

interface IColleaguesFeedbacksProps {
    colleaguesFeedbacksData: IColleaguesFeedbacksList;
}

const ColleaguesFeedbacks: React.FC<IColleaguesFeedbacksProps> = ({ colleaguesFeedbacksData }) => {
    const { t } = useTranslates();

    if (colleaguesFeedbacksData.length === 0) {
        return null;
    }

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
                            key={hashCode(`${itemData.author.name}${itemData.sourceName}`)}
                            {...itemData}
                        />
                    ))}
                </Carousel>
            </div>
        </Section>
    );
};

type IFeedbackItemProps = IColleaguesFeedbacksList[number];

const Feedback: React.FC<IFeedbackItemProps> = ({ author, sourceName, text }) => {
    const portraitUrl = author.gender === 'f' ? portraitFemaleImgUrl : portraitMaleImgUrl;

    return (
        <>
            <div className={styles['feedback-portrait-wrapper']}>
                <img className={styles['feedback-portrait']} src={portraitUrl} alt='' aria-hidden={true} />
            </div>
            <h3 className={styles['feedback-title']}>
                <div className={styles['feedback-title-name']}>{author.name}</div>
                <div className={styles['feedback-title-role']}>{author.role}</div>
                <div className={styles['feedback-title-source']}>({sourceName})</div>
                <img className={styles['feedback-feather']} src={featherImgUrl} alt='' aria-hidden={true} />
            </h3>
            {/*eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex --- add ability to navigate with keyboard to scroll the content*/}
            <span tabIndex={0} className={styles['feedback-text']}>
                &quot;{text}&quot;
            </span>
        </>
    );
};

export default memo(ColleaguesFeedbacks);
