import { createServices } from '@services';

const createServicesMiddleware = () => async (req, res, next) => {
    const userAgent = req.headers['user-agent'] || '';
    const services = createServices({
        userAgent,
    });

    res.locals.services = services;

    next();
};

export default createServicesMiddleware;
