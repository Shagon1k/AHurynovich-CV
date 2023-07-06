import MyExpertise, { type IExperiencesList } from './MyExpertise.component';

// Some skills could have description and such skills will be shown with such details here.
import { TO_API_skillsListData } from '@pages/MainPage/components/MySkills/MySkills.container';
const TO_SELECTOR_experiencesList = TO_API_skillsListData.filter(({ description }) => !!description);

const MyExpertiseContainer = () => {
    const myExperienceData = TO_SELECTOR_experiencesList as IExperiencesList;

    return <MyExpertise myExperienceData={myExperienceData} />;
};

export default MyExpertiseContainer;
