import { memo } from 'react';

import { useTranslates } from '@reusables/custom-hooks';
import { ILanguageCodes, SUPPORTED_LANGUAGES_CONFIG } from '@services';

import styles from './LanguageSwitcher.module.scss';

const EN_CODE = SUPPORTED_LANGUAGES_CONFIG.en.code;
const RU_CODE = SUPPORTED_LANGUAGES_CONFIG.ru.code;

interface ILanguageSwitcherProps {
    onEnter: () => void;
    onLeave: () => void;
    languageCode: ILanguageCodes;
    onChangeLanguage: (languageCode: ILanguageCodes) => void;
}

const LanguageSwitcher: React.FC<ILanguageSwitcherProps> = ({
    onEnter,
    onLeave,
    languageCode,
    onChangeLanguage,
}) => {
    const { t } = useTranslates();

    const handleClick = () => {
        const newLanguageCode = languageCode === EN_CODE ? RU_CODE : EN_CODE;

        onChangeLanguage(newLanguageCode);
    };
    const languageImageUrl = SUPPORTED_LANGUAGES_CONFIG[languageCode].imageUrl;
    const imageAlt =
        languageCode === EN_CODE
            ? t('header.languageSwitcher.language.en')
            : t('header.languageSwitcher.language.ru');
    const buttonTitle =
        languageCode === EN_CODE
            ? t('header.languageSwitcher.language.switchToRu')
            : t('header.languageSwitcher.language.switchToEn');

    return (
        <button
            className={styles['language-switcher']}
            onClick={handleClick}
            title={buttonTitle}
            aria-label={buttonTitle}
            onFocus={onEnter}
            onBlur={onLeave}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            <img className={styles['language-switcher-img']} src={languageImageUrl} alt={imageAlt} />
        </button>
    );
};

export default memo(LanguageSwitcher);
