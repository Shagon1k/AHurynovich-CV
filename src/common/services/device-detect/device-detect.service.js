import MobileDetect from 'mobile-detect';

class DeviceDetect {
    constructor(userAgent = '') {
        this._deviceInfoInstance = new MobileDetect(userAgent);
    }

    getDeviceInfo() {
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
