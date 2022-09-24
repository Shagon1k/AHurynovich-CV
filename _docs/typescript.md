# TypeScript
1. [ TypeScript Compatibility ](#typescript-compatibility)
2. [ TypeScript Code Convention ](#typescript-code-convention)

## TypeScript Compatibility
**Application** is fully TypeScript compatible. JavaScript usage is supported and ***acceptable in edge cases***.
**Application**'s source ([/src](/src)) is fully TypeScript supported.
**Application**'s config ([/config](/config)) is TypeScript compatible.

## TypeScript Code Convention
- for [**Interfaces**](https://www.typescriptlang.org/docs/handbook/interfaces.html) ALWAYS **use "I" prefix** (e.g. `Entity` interface should be named `IEntity`);
    - for exported **external library interfaces** - export them **with "I" prefix** (e.g. `import { Store as IStore } from 'redux';`);
- **avoid [Any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)** type (prohibited by [TSConfig](/tsconfig.json));
- **declare Global variables** in [declarations.d.ts](/src/declarations.d.ts)
- when **typing Functions** it is recommended to **not create separate Type/Interface** for the <= 2 parameters cases (or <=2 fields of `options`-based single parameter);
- **using `@ts-ignore` is prohibited** in favour of **`@ts-expect-error` with reason comment**;
- **for React component**:
    - React Props Interface **should follow pattern**: `I[ComponentName]Props`;
    - **use generic type `React.FC`(`React.FunctionComponent`)** for ***function component***;
    - **use generic type `React.Component<Props, State>`** for ***class component***;
    - **use `React.ComponentType<Props>`** if some ***union Component type*** need (e.g. in HOCs);
    - **use `React.ReactEventHandler<HTML{input_type}Element>`** ONLY for ***generic event handler***;
    - **use `React.{event_type}Event<HTML{input_type}Element>`** for ***specific event handler***;
