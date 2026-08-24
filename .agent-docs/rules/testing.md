# Testing Rules

## Required baseline

Choose checks in proportion to the change. The standard repository baseline is:

```text
npm run lint
npm run test:tsc
npm run test:ci
```

Static-preview or analytics-boundary changes also require:

```text
npm run preview:build
npm run test:analytics
```

Never run deployment scripts as verification. Tests must not send real analytics events or depend on production credentials.

## General principles

- Follow F.I.R.S.T.: Fast, Isolated, Repeatable, Self-validating, Thorough.
- Cover meaningful observable behavior, edge cases, and failure states; do not write tests only to raise coverage.
- Use the lowest suitable layer and avoid duplicating the same scenario across Jest and Cypress.
- Do not commit `.only` or unconditional `.skip`. A temporary skip needs a linked Issue and explicit rationale.
- Do not hide failures with broad mocks, silent fallbacks, or assertions that cannot fail.

## Jest and React Testing Library

- Jest configuration: `config/test/jest.config.js`.
- Place tests in `__tests__` beside the source under test.
- General test: `[name].spec.ts`; component test: `[Name].component.spec.tsx`; accessibility test: `[Name].component.a11y.spec.tsx`.
- One test file covers one source file. Store substantial mocks alongside the test as `[name].mock.ts`.
- Use Given/When/Then names and Arrange/Act/Assert test bodies.
- Query through `screen`; prefer `get*`, use `query*` for absence, and `find*` for async outcomes.
- Prefer `userEvent` to `fireEvent`, semantic roles to implementation selectors, and `jest-dom` matchers to raw DOM property checks.
- Test user behavior, accessibility semantics, and outcomes rather than component internals or CSS class names.
- Avoid snapshots unless a stable serialization contract specifically justifies one.

## Cypress

- Configuration and specs live under `config/test/cypress`.
- General specs: `e2e/[name].cy.js`; accessibility specs: `e2e/a11y/[name].a11y.cy.js`.
- Cypress is for meaningful browser flows that cannot be proved more cheaply. The existing `_example` specs are scaffolding, not broad production coverage.
- Do not run browser flows against production when they could trigger analytics, external messages, or other side effects.

## Lighthouse

- Lighthouse CI uses the generated `dist` and `config/test/lighthouse.config.js`.
- Run `npm run test:perf:ci` only when performance, SEO, PWA, or relevant built-output behavior changed and the environment can produce reliable evidence.
- Report category checks that are configured `off` or `warn`; do not describe them as passing gates.

## Built analytics verification

`npm run test:analytics` reads `dist/index.html` and evaluates the production analytics bootstrap in a fake DOM. It must prove:

- only `ahurynovich.com` and `www.ahurynovich.com` inject the GTM script;
- localhost, loopback, static preview, and arbitrary hosts do not inject it;
- no unconditional GTM noscript iframe or preconnect remains;
- the generated inline script matches the CSP hash.

This is deterministic build verification, not a full browser/network test. State that limitation in review evidence.

