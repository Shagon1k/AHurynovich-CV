import { createServices } from '@services';

import { Request as IRequest, Response as IResponse, NextFunction as INext } from 'express';

const createServicesMiddleware = () => async (req: IRequest, res: IResponse, next: INext) => {
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
