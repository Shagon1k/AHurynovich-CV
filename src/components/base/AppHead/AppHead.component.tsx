import { useSelector } from 'react-redux';
import HelmetSync from 'react-helmet';

import { selectLanguage } from '@slices/app-info/app-info.selector';

const AppHead: React.FC = () => {
    const languageCode = useSelector(selectLanguage);

    return <HelmetSync htmlAttributes={{ lang: languageCode }} />;
};

export default AppHead;
