# GitHub Issues and Project 1

## Canonical tracker

```yaml
repository: Shagon1k/AHurynovich-CV
project:
  owner: Shagon1k
  number: 1
  url: https://github.com/users/Shagon1k/projects/1
target_fields:
  Status: [Backlog, In progress, Human Review, Done, Deferred]
  Priority: [P0, P1, P2, P3]
  Effort: [XS, S, M, L, XL]
```

This is the target repository workflow. Verify the live Project before claiming that its fields, options, views, or automation are aligned.

GitHub Issues own executable work. Project 1 owns operational Status, Priority, and Effort. Pull requests own review and delivery evidence. `ROADMAP.md` owns product direction and must not duplicate the Issue backlog.

## Request routing

```text
implement / fix / change -> perform the scoped repository task
create / record / track an Issue -> create or update GitHub work only with explicit approval
defer until a condition -> use Deferred and record the activation trigger
```

Do not infer authorization to create an Issue from an implementation request.

## Lifecycle

- `Deferred`: inactive; an observable activation condition is still unmet.
- `Backlog`: ready for owner selection; no delivery work has started.
- `In progress`: owner start signal after live Project alignment is verified and the current run is authorized.
- `Human Review`: a reviewable pull request, preview, artifact, or decision exists.
- `Done`: the owner accepted the result.

Never select Backlog work autonomously. `Done` is not an agent self-approval state. No status authorizes merge or production deployment.

## Issue creation

1. Search open and closed Issues for duplicates.
2. Select the outcome type:
   - observed behavior differs from the product promise -> `bug.yml`;
   - user-facing capability or improvement -> `feature.yml`;
   - maintainability, reliability, or operational cost -> `tech-debt.yml`;
   - evidence-backed decision before implementation -> `discovery.yml`.
3. Preserve the template title prefix and provide observable acceptance criteria.
4. Describe the outcome, not a predetermined implementation, unless the implementation is itself an approved constraint.
5. Keep one focused pull request per Issue when practical.
6. Verify Project 1 membership and fields before reporting success.

Do not add labels that duplicate Issue type. `human-control` and `preview-required` are workflow labels:

- `human-control`: owner checkpoints are required before specified mutations or decisions.
- `preview-required`: an exact-HEAD `dist` and working static preview are required before `Human Review`.

Issue Forms do not set `projects`, assignees, or type labels. Blank Issues remain disabled.

## Delivery linkage

- Branch: `AH-<github-issue-number>_<short-slug>`.
- Every delivery pull request links an Issue from Project 1.
- Move to `Human Review` only when acceptance evidence is reviewable.
- Move to `Done` only after owner acceptance.
- Remote Issue or Project mutations require explicit authorization and must be read back before being reported as complete.
