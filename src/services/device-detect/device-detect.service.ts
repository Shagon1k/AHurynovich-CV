import isMobile from 'is-mobile';

class DeviceDetect {
    _isMobile: boolean;

    constructor(userAgent = '') {
        this._isMobile = isMobile({ ua: userAgent, tablet: true }); // Including tablet devices
    }

    get deviceInfo() {
        const isMobile = this._isMobile;
        const isDesktop = !isMobile;

        return {
            isMobile,
            isDesktop,
        };
    }
}

export default DeviceDetect;
