import { Helmet as HelmetAsync } from 'react-helmet-async';
import HelmetSync from 'react-helmet';

import { getLanguage } from '@selectors/app-info.selector';

const AppHead = () => {
    const languageCode = ReactRedux.useSelector(getLanguage);
    const Helmet = WITH_SSR ? HelmetAsync : HelmetSync;

    return <Helmet htmlAttributes={{ lang: languageCode }} />;
};

export default AppHead;
