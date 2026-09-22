# AHurynovich CV Design Contract

This document records the current implemented experience. It does not introduce a redesign.

## Sources and maturity

| Source | Authority |
| --- | --- |
| `src/components/`, `src/styles/`, and `src/assets/` | Canonical visual and interaction implementation |
| [`_docs/typography.md`](_docs/typography.md) | Typography usage and custom font guidance |
| `src/services/i18n/config/languages/` | Repository-owned RU/EN interface copy |
| Public S3 content config | Current CV content, external links, and translatable profile material |

No Figma, Sketch, or other external design source is recorded in this repository. Screenshots or future design files are supporting evidence only until the owner explicitly makes one authoritative. Do not invent design tokens, screen requirements, or visual states that are not present in the code or approved source.

## Experience direction

The site is a personal CV experience for prospective employers, collaborators, and professional peers. It presents profile information with a distinctive illustrated style while keeping navigation, content reading, CV download, and contact paths understandable across desktop and mobile layouts.

Exact colors, spacing, breakpoints, typography values, imagery, and motion live in the SCSS and assets. Reuse the existing foundations and components rather than recreating approximate variants.

## Foundations

- Raleway is the body typeface and Moyenage is the heading typeface; use existing typography mixins and configured weights.
- Responsive behavior uses the shared SCSS breakpoints and matching TypeScript breakpoint configuration. Do not introduce one-off breakpoints without aligning both sources.
- SCSS Modules scope component styles; global styles and shared mixins live under `src/styles`.
- Decorative illustrations use empty alternative text or `aria-hidden`; meaningful images and icons require localized accessible names.
- Animation-heavy components already provide reduced-motion media-query behavior. New motion must preserve a useful static state under `prefers-reduced-motion`.

## Routes and screens

| Route | Current purpose | Important states |
| --- | --- | --- |
| `/` | About, skills, reasons to collaborate, colleague feedback | Lazy loading; externally supplied content may be empty |
| `/experience` | Career flow, past projects, expertise | Lazy loading; externally supplied lists may be empty |
| `/passions` | Reserved public route | Localized under-construction state |
| `*` | Unknown route | Localized Not Found state |

The shared shell contains an accessibility helper, header/navigation, main content, footer/contact area, and scroll-to-top control. Desktop and mobile navigation are separate implemented presentations of the same route set.

## Localization and content ownership

- English and Russian are supported; English is the default and content fallback.
- Repository JSON owns common interface copy. The public content config owns personal CV copy and external URLs.
- Layout and components must tolerate RU/EN text expansion and missing optional translated content.
- External markup must continue through the established sanitization path. Do not move personal production content into repository fixtures merely for visual convenience.

## Interaction and accessibility

- All core actions must remain keyboard reachable with visible focus.
- Pointer controls provide a 44 by 44 pixel target or an equivalent hit area. Adjacent targets must not
  overlap.
- Preserve the accessibility helper and skip-to-section behavior, focus return after dialogs/mobile navigation, focus locking, semantic landmarks, live regions, and route-change scroll/focus behavior.
- Hover-only information must also be available through keyboard focus or another non-hover interaction.
- Touch layouts must not depend on hover. Interactive targets need accessible names and correct expanded/current state where applicable.
- Narrow viewports, including desktop browsers at increased zoom, use compact navigation and must not
  introduce page-level horizontal scrolling.
- Accessibility automation supports Jest Axe and Cypress Axe, but automated checks do not replace keyboard, focus, screen-reader semantics, contrast, and reduced-motion review.

## Loading, empty, error, and unavailable states

- Lazy route chunks use the shared overlay Loader and expose `aria-busy`/live-region feedback.
- The content config is loaded before the initial React render. A failed or invalid response is logged and currently falls back to empty default content; no dedicated user-visible error or retry screen is implemented.
- Empty external arrays produce section-specific empty/incomplete surfaces according to current component behavior. Do not describe a polished empty-state contract unless it is implemented and reviewed.
- `/passions` deliberately uses the under-construction view.
- Unknown routes use the dedicated Not Found view.

## Design QA

Visible changes should be reviewed against the implementation source at representative mobile, tablet, desktop, and wide layouts covered by the shared breakpoint system. Evidence should include, as applicable:

- route and important state inspected from the exact build;
- RU and EN content, including text expansion;
- keyboard order, focus visibility, focus restoration, and skip navigation;
- reduced-motion behavior;
- meaningful image/icon names and decorative-image treatment;
- external-content loading, missing content, and Not Found behavior;
- no unintended layout overflow or reliance on hover-only interaction.

When a visual or interaction change is accepted, update this contract in the same task if it changes a durable expectation.
