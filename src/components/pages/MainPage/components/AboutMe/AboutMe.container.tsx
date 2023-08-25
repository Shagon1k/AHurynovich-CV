import { useSelector } from 'react-redux';

import { selectAboutMe } from '@slices/content-config/content-config.selector';

import AboutMe from './AboutMe.component';

const AboutMeContainer = () => {
    const { isSearchingForWork, description, photoUrl } = useSelector(selectAboutMe);

    return <AboutMe isSearchingForWork={isSearchingForWork} aboutMeText={description} photoUrl={photoUrl} />;
};

export default AboutMeContainer;
