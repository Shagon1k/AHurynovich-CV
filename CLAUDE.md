# AHurynovich-CV Project Guidelines

## Project Overview
Personal CV/Portfolio Web Application built with React, TypeScript, and SCSS modules. The application follows a Static Client-Side Rendering (CSR) approach and is deployed to AWS S3 with CloudFront and Route 53.

## Technology Stack
- **Framework**: React 18.2 with TypeScript 5.1.6
- **State Management**: Redux Toolkit + Redux Saga
- **Routing**: React Router v6
- **Styling**: SCSS with CSS Modules
- **Build Tools**: Webpack 5 + Babel
- **Testing**: Jest, React Testing Library, Cypress
- **Node Version**: 20.x

## Code Style & Formatting

### General
- **Indentation**: 4 spaces (NO tabs)
- **Line Endings**: CRLF (Windows-style)
- **Charset**: UTF-8
- **Insert Final Newline**: Always
- **Trim Trailing Whitespace**: Always (except Markdown)

### JavaScript/TypeScript
- **Quotes**: Single quotes (both JS/TS and JSX)
- **Print Width**: 110 characters
- **Semicolons**: Required
- **Trailing Commas**: ES5 style
- **Arrow Parens**: Always
- **Bracket Spacing**: true
- **Bracket Same Line**: false (closing bracket on new line)

### TypeScript Conventions
- **Strict Mode**: Enabled (noImplicitAny, noImplicitReturns, noFallthroughCasesInSwitch)
- **Module Resolution**: bundler (ESNext modules)
- **JSX**: react-jsx (automatic runtime)
- **Naming Conventions**:
  - Interfaces: PascalCase with `I` prefix (e.g., `IButtonProps`)
  - Type Aliases: PascalCase with `I` prefix (e.g., `IButtonType`)
  - Type Parameters: PascalCase with `T` prefix (e.g., `TValue`)
  - Use `interface` over `type` (enforced by `@typescript-eslint/consistent-type-definitions`)

### Import Order
Imports are automatically sorted by `@trivago/prettier-plugin-sort-imports`:
1. NPM packages (external dependencies)
2. @ alias-based imports (e.g., `@components/*`, `@utils/*`)
3. Relative imports (non-styling)
4. Styling imports (`.scss` files) - **always last**

Example:
```typescript
import { useSkipToContent, useTranslates } from '@reusables/custom-hooks';

import styles from './Component.module.scss';
```

### Path Aliases
- `@config/*` - Configuration files
- `@src/*` - Source root
- `@utils/*` - Utility functions
- `@services/*` - Service layer
- `@api/*` - API layer
- `@assets/*` - Static assets (images, fonts, etc.)
- `@components/*` - All components
- `@pages/*` - Page components (`src/components/pages/*`)
- `@reusables/*` - Reusable hooks, HOCs, etc.
- `@slices/*` - Redux slices
- `@test-utils` - Testing utilities

## Component Structure

### File Organization
Components follow a consistent structure:
```
ComponentName/
├── ComponentName.component.tsx    # Presentational component
├── ComponentName.container.tsx    # Container component (if needed)
├── ComponentName.module.scss      # Component styles
├── index.ts                       # Barrel export
├── __stories__/                   # Storybook stories (optional)
│   └── ComponentName.stories.tsx
└── components/                    # Nested sub-components
    └── SubComponent/
```

### Component Categories
- **base/** - Reusable UI primitives (Button, Input, Icon, Popup, etc.)
- **common/** - Application-wide components (Header, Footer, Navigation)
- **pages/** - Page-level components (MainPage, ExperiencePage, etc.)
- **routes/** - Routing configuration

### Component File Patterns
- **Barrel Exports**: Each component folder has an `index.ts` that exports the default component:
  ```typescript
  export { default } from './ComponentName.component';
  // or for containers
  export { default } from './ComponentName.container';
  ```
- **Component Pattern**: Functional components with TypeScript interfaces:
  ```typescript
  interface IComponentProps {
      prop1: string;
      prop2?: boolean;
  }

  const Component: React.FC<IComponentProps> = ({ prop1, prop2 = false }: IComponentProps) => {
      return <div className={styles['component']}>...</div>;
  };

  export default Component;
  ```

## Styling Guidelines

### Color Palette
The application uses **OKLCH color space** (modern, human-readable, P3 colors support):
- **Beige Light**: `oklch(96% 0.024 100)`
- **Beige**: `oklch(93% 0.04 100)`
- **Brown**: `oklch(55% 0.035 94)` - Primary text/borders
- **Brown Dark**: `oklch(40% 0.035 94)` - Headings, emphasized text
- **Red**: `oklch(50% 0.25 30)` - Accent/error
- **Yellow**: `oklch(97% 0.08 110)` - Highlights
- **White**: `oklch(100% 0 0)`
- **Grey**: `oklch(70% 0 0)`
- **Black**: `oklch(0% 0 0)`

**IMPORTANT**: Never use hex colors, `rgb()`, `rgba()`, `hsl()`, or `hsla()`. Always use OKLCH with modern notation.

### Typography
The application defines typography mixins in `@base-styles-mixins/typography`:

**Fonts**:
- **Body Text**: Raleway (400, 500, 700 weights) + georgia, serif fallback
- **Headings**: Moyenage (400 weight) + georgia, serif fallback

**Typography Mixins**:
- **Headings**: `@include t.h1()`, `@include t.h2()`, `@include t.h3()`
- **Titles**: `@include t.t1()`, `@include t.t2()`
- **Body Text**: `@include t.b1()`, `@include t.b2()`, `@include t.b3()`

All typography includes:
- WCAG 2.1 (AA) compliant spacing (`word-spacing: 0.11em`, `letter-spacing: 0.08em`)
- Responsive sizing with mobile breakpoints
- Proper line-height for readability

### Breakpoints
Keep in sync with `@config/application` JavaScript constants:
- **xs**: 1px
- **s**: 320px (small/mobile)
- **m**: 768px (medium/tablet)
- **l**: 1024px (large/desktop)
- **xl**: 1366px (extra large)
- **xxl**: 1920px (2K)

Usage: `@include bp.lw(m)` for "less-width than medium" (max-width: 767px)

### SCSS Best Practices
1. **CSS Modules**: Use bracket notation for class names in SCSS:
   ```scss
   .component {
       // styles
   }
   ```
   Access in TypeScript: `className={styles['component']}`

2. **Import Order in SCSS**:
   ```scss
   @use '@base-styles-mixins/typography' as t;
   @use '@base-styles-mixins/bp';
   @use '@base-styles-variables/colors' as c;
   @use '@base-styles-variables/application' as app;
   ```

3. **Property Order** (enforced by stylelint):
   - Content
   - Position (position, top, right, bottom, left, float, clear)
   - Layout (display, z-index, flex, grid properties)
   - Clipping (overflow, clip)
   - Dimension (width, height, min/max)
   - Box Model (margin, padding, border, outline, box-shadow, cursor)
   - List styles
   - Visibility (opacity, visibility, transform)
   - Background
   - Typography (text, font properties, color)
   - Animation (transition, animation)

4. **Units**: Only use: `px`, `em`, `%`, `vh`, `vw`, `pt`, `s`, `ms`, `deg`, `fr`

5. **Never use**:
   - `!important`
   - Named colors (e.g., `red`, `blue`)
   - ID selectors for styling
   - Unknown breakpoints (only use defined breakpoints)

### Application Constants
- **Max Width**: 1200px (`app.$app-max-width`)
- **Scrollbar Width**: 10px

## Commit Message Convention
**CRITICAL**: All commits MUST follow this format:
```
[AH-X] Commit message
```
Where `X` can be a ticket number or `NoTicket` for general changes.

Examples:
- `[AH-123] Add dark mode toggle`
- `[AH-NoTicket] Fix typo in README`

This is enforced by commitlint and husky pre-commit hooks. Commits not following this pattern will be rejected.

## Testing

### Test Structure
- **Unit/Integration**: Jest + React Testing Library
- **E2E**: Cypress with Cypress Testing Library
- **Accessibility**: jest-axe (unit), cypress-axe (E2E)
- **Performance**: Lighthouse CI (CI/CD only)

### Test File Patterns
- Unit tests: Co-located with components or in `__tests__` folders
- Test files: `*.spec.tsx` or `*.spec.ts`
- Use `@test-utils` for test setup and utilities

## Code Quality Rules

### ESLint Key Rules
- **No `var`**: Always use `const` or `let`
- **React Hooks**: Rules of hooks enforced strictly
- **Accessibility**: jsx-a11y rules in strict mode
- **Security**:
  - No unsanitized HTML methods/properties
  - No secrets in code (tolerance: 4.5)
- **Import**: No duplicates, no cycles
- **SonarJS**: Code smell detection enabled

### Security Practices
- Always sanitize user input before rendering HTML
- Use `sanitize-html` for user-generated content
- Never commit secrets (enforced by eslint-plugin-no-secrets)
- Run Snyk scans regularly for vulnerability detection

## Accessibility (a11y)
The application prioritizes accessibility:
- Semantic HTML elements
- ARIA labels and roles where needed
- Keyboard navigation support
- Focus management with `react-focus-lock`
- Skip-to-content links
- WCAG 2.1 (AA) compliant color contrast and spacing
- A11y testing in both unit and E2E tests

### Accessibility Helpers
- Use `useSkipToContent()` hook for skip links
- Always provide `aria-label` for interactive elements
- Use `aria-hidden={true}` for decorative elements (e.g., icon backgrounds)
- Test all interactive features with keyboard only

## Development Workflow

### Running the Application
- **Development**: `npm start` (runs on port 1337)
- **Production Build**: `npm run build:prod`
- **Testing**: `npm test` (unit), `npm run test:e2e` (E2E)
- **Linting**: `npm run lint` (both scripts and styles)
- **Type Checking**: `npm run test:tsc`

### Pre-commit Hooks
Husky + lint-staged runs on commit:
1. ESLint with autofix on `*.{js,jsx,ts,tsx}`
2. Stylelint with autofix on `*.scss`
3. TypeScript type checking
4. Commitlint validation

### CI/CD
CircleCI pipeline includes:
- Linting (scripts + styles)
- Unit/Integration tests with coverage
- E2E tests (common + a11y)
- TypeScript type checking
- Lighthouse CI performance testing
- Snyk security scanning
- CodeCov coverage reporting

## Important Notes

### TypeScript Compilation
- Babel handles transpilation (NO type checking during build)
- Run `npm run test:tsc` separately for type checking
- Type checking runs in pre-commit hooks and CI/CD

### CSS Modules
- All component styles use CSS Modules
- Import pattern: `import styles from './Component.module.scss';`
- Access classes: `className={styles['class-name']}`

### SVG Imports
- SVGs are imported as React components via `@svgr/webpack`
- Usage: `import LogoSVG from '@assets/images/logo.svg';`
- Then: `<LogoSVG className={styles['logo']} />`

### i18n
- Use `i18next` for internationalization
- Access translations: `const { t } = useTranslates();`
- Translation keys: `t('namespace.key')`

### Redux State Management
- Use Redux Toolkit for reducers
- Use Redux Saga for side effects
- Slice files location: `@slices/*`

## Best Practices Summary

1. **Always read existing code** before making changes to understand patterns
2. **Follow the established component structure** (component, container, module.scss, index)
3. **Use TypeScript strictly** - no `any`, all interfaces prefixed with `I`
4. **Accessibility first** - semantic HTML, ARIA labels, keyboard navigation
5. **Security conscious** - sanitize inputs, no secrets, regular vulnerability scans
6. **Test thoroughly** - unit, integration, E2E, and a11y tests
7. **Commit format** - Always `[AH-X] Message`
8. **OKLCH colors only** - No hex, rgb, hsl
9. **Typography mixins** - Use defined mixins, don't hardcode font styles
10. **Import order matters** - NPM → @ aliases → relative → styles
11. **4 spaces everywhere** - Consistent indentation
12. **Run linting before committing** - Pre-commit hooks will catch issues
13. **Keep it simple** - Don't over-engineer, follow existing patterns
14. **No IDs for styling** - Only classes (CSS Modules)
15. **Performance matters** - Follow CLS best practices, lazy load when appropriate

## References
- Main documentation: `README.md`
- Additional docs: `_docs/` folder
- Storybook: Run `npm run storybook:start` for component library
- CircleCI Config: `.circleci/config.yml`
- EditorConfig: `.editorconfig`
- Git Hooks: `.husky/`
