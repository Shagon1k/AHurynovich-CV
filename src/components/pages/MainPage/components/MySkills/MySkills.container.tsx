import { useSelector } from 'react-redux';

import { selectSkills } from '@slices/content-config/content-config.selector';

import MySkills from './MySkills.component';

const MySkillsContainer = () => {
    const skillsListData = useSelector(selectSkills);

    return <MySkills skillsListData={skillsListData} />;
};

export default MySkillsContainer;
