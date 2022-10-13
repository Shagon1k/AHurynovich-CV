export interface II18nInstance {
    changeLanguage: (language: string) => void;
    t: (key: string, interpolationKeys?: object) => string;
    language: string;
}
