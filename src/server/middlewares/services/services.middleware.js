import { createServices } from '@services';

const createServicesMiddleware = () => async (req, res, next) => {
    const userAgent = req.headers['user-agent'] || '';
    const baseLanguage = req.headers['accept-language'] || null;

    const services = createServices({
        userAgent,
        baseLanguage,
    });

    res.locals.services = services;

    next();
};

export default createServicesMiddleware;
