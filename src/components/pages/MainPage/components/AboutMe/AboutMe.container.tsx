import { useSelector } from 'react-redux';

import { selectAboutMe } from '@slices/content-config/content-config.selector';

import AboutMe from './AboutMe.component';

const AboutMeContainer = () => {
    const { isSearchingForWork, description } = useSelector(selectAboutMe);

    return <AboutMe isSearchingForWork={isSearchingForWork} aboutMeText={description} />;
};

export default AboutMeContainer;
