/*
 * The purpose of that helper is to generate minified CSS class name
 * based on original class name and path to CSS file
 * (could be used for class names generations of CSS modules)
 */

import incstr from 'incstr';

const createUniqueIdGenerator = () => {
    const uniqIds = {};

    const generateNextId = incstr.idGenerator({
        // letter 'd' redundant to avoid adblock issues
        alphabet: 'abcefghijklmnopqrstuvwxyzABCEFGHJKLMNOPQRSTUVWXYZ',
    });

    return (name) => {
        if (!uniqIds[name]) {
            uniqIds[name] = generateNextId();
        }

        return uniqIds[name];
    };
};

const localNameIdGenerator = createUniqueIdGenerator();
const componentNameIdGenerator = createUniqueIdGenerator();

export default (localName, resourcePath) => {
    // get folder name
    // eslint-disable-next-line prefer-destructuring
    const componentName = resourcePath.split('/').slice(-2, -1)[0];

    const localId = localNameIdGenerator(localName);
    const componentId = componentNameIdGenerator(componentName);

    return `${componentId}_${localId}`;
};
