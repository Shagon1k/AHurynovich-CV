import { useSelector } from 'react-redux';
import { Helmet as HelmetAsync } from 'react-helmet-async';
import HelmetSync from 'react-helmet';

import { selectLanguage } from '@slices/app-info/app-info.selector';

const AppHead: React.FC = () => {
    const languageCode = useSelector(selectLanguage);
    const Helmet = WITH_SSR ? HelmetAsync : HelmetSync;

    return <Helmet htmlAttributes={{ lang: languageCode }} />;
};

export default AppHead;
