import { useSelector } from 'react-redux';

import { selectSocials } from '@slices/content-config/content-config.selector';

import Socials from './Socials.component';

const SocialsContainer: React.FC = () => {
    const socialsData = useSelector(selectSocials);

    return <Socials socialsData={socialsData} />;
};

export default SocialsContainer;
