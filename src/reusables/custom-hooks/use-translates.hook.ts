import React from 'react';
import { useSelector } from 'react-redux';

import { ServicesContext } from '@reusables/services-context';
import { mirrorFunction } from '@utils';
import { selectLanguage } from '@slices/app-info/app-info.selector';

// Custom hook to provide translate function
export const useTranslates = () => {
    const services = React.useContext(ServicesContext);
    const translate = services?.i18n.translate || mirrorFunction;
    const languageCode = useSelector(selectLanguage);

    /**
     * Note: On language change, all components which use translates should re-render to display correct translations.
     * To handle this translate function (t) should change it's reference.
     */
    const t = React.useCallback(
        (key: string, interpolationKeys?: object) => translate(key, interpolationKeys),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [languageCode, translate]
    );

    return { t, languageCode };
};
