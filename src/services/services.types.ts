import type DeviceDetectService from './device-detect';
import type I18nService from './i18n';
import { SUPPORTED_LANGUAGES_CODES } from './i18n/config/i18n.config';

export interface IServicesOptions {
    userAgent?: string; // userAgent information
    baseLanguage?: string | null; // User's base language
}

export interface IServices {
    deviceDetect: DeviceDetectService;
    i18n: I18nService;
}

export type ILanguageCodes = typeof SUPPORTED_LANGUAGES_CODES[number];
