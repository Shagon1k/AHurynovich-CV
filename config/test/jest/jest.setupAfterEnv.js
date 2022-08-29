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
