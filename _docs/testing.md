# Testing

The repository supports unit/integration, accessibility, browser E2E, type, lint, built-output, and Lighthouse checks. Use the lowest-cost layer that proves the changed behavior and do not duplicate scenarios across layers.

## Command reference

| Purpose | Command |
| --- | --- |
| Jest, local | `npm test` |
| Jest, CI mode | `npm run test:ci` |
| Jest with reports | `npm run test:with:reports` |
| Jest CI with reports | `npm run test:ci:with:reports` |
| TypeScript | `npm run test:tsc` |
| ESLint + Stylelint | `npm run lint` |
| All Cypress specs against dev build | `npm run test:e2e` |
| Interactive Cypress | `npm run test:e2e:dev:open` |
| Common Cypress specs against production build | `npm run test:e2e:common:prod` |
| Accessibility Cypress specs against production build | `npm run test:e2e:a11y:prod` |
| Lighthouse CI | `npm run test:perf:ci` |
| Static preview build | `npm run preview:build` |
| Built analytics boundary | `npm run test:analytics` after a production-style build |

CircleCI runs lint, TypeScript, Jest, and a production build on feature branches. The `main` workflow additionally creates Jest reports for CircleCI Insights, uploads coverage to Codecov, runs Snyk and Lighthouse, and keeps production deployment behind manual approval. See [the CI/CD guide](branching-strategy-and-ci-cd.md).

## General conventions

- Follow F.I.R.S.T.: tests should be Fast, Isolated, Repeatable, Self-validating, and Thorough.
- Test meaningful happy paths, edges, failure states, security, and accessibility risks rather than chasing an arbitrary coverage number.
- Place unit/integration tests in a `__tests__` directory next to the source under test.
- Keep one source file under test per test file. Put substantial mocks beside it as `[name].mock.{js|ts}`.
- Prefer Given/When/Then scenario names and Arrange/Act/Assert test bodies.
- Use setup hooks for setup and teardown hooks for cleanup.
- Never commit `.only` or an unexplained unconditional `.skip`.

## Jest and React Testing Library

Configuration: [`config/test/jest.config.js`](../config/test/jest.config.js). Shared utilities are exported through `@test-utils`; decorated helpers live under `@test-utils/custom`.

File names:

- general module: `[name].spec.{js|ts}`;
- React component: `[Name].component.spec.{js|tsx}`;
- React accessibility: `[Name].component.a11y.spec.{js|tsx}`.

Component tests should verify user-observable behavior:

- query with `screen` and semantic roles;
- use `get*` by default, `query*` for non-existence, and `find*` for asynchronous outcomes;
- prefer `userEvent` to `fireEvent`;
- use `jest-dom` matchers such as `toBeDisabled()` and `toBeVisible()`;
- avoid internal state, implementation selectors, CSS class assertions, and snapshots;
- use `renderHook` for reusable custom hooks rather than helper components;
- use Jest Axe for meaningful accessibility coverage, while recognizing that automation does not replace manual review.

## Cypress

Configuration: [`config/test/cypress.config.js`](../config/test/cypress.config.js).

- General specs live in `config/test/cypress/e2e` as `[name].cy.js`.
- Accessibility specs live in `config/test/cypress/e2e/a11y` as `[name].a11y.cy.js`.
- `cypress.config.common.json` excludes accessibility specs; `cypress.config.a11y.json` selects them.
- Use Cypress for complete user journeys that cannot be proved more cheaply with Jest/RTL.
- Do not point side-effecting tests at production or send real analytics events.

The current `_example` Cypress specs are scaffolding and do not constitute broad production E2E coverage. Do not report them as production acceptance evidence unless they are first made applicable to the current UI.

## Built analytics check

`npm run test:analytics` reads generated `dist/index.html` and executes only its production analytics bootstrap in an isolated fake DOM. It verifies:

- GTM is injected for `ahurynovich.com` and `www.ahurynovich.com`;
- localhost, loopback, preview subdomains, lookalike domains, and arbitrary hosts inject nothing;
- no unconditional GTM noscript iframe or preconnect remains;
- the generated inline script matches the CSP hash.

The verifier performs no network request and emits no real analytics event. It is a deterministic generated-output check, not a full browser test; record that limitation in pull-request evidence.

## Lighthouse

Configuration: [`config/test/lighthouse.config.js`](../config/test/lighthouse.config.js). Lighthouse serves `dist` as a SPA and checks `/`, `/experience`, and `/passions` across three runs.

The configured gates cover performance, best practices, and SEO. Some accessibility and individual audits are currently `off` or `warn`; do not claim those as passing hard gates. Optional PWA behavior is excluded from the standard production build and has its own `npm run build:prod:pwa` build command.

## Dependency scanning

Snyk commands remain available as `npm run sca:test`, `npm run sca:test:dev`, and `npm run sca:monitor`. Authentication requires an owner-controlled token and must not copy credentials into the repository, shell output, or documentation. Dependency upgrades are separate work and require owner approval.
