import { createSelector } from '@reduxjs/toolkit';
import { type ILanguageCodes } from '@services';
import { isPlainObject } from '@utils/objects';

import { selectLanguage } from '../app-info/app-info.selector';
import { type IContentConfigState } from './content-config.slice';
import type { IContentConfig, ITranslatedContentConfig } from './content-config.types';

interface IState {
    contentConfig: IContentConfigState;
}

interface IConfigObject {
    [key: string]: string | null | boolean | IConfigObject | IConfigObject[];
}

const selectContentConfig = (state: IState): IContentConfig => state.contentConfig.config;

const selectLocalizedContentConfig = createSelector(
    [selectContentConfig, selectLanguage],
    (contentConfig, languageCode) => {
        function normalizeTranslatedValues(obj: IConfigObject, langCode: ILanguageCodes): IConfigObject {
            const result: IConfigObject = {};
            for (const key in obj) {
                const propValue = obj[key];

                if (isPlainObject(propValue)) {
                    // If prop is a Plain Object -> check if "Translatable" or continue recursively
                    if (typeof propValue['en'] === 'string') {
                        result[key] = propValue[langCode] || propValue['en'];
                    } else {
                        result[key] = normalizeTranslatedValues(propValue, langCode);
                    }
                } else if (Array.isArray(propValue)) {
                    // If prop is an Array -> traverse each item recursively
                    result[key] = propValue.map((v) => normalizeTranslatedValues(v, langCode));
                } else {
                    // Else - just copy the property in result
                    result[key] = propValue;
                }
            }

            return result;
        }

        return normalizeTranslatedValues(
            contentConfig as unknown as IConfigObject,
            languageCode
        ) as unknown as ITranslatedContentConfig;
    }
);

export const selectPdfCVUrl = createSelector(selectLocalizedContentConfig, (config) => config.pdfCVUrl);
export const selectA11yStatementMarkup = createSelector(
    selectLocalizedContentConfig,
    (config) => config.a11yStatementMarkup
);
export const selectAboutMe = createSelector(selectLocalizedContentConfig, (config) => config.aboutMe);
export const selectSkills = createSelector(selectLocalizedContentConfig, (config) => config.skills);
export const selectExpertise = createSelector(selectSkills, (skills) =>
    skills.filter(({ description }) => description !== null)
);
export const selectFiveReasons = createSelector(selectLocalizedContentConfig, (config) => config.fiveReasons);
export const selectFeedbacks = createSelector(selectLocalizedContentConfig, (config) => config.feedbacks);
export const selectCareerFlow = createSelector(selectLocalizedContentConfig, (config) => config.careerFlow);
export const selectPastProjects = createSelector(
    selectLocalizedContentConfig,
    (config) => config.pastProjects
);
export const selectContactInfo = createSelector(selectLocalizedContentConfig, (config) => config.contactInfo);
export const selectRecipientEmail = createSelector(selectContactInfo, (contactInfo) => contactInfo.email);
export const selectSocials = createSelector(selectContactInfo, (contactInfo) => contactInfo.socials);
