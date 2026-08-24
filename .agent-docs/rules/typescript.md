# TypeScript Rules

## Repository baseline

- `tsconfig.json` uses `strict`, `noImplicitAny`, `noImplicitReturns`, `isolatedModules`, and `noEmit`.
- Babel transpiles TypeScript; it does not type-check. Run `npm run test:tsc` separately.
- TypeScript is standard for application source. Existing JavaScript configuration files remain valid; do not convert them without a task-specific reason.
- Match existing patterns instead of importing conventions from another codebase.

## Types and names

- Prefix interfaces with `I`, including aliased external interfaces such as `Store as IStore`.
- Prefix generic type parameters with descriptive `T` names, for example `TResponse`.
- Prefer interfaces for extendable object shapes. Use type aliases for unions, tuples, mapped types, and compositions where they are clearer.
- Use `import type` or inline `type` modifiers for type-only imports and re-exports so Babel can remove them safely.
- Avoid `any`; use an accurate type or `unknown` with explicit narrowing.
- Do not introduce `@ts-ignore`. Use `@ts-expect-error` with a reason only when the exception is unavoidable and verified.
- Keep component props beside the component as `I<ComponentName>Props`. Extract shared types only when they are genuinely reused.

## React and repository patterns

- The codebase consistently uses `React.FC`; preserve that convention in touched components unless an approved refactor changes it.
- Use `React.ComponentType<Props>` for component unions and the appropriate React event type for handlers.
- Keep file naming aligned with the existing entity suffixes: `.component.tsx`, `.container.tsx`, `.slice.ts`, `.saga.ts`, `.selector.ts`, and `.types.ts`.
- Prefer path aliases already defined in `tsconfig.json`, Jest, and Webpack. Do not add an alias in only one configuration.
- Preserve separate Container/Component files where the surrounding area uses that pattern.

## Errors and external data

- Do not introduce silent fallbacks. Handle errors deliberately and preserve diagnostic context.
- Treat fetched public content as untrusted data. Narrow unknown values and preserve sanitization at markup boundaries.
- Avoid assertions that merely suppress uncertainty. When existing code uses an assertion, do not broaden it without evidence.

