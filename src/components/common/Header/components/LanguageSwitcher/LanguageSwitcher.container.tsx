import { useDispatch, useSelector } from 'react-redux';

import { ILanguageCodes } from '@services';
import { changeLanguage } from '@slices/i18n/i18n.slice';
import { selectLanguage } from '@slices/app-info/app-info.selector';
import LanguageSwitcher from './LanguageSwitcher.component';

interface ILanguageSwitcherContainerProps {
    onEnter: () => void;
    onLeave: () => void;
}

const LanguageSwitcherContainer: React.FC<ILanguageSwitcherContainerProps> = (props) => {
    const dispatch = useDispatch();

    const languageCode = useSelector(selectLanguage) as ILanguageCodes;
    const handleChangeLanguage = (languageCode: ILanguageCodes) => dispatch(changeLanguage(languageCode));

    return (
        <LanguageSwitcher languageCode={languageCode} onChangeLanguage={handleChangeLanguage} {...props} />
    );
};

export default LanguageSwitcherContainer;
