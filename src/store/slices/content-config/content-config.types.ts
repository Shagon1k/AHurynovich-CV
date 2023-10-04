import { type IIconName } from '@components/base/Icon';

interface ITranslatableValue {
    en: string;
    ru?: string;
}

export interface IContentConfig<TTranslatableOrTranslatedValue = ITranslatableValue> {
    pdfCVUrl: string;
    sourceCodeUrl: string;
    a11yStatementMarkup: TTranslatableOrTranslatedValue;
    aboutMe: {
        isSearchingForWork: boolean;
        descriptionMarkup: TTranslatableOrTranslatedValue;
    };
    skills: {
        name: string;
        iconName: IIconName;
        level: number;
        description: TTranslatableOrTranslatedValue;
        achievements: {
            title: string;
            url: string;
            badgeUrl: string;
        }[];
    }[];
    fiveReasons: {
        name: string;
        iconName: IIconName;
        description: TTranslatableOrTranslatedValue;
    }[];
    feedbacks: {
        author: {
            name: string;
            role: string;
            gender: 'f' | 'm';
        };
        sourceName: string;
        text: TTranslatableOrTranslatedValue;
    }[];
    careerFlow: {
        title: string;
        date: string;
        description: TTranslatableOrTranslatedValue;
    }[];
    pastProjects: {
        title: string;
        imgUrl: string;
        description: TTranslatableOrTranslatedValue;
    }[];
    contactInfo: {
        email: string;
        socials: {
            name: string;
            iconName: IIconName;
            link: string;
        }[];
    };
}

export type ITranslatedContentConfig = IContentConfig<string>;
