import { useSelector } from 'react-redux';

import { selectAboutMe } from '@slices/content-config/content-config.selector';

import AboutMe from './AboutMe.component';

const AboutMeContainer = () => {
    const { isSearchingForWork, descriptionMarkup } = useSelector(selectAboutMe);

    return <AboutMe isSearchingForWork={isSearchingForWork} aboutMeMarkup={descriptionMarkup} />;
};

export default AboutMeContainer;
