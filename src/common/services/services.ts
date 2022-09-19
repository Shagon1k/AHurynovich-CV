import DeviceDetectService from './device-detect';
import I18nService from './i18n';

interface IServicesOptions {
    userAgent?: string; // userAgent information
    baseLanguage?: string | null; // User's base language
}

export interface IServices {
    deviceDetect: DeviceDetectService;
    i18n: I18nService;
}

// Services builder
const createServices = (options: IServicesOptions = {}): IServices => {
    const { userAgent = '', baseLanguage = null } = options;

    return {
        deviceDetect: new DeviceDetectService(userAgent),
        i18n: new I18nService(baseLanguage),
    };
};

export default createServices;
