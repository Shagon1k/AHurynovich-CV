import { useSelector } from 'react-redux';
import HelmetSync from 'react-helmet';
import { useLocation } from 'react-router-dom';

import { ROUTES_CONFIG } from '@components/routes/routes.config';
import { selectLanguage } from '@slices/app-info/app-info.selector';
import { useTranslates } from '@reusables/custom-hooks';

const AppHead: React.FC = () => {
    const { pathname } = useLocation();
    const { t } = useTranslates();
    const languageCode = useSelector(selectLanguage);

    const pageTitleTranslationKey = Object.values(ROUTES_CONFIG).find(
        ({ path }) => path === pathname
    )?.titleTranslationKey;

    const title = pageTitleTranslationKey
        ? `${t('general.title')} | ${t(pageTitleTranslationKey)}`
        : t('general.title');

    return <HelmetSync htmlAttributes={{ lang: languageCode }} title={title} />;
};

export default AppHead;
