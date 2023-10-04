# Source documentation
Documentation and guidelines for application's main source.

## General
- App uses:
    - React for **View rendering**;
    - Redux for **Global State Management**;
    - Redux-Saga for **Redux's side-effects**;
    - React-Router for **routing**;
    - SCSS + CSS Modules for **styling**;
- App source entry file - *index.ts*;
- App main application's file - *application.tsx*;
- App main application's Component - *Application.component.tsx*;
- App main styles file - *Application.module.scss*;
- App Global State main file - */store/store.ts*;
- Application's Root element ID (APP_ROOT_ID) is configured and comes from **[Application's configuration](/config/application/application.config.js)**;

## Main areas
|Area name|Path|Description|Notes|
|---|---|---|---|
|**[API](/src/api/index.ts)**|*/api*|used to handle different API calls||
|**[Assets](/src/assets/)**|*/assets*|used to collect application's assets (fonts, images, favicon, etc.)|**- [Fonts](/src/assets/fonts/)** - (*/assets/fonts*)<br/>**- [Images](/src/assets/images/)** - (*/assets/images*)|
|**[Components](/src/components/)**|*/components*|used to collect View React Components|**- [Base](/src/components/base/)** - (*/components/base*)<br/>**- [Pages](/src/components/pages/)** - (*/components/pages*)<br/>**- [Routes](/src/components/routes/routes.component.tsx)** - (*/components/routes*)<br/><br/>Covering Component with **Unit/Integration Tests** or adding Component to **UI Component Library** should follow according conventions (see below).|
|**[Reusables](/src/reusables/)**|*/reusables*|used to collect React reusable entities (Custom Hooks, HOCs)|**- [Custom Hooks](/src/reusables/custom-hooks/)** - (*/reusables/custom-hooks*)<br/>**- [HOCs](/src/reusables/hocs/)** - (*/reusables/hocs*)<br/>**- [some-name]** - (*/reusables/[some-name].ts*) - reusables common, for example, React Context files reused both for Custom Hook and HOC|
|**[Store](/src/store/store.ts)**|*/store*|used to handle Global State Management (Redux)|**- [Middlewares](/src/store/middlewares/index.ts)** - (*/store/middlewares*)<br/>**- [Slices](/src/store/slices/)** - (*/store/slices*) - Redux (Redux-Toolkit) slices with according Reducers/Actions/Sagas/Selectors|
|**[Styles](/src/styles/)**|*/styles*|used to collect general styles||
|**[Services](/src/services/index.ts)**|*/services*|used for storing application services like i18n, Device Detect, etc|As application uses Redux, some of services **could be used on State Management side** (e.g. Redux-Saga's side effects). For example, i18n service is used to correctly update Application language. Thus they were **moved to separate Facade entity** which is injected to Redux-Saga's context OR for specific Component (using Custom Hook/HOC).<br/><br/>Services are **initiated with User specific config** (base language, userAgent, etc) and potentially could depend one on each other (so main Facade could be used as **IoC container**).|
|**[Utils](/src/utils/index.ts)**|*/utils*|used for storing application utils||

## Folder's Conventions
- Adding new **App source Main area**:
    - add it in new specific folder;
    - once finished - update this README with new area;
- Adding new **API endpoint**:
    - add it in */api* subfolder;
    - new folder name should be consistent with according main file name;
    - do not forget to add index export file;
    - do not forget to update *api/api.ts*;
- Adding new **Assets**:
    - no specific rules;
- Adding new **Components**:
    - consider whether it is ***base***, ***common*** or ***page***:
        - ***base*** - components used as a part in other components across the project - *Button, Input, etc.*;
        - ***common*** - components used as a part of project pages structure (generally once per page) - *Header, Footer, ScrollTopButton, etc.*;
        - ***page*** - main component of specific page representation;
    - new folder name should be consistent with according Component main file name;
    - do not forget to add index export file;
    - separate Container and Component logic using specific files;
    - do not forget about CSS Modules approach with according file name convention;
    - if your Component requires specific styles based on props - consider unite such props in general `modifiers` prop;
        > 💡 ***Note**: Examples: [Input component](/src/components/base/Input/Input.component.tsx), [Section component](/src/components/base/Section/Section.component.tsx).*
        > ⚠️***Warn:** Try to avoid using `className` prop for styling if `modifiers` could be introduced instead (especially for common/base components).*

- Adding new **Reusables**:
    - try to add it both to Custom Hooks and HOCs to support both Class/Functional Components;
    - Custom Hook/HOC should have consistent name with each other (e.g. use-services.hook.ts and with-services.hoc.tsx);
    - if added Custom Hook/HOC need something common (rare case, e.g. React Context) - add it to */reusables* root folder;
- Adding new **Store** slice:
    - add specific slice to */store/slices* folder;
    - new folder name should be consistent with inner file names (e.g. app-info/app-info.slice.ts);
    - in [name].slice.ts Redux's slice "actions" should be independent exports when Redux's slice "reducer" should be default export;
    - consider whether selectors need, if yes - selector file name should be consistent with according slice (e.g. app-info.selector.ts);
    - consider whether side-effects handling need, if yes - saga file name should be consistent with according slice (e.g. app-info.saga.ts);
    - do not forget to update *store/store.reducer.ts*, *store/store.saga.ts* and *store/store.ts*;
- Adding new **Store** middleware:
    - add specific middleware to */store/middlewares* folder;
    - do not forget to add index export file;
    - do not forget to update *store/store.ts*;
- Follow **files naming conventions**:
    - each new folder/file name should follow kebab-case rule EXCEPT Components (*/components*) which should follow CamelCase rule;
    - each new entity file name should follow according entity template: `[name].slice.ts`, `[name].saga.ts`, `[name].middleware.ts`, `[SomeName].component.tsx`, `[SomeName].container.tsx`, etc;
- Covering with **Unit/Integration Tests**: please check **[Testing Documentation](/_docs/testing.md)** for more details;
- Adding **Component** to **UI Component Library**:
    - Story (Component Library description) should be added in separate sub-folder (*/\_\_stories\_\_*);
    - [UNDER CONSIDERATION] Story name is required to be stored in separate file (`[name].stories.constants.ts`) by name `STORY_TITLE` and use one of generally described namespaces (follow */config/storybook/constants* -> `NAMESPACES` options);
    - don't forget to add your Component to Overview tab (follow */config/storybook/docs/Overview.stories.mdx* for details);
    - Follow **Stories files naming conventions**:
        - Story file name should follow template: `[name].stories.tsx`;
        - [UNDER CONSIDERATION] Story constants file name should follow template: `[name].stories.constants.ts`;
- Adding new **Service**:
    - add it in */services* subfolder;
    - new folder name should be consistent with according main file name;
    - do not forget to add index export file;
    - do not forget to update *services/services.ts* types;
- Adding new **Util**:
    - search before for existing ones if already exists;
    - each new util should have TS documentation;
- Follow **files naming conventions**:
    - each new util/service folder/file name should follow kebab-case rule;
    - each new service's main file name should follow template: `[name].service.ts`;

## Folder's Structure
```
./
│
├───api
│
├───assets
│   │
│   ├───fonts
|   |
│   ├───images
|   |
|   |   preload.config.js
│   └───
│
├───components
│   │
│   ├───base
│   │
│   ├───common
│   │
│   ├───pages
│   │
│   └───routes
│
├───reusables
│   │
│   ├───custom-hooks
│   │
│   ├───hocs
│   │
│   │   [some-name].ts
│   └───
│
├───services
│
├───store
│   │
│   ├───middlewares
│   │
│   ├───slices
│   │
│   │   store.ts
│   │   store.types.ts
│   │   store.reducer.ts
│   │   store.saga.ts
│   └───
│
├───styles
│   │
│   ├───base
│   │
│   │   main.scss
│   │   font-declarations.scss
│   │   reset-normalize.scss
│   │   scrollbar.scss
│   └───
│
├───utils
│   │
│   ├───functions
│   │
│   ├───objects
│   │
│   ├───strings
│   │
│   └───user
│
│   Application.component.tsx
│   Application.module.scss
│   application.tsx
│   application.types.ts
|   declarations.d.ts
|   index.html
│   index.ts
│   README.md
└───
```

## [!] To Consider
- Think about styles sub-Folder conventions.
