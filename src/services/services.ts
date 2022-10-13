import DeviceDetectService from './device-detect';
import I18nService from './i18n';

import { type IServicesOptions, type IServices } from './services.models';

// Services builder
const createServices = (options: IServicesOptions = {}): IServices => {
    const { userAgent = '', baseLanguage = null } = options;

    return {
        deviceDetect: new DeviceDetectService(userAgent),
        i18n: new I18nService(baseLanguage),
    };
};

export default createServices;
