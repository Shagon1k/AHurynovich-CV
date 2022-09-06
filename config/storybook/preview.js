import { getProvidersDecorator } from './helpers/decorators';
import { getDeviceArgTypes } from './helpers/argTypes';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    // Centralize all components in stories by default.
    layout: 'centered',
    // Setup set of backgrounds to check your components against.
    backgrounds: {
        values: [
            { name: 'red', value: '#f00' },
            { name: 'blue', value: '#00f' },
        ],
    },
};

const deviceArgTypes = getDeviceArgTypes();
export const argTypes = {
    ...deviceArgTypes.argTypes,
};
export const args = {
    ...deviceArgTypes.default,
};

export const decorators = [getProvidersDecorator()];
