import MobileDetect from 'mobile-detect';

class DeviceDetect {
    _deviceInfoInstance: MobileDetect;

    constructor(userAgent = '') {
        this._deviceInfoInstance = new MobileDetect(userAgent);
    }

    get deviceInfo() {
        const isMobile = Boolean(this._deviceInfoInstance.mobile());
        const isTablet = Boolean(this._deviceInfoInstance.tablet());
        const isDesktop = !isMobile && !isTablet;

        return {
            isMobile,
            isTablet,
            isDesktop,
        };
    }
}

export default DeviceDetect;
