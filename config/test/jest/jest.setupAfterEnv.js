import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { toHaveNoViolations } from 'jest-axe';

// A11y methods "expect" extension
expect.extend(toHaveNoViolations);
