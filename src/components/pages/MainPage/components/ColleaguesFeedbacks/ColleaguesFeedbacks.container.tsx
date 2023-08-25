import { useSelector } from 'react-redux';

import { selectFeedbacks } from '@slices/content-config/content-config.selector';

import ColleaguesFeedbacks from './ColleaguesFeedbacks.component';

const ColleaguesFeedbacksContainer = () => {
    const colleaguesFeedbacksData = useSelector(selectFeedbacks);

    return <ColleaguesFeedbacks colleaguesFeedbacksData={colleaguesFeedbacksData} />;
};

export default ColleaguesFeedbacksContainer;
