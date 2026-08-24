# AHurynovich CV Roadmap

This is a compact post-MVP product contract. Executable work and operational status belong in [GitHub Project 1](https://github.com/users/Shagon1k/projects/1), not in this document.

## Product contract

| Field | Current contract |
| --- | --- |
| Product | A public, responsive personal CV web application for Aliaksei Hurynovich |
| Audience | Prospective employers, collaborators, clients, and professional peers |
| Core outcome | Visitors can understand Aliaksei's profile, skills, experience, projects, availability, and contact paths |
| Status | Production MVP is complete; further work is post-MVP maintenance or product improvement |
| Product authority | Owner intent and this Roadmap; executable scope remains in GitHub Issues |

## Implemented MVP scope

- Public static SPA with main, experience, passions, and Not Found routes.
- About, skills, collaboration reasons, colleague feedback, career history, past projects, and expertise presentation.
- Downloadable CV, source-code link, social links, contact flow, and accessibility statement.
- English and Russian localization with English fallback.
- Responsive layouts, keyboard-accessible interactions, reduced-motion handling, and accessibility-oriented components.
- External public content configuration so CV content can evolve separately from the application bundle.
- SEO metadata, robots, sitemap, social preview metadata, production analytics, and optional PWA build support.
- Production delivery through owner-controlled CircleCI approval to AWS static hosting.

## Explicitly out of scope

- Backend services, database, authentication, accounts, roles, billing, or private user data.
- Container-based local development or production deployment.
- Moving production deployment away from the established AWS/CircleCI model without a separately approved architecture decision.
- Storing AWS credentials or production secrets in the repository, previews, or application bundle.
- Treating the Roadmap as a duplicate Issue backlog or reconstructing undocumented project history.

## Baseline web concerns

| Area | Current position |
| --- | --- |
| Accessibility | First-class implemented concern: semantic components, keyboard/focus behavior, reduced motion, Jest Axe/Cypress Axe support; manual QA remains necessary |
| Responsive behavior | Shared mobile-to-wide breakpoint system in SCSS and TypeScript; visible changes require representative viewport review |
| SEO | Public metadata, canonical public URL metadata, robots, sitemap, and Lighthouse SEO checks are present |
| Analytics | GTM is a production-only capability and must never run from local or non-production preview hosts |
| Performance | Lazy routes, preloaded assets, production bundling, Webpack budgets, and Lighthouse CI form the current baseline |
| Security | Public client-only system; CSP, sanitization, dependency scanning, secret exclusion, and strict trust boundaries remain required |
| Browser support | `package.json` browserslist is authoritative: last three supported versions, excluding dead browsers, Opera Mini, Safari below 14, and iOS below 14 |
| Localization | English and Russian are active; English is the fallback |
| PWA | Optional independent production build; not part of the normal production/preview build contract |
| Testing | Jest/RTL, Cypress, accessibility tooling, type-checking, linting, and Lighthouse are available; checks are selected according to impact |
| Privacy | No accounts or private store; public CV/contact content and production analytics are the relevant personal-data boundaries |
| Deployment | `dist` is built by Webpack; production deploy is a separate manual owner decision in CircleCI |

## Post-MVP direction

Post-MVP work should improve the usefulness and reliability of the public CV without redesigning or re-platforming the completed MVP by default. Product-level directions are:

- keep professional content, availability, links, and downloadable CV accurate;
- evolve the passions route only after its user value and content are approved;
- improve accessibility, responsive behavior, SEO, analytics quality, and performance when evidence identifies a concrete gap;
- maintain dependency, browser, security, and production-delivery reliability;
- preserve the distinctive implemented visual identity while making targeted, reviewable improvements.

These directions are not scheduled work. Each executable change requires a meaningful Issue with observable acceptance criteria in Project 1.

## Decision log

| ID | Decision | Status | Revisit trigger |
| --- | --- | --- | --- |
| `PROD-001` | The repository and website remain public; runtime CV content remains in the external public S3 configuration | Fixed | Owner requests a privacy or content-ownership change |
| `PROD-002` | The completed MVP keeps its static client architecture and owner-controlled production deployment | Fixed | A product need cannot be met safely within the current boundary |
| `PROD-003` | Detailed passions content is not defined by this Roadmap | Deferred | Owner approves the intended audience value and content scope |

## Progressive elaboration

Project 1 is the source of truth for actionable work. Elaborate only the selected `In progress` Issue to implementation-ready detail. Keep later ideas at product-outcome level until selected, and use a Discovery Issue when evidence is required before implementation. Durable results update `ROADMAP.md`, `DESIGN.md`, `ARCHITECTURE.md`, or an approved ADR; routine task status remains in GitHub.

