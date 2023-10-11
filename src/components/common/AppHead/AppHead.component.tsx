import HelmetSync from 'react-helmet';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { ROUTES_CONFIG } from '@components/routes/routes.config';
import { useTranslates } from '@reusables/custom-hooks';
import { selectLanguage } from '@slices/app-info/app-info.selector';

const AppHead: React.FC = () => {
    const { pathname } = useLocation();
    const { t } = useTranslates();
    const languageCode = useSelector(selectLanguage);

    const pageConfig =
        Object.values(ROUTES_CONFIG).find(({ path }) => path === pathname) || ROUTES_CONFIG.notFound;
    const pageTitleTranslationKey = pageConfig?.titleTranslationKey;

    const title = pageTitleTranslationKey
        ? `${t('general.title')} | ${t(pageTitleTranslationKey)}`
        : t('general.title');

    return <HelmetSync htmlAttributes={{ lang: languageCode }} title={title} />;
};

export default AppHead;
