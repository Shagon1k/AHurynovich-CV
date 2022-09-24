import React from 'react';
import { ServicesContext } from '@reusables/services-context';
import { mirrorFunction } from '@utils';

// Custom hook to provide translate function
export const useTranslate = () => {
    const services = React.useContext(ServicesContext);
    const translate = services?.i18n.translate || mirrorFunction;

    return translate;
};
