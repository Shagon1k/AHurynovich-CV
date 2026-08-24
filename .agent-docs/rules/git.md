# Git Rules

## Before editing

- Run `git status --short` and identify unrelated owner changes.
- Start Issue-scoped delivery work from `main` unless the owner supplies another base.
- Keep one logical concern per branch and pull request.
- Never reset, revert, discard, or overwrite owner changes without explicit approval.

## Branches

Issue delivery branch format:

```text
AH-<github-issue-number>_<short-slug>
```

Use a real GitHub Issue number and a short lowercase kebab-case slug, for example `AH-42_guard-production-analytics`. Do not use the legacy manual `[AH-X]` numbering convention.

## Conventional Commits

Format:

```text
<type>(<optional-scope>): <imperative subject>
```

Allowed types:

| Type | Use |
| --- | --- |
| `feat` | User-facing capability |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `test` | Tests only |
| `refactor` | Structure change without behavior change |
| `perf` | Performance improvement |
| `build` | Build system or dependency change |
| `ci` | CI/CD configuration |
| `chore` | Maintenance without product behavior change |
| `style` | Formatting only |

Use an imperative subject without a trailing period. A body may explain why; leave a blank line after the header. Do not bypass commitlint or Husky with `--no-verify`.

## Pull requests

- Every delivery pull request links its GitHub Issue from Project 1 with a closing keyword where appropriate.
- The pull-request title follows Conventional Commits because it becomes the squash commit message.
- Complete the repository pull-request template with verification and documentation evidence.
- For `preview-required`, build ignored `dist` from the exact pull-request HEAD before requesting human review.
- The owner performs the squash merge. Agents never merge autonomously.

## Authorization and safety

- Do not commit, push, open a pull request, or change GitHub state without owner authorization for that action.
- Never force-push a shared branch. Use `--force-with-lease` only on an owner-approved private work branch when unavoidable.
- Never commit `dist`, `node_modules`, credentials, local environment files, analytics test output, or unrelated generated artifacts.
- Production deployment is not part of normal Git delivery and always requires separate explicit approval.

