import { useSelector } from 'react-redux';

import { selectExpertise } from '@slices/content-config/content-config.selector';

import MyExpertise from './MyExpertise.component';

const MyExpertiseContainer = () => {
    const myExperienceData = useSelector(selectExpertise);

    return <MyExpertise myExperienceData={myExperienceData} />;
};

export default MyExpertiseContainer;
