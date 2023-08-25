import { useSelector } from 'react-redux';

import { selectPastProjects } from '@slices/content-config/content-config.selector';

import PastProjects from './PastProjects.component';

const PastProjectsContainer = () => {
    const pastProjectsData = useSelector(selectPastProjects);

    return <PastProjects pastProjectsData={pastProjectsData} />;
};

export default PastProjectsContainer;
