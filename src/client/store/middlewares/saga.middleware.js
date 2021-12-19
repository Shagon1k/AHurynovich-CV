import createSagaMiddleware from 'redux-saga';

/**
 * Get Redux-saga middleware to be used in Redux store enhancer
 * @param {Object} options - additional options to inject to application Sagas context
 * @returns {Object} sagas middleware
 */
const getSagaMiddleware = ({ services }) =>
    createSagaMiddleware({
        context: {
            services,
        },
    });

export default getSagaMiddleware;
