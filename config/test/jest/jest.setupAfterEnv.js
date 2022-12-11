import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { configure } from '@testing-library/dom';
import { toHaveNoViolations } from 'jest-axe';

// A11y methods "expect" extension
expect.extend(toHaveNoViolations);

// Testing Library DOM configuration
configure({
    // Error with alternative preferable testing query if any
    throwSuggestions: true,
    asyncUtilTimeout: 500,
});

// Application automatically loaded modules (using Webpack Provide Plugin) should be injected globally in test scopes
global.React = React;

// Global mocks
// Note: useTranslates custom hook mock to not overuse Redux store wrapper in Unit tests
jest.mock('@reusables/custom-hooks/use-translates.hook.ts', () => ({
    __esModule: true,
    useTranslates: () => ({
        t: (key) => key,
        languageCode: 'testCode',
    }),
}));
