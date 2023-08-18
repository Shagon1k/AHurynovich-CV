import createSagaMiddleware, { type SagaMiddleware as ISagaMiddleware } from 'redux-saga';

import { type IServices } from '@services';

// Get Redux-saga middleware to be used in Redux store enhancer
const getSagaMiddleware = ({ services }: { services: IServices }): ISagaMiddleware =>
    createSagaMiddleware({
        context: {
            services,
        },
    });

export default getSagaMiddleware;
