# AHurynovich CV

## Core contract

- The owner provides intent, constraints, and acceptance criteria. The agent chooses the smallest safe route, executes it, and proves the result.
- A task is done only when its deliverables and applicable checks are complete, or when a blocker and the missing evidence are stated explicitly.
- Keep one coherent objective per change. Flag unrelated findings instead of folding them into the task.
- Never claim that a test, review, preview, deployment, or external mutation happened unless it actually happened.
- Before broad changes touching more than five files or roughly 100 lines, present an artifact plan and get owner approval.

## Start and execution loop

1. Read the relevant entry in [`_docs/README.md`](_docs/README.md).
2. Inspect code and configuration because they are authoritative for current behavior.
3. Run `git status --short` before editing. Preserve unrelated worktree changes.
4. Analyze code, test, documentation, privacy, preview, and operational impact.
5. Make the smallest useful change, verify it, and report exact evidence.

Do not add a dependency, perform a structural refactor, or expand the approved scope without owner approval. Match established code conventions. Do not swallow errors or introduce silent fallbacks; surface failures, handle them intentionally, or log and rethrow them.

## Rule index

Read the matching rule before editing:

| Work | Rule |
| --- | --- |
| Git, branches, commits, pull requests | [`.agent-docs/rules/git.md`](.agent-docs/rules/git.md) |
| GitHub Issues and Project workflow | [`.agent-docs/rules/github-issues.md`](.agent-docs/rules/github-issues.md) |
| Tests and verification | [`.agent-docs/rules/testing.md`](.agent-docs/rules/testing.md) |
| TypeScript | [`.agent-docs/rules/typescript.md`](.agent-docs/rules/typescript.md) |

## Command map

Use Node 20 and npm 10 as declared in `package.json`.

| Task | Command |
| --- | --- |
| Install exact dependencies | `npm ci` |
| Start development server | `npm start` |
| Development build | `npm run build:dev` |
| Production build | `npm run build:prod` |
| Static preview build | `npm run preview:build` |
| Unit/integration tests | `npm run test:ci` |
| Lint scripts and styles | `npm run lint` |
| Type-check | `npm run test:tsc` |
| Verify built analytics boundary | `npm run test:analytics` after `npm run preview:build` |

Use focused commands from `package.json` when the task requires Cypress, Lighthouse, PWA, or Storybook evidence. Do not invent missing commands.

## Application and privacy boundary

- This is a public static CV website. There is no backend, database, authentication, or private application data store in this repository.
- Runtime CV content is owned outside the repository and fetched by the browser from the public S3 `content-config.json` endpoint defined in `src/api/app-content-config.api.ts`.
- Treat external content as untrusted input. Preserve sanitization, localization fallback, and explicit error reporting when changing its use.
- Do not copy personal content, credentials, production configuration values, or external-service secrets into fixtures, logs, agent files, previews, or documentation.
- Production analytics may run only on `ahurynovich.com` and `www.ahurynovich.com`. Localhost, IP hosts, static previews, and every other hostname must not request GTM.

## Static preview contract

- `dist` is the deployable static SPA artifact. `dist/index.html` is required.
- The static preview host does not run a build command. The agent must run `npm run preview:build` and leave an up-to-date ignored `dist` in the current worktree.
- For an Issue labelled `preview-required`, the preview build must correspond to the exact pull-request HEAD before the result moves to `Human Review`.
- Verify the build with `npm run test:analytics`, and ensure the preview host provides SPA fallback to `dist/index.html` for client-side routes.
- Preview and production use the same production-style Webpack build, but they are separate hosting and acceptance boundaries.
- `dist` and `node_modules` remain ignored and must never be committed.

## Production boundary

- Production remains AWS S3 Static Website + CloudFront + Route 53 through the existing CircleCI pipeline.
- Release readiness, owner acceptance, and production deployment are separate decisions.
- An agent never merges a pull request or deploys production autonomously.
- Never run `deploy:s3`, `build:and:deploy:s3`, `storybook:deploy:s3`, `storybook:build:and:deploy:s3`, a CloudFront invalidation, or any equivalent production mutation without separate explicit owner approval.
- Never copy AWS credentials into the repository, a worktree, a preview, or another host. Do not change AWS or CircleCI settings unless explicitly requested and separately approved.

## Work Tracking

GitHub Issues are the operational source of truth for executable work. Project 1 owns operational Status, Priority, and Effort. The target tracker is [Shagon1k Project 1](https://github.com/users/Shagon1k/projects/1); this section defines the repository contract and does not prove that the live Project is already aligned.

```text
Deferred -> inactive until its stated activation condition is met
Backlog -> ready for owner selection; no work has started
In progress -> owner start signal after live Project alignment is verified
Human Review -> reviewable PR, preview, artifact, or decision exists
Done -> owner accepted the result
```

- Target Status values: `Backlog`, `In progress`, `Human Review`, `Done`, `Deferred`.
- Target Priority values: `P0`-`P3`; target Effort values: `XS`-`XL`.
- `human-control` and `preview-required` are workflow labels, not Issue types.
- Create or mutate an Issue only when the owner explicitly asks. A routine implementation request does not authorize remote tracker changes.
- Moving an Issue to `In progress` starts its scoped work only under the active owner authorization. It never authorizes merge, deployment, destructive actions, or secret access.
- Every delivery pull request must link an Issue from Project 1. `ROADMAP.md` must not mirror the Issue backlog and is updated only on an explicit developer request from the owner.

## Git and pull requests

- GitHub Flow: short-lived branches from `main`, reviewed through a pull request, squash-merged by the owner.
- Issue delivery branches use `AH-&lt;github-issue-number&gt;_&lt;short-slug&gt;`.
- Commit messages and pull-request titles follow Conventional Commits.
- Do not commit, push, open a pull request, merge, or mutate remote state without the required owner authorization for that action.
- Never bypass hooks with `--no-verify`, overwrite user changes, or rewrite shared history.

## Project Documentation

Documentation is part of the same change:

| Change | Canonical documentation |
| --- | --- |
| Product scope or post-MVP direction | `ROADMAP.md` |
| Visible behavior, routes, responsive behavior, accessibility, localization | `DESIGN.md` |
| Runtime, boundaries, integrations, build, environments, deployment | `ARCHITECTURE.md` |
| Significant technical choice with alternatives | `_docs/decisions/README.md` and an approved ADR |
| Commands, conventions, or agent workflow | `AGENTS.md` and `.agent-docs/rules/*` |

Code and configuration remain authoritative for current behavior. Distinguish verified current state from proposed direction. In the final report, always state `Documentation impact` and list updated documents, or state `Documentation impact: none` with a short reason.
