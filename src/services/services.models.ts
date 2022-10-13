import type DeviceDetectService from './device-detect';
import type I18nService from './i18n';

export interface IServicesOptions {
    userAgent?: string; // userAgent information
    baseLanguage?: string | null; // User's base language
}

export interface IServices {
    deviceDetect: DeviceDetectService;
    i18n: I18nService;
}
