const API_CONFIG_URL = 'https://ahurynovich-cv-config.s3.eu-west-1.amazonaws.com/content-config.json';

export const getAppContentConfig = async () => {
    try {
        const resp = await fetch(API_CONFIG_URL);
        const contentConfigData = await resp.json();

        return contentConfigData;
    } catch (e) {
        console.error('Error. Trying fetch application content configuration', e);

        return null;
    }
};
