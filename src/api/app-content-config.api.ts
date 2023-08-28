const API_URL = 'https://ahurynovich-cv-config.s3.eu-west-1.amazonaws.com';
const API_CONFIG_URL = `${API_URL}/content-config.json`;

export const getAppContentConfig = async () => {
    try {
        const resp = await fetch(API_CONFIG_URL);

        return await resp.json();
    } catch (e) {
        console.error('Error. Trying fetch application content configuration', e);

        return null;
    }
};
