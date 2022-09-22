# Client documentation
Documentation and guidelines for application's Client.
> 💡 ***Note**: Client supports both CSR (for static hosting) and SSR approaches which are separated using **WITH_SSR** environment variable.*

## General
- Client uses:
    - React for **View rendering**;
    - Redux for **Global State Management**;
    - Redux-Saga for **Redux's side-effects**;
    - React-Router for **routing**;
    - SCSS + CSS Modules for **styling**;
- Client entry file - *index.ts*;
- Client main application's file - *application.tsx*;
- Client main application's Component - *Application.component.tsx*;
- Client main styles file - *Application.module.scss*;
- Client Global State main file - */store/store.ts*;
- Application's Root element ID (APP_ROOT_ID) is configured and comes from **[Application's configuration](/config/application/application.config.js)**;

## Main areas
- **[API](/src/client/api/index.ts)** - (*/api*) - used to handle different API calls;
    > 💡 ***Note**: For CSR approach it calls external API directly, for SSR approach it calls Server side (BFF).*
- **[Assets](/src/client/assets/)** - (*/assets*) - used to collect application's assets (fonts, images, favicon, etc.);
    - **[Fonts](/src/client/assets/fonts/)** - (*/assets/fonts*) - application's fonts folder;
    - **[Images](/src/client/assets/images/)** - (*/assets/images*) - application's static images folder;
- **[Components](/src/client/components/)** - (*/components*) - used to collect View React Components;
    - **[Base](/src/client/components/base/)** - (*/components/base*) - base Components (Header, Icon, Button, etc.);
    - **[Pages](/src/client/components/pages/)** - (*/components/pages*) - pages Components (MainPage, etc.);
    - **[Routes](/src/client/components/routes/routes.component.tsx)** - (*/components/routes*) - routing (React-Router) configuration for application's pages;
    > 💡 ***Note**: Covering Component with **Unit/Integration Tests** or adding Component to **UI Component Library** should follow according conventions (see below).*
- **[Reusables](/src/client/reusables/)** - (*/reusables*) - used to collect React reusable entities (Custom Hooks, HOCs);
    - **[Custom Hooks](/src/client/reusables/custom-hooks/)** - (*/reusables/custom-hooks*) - Custom Hooks;
    - **[HOCs](/src/client/reusables/hocs/)** - (*/reusables/hocs*) - reusable HOCs;
    - **[some-name]** - (*/reusables/[some-name].ts*) - reusables common (e.g. React Context files reused both for Custom Hook and HOC);
- **[Store](/src/client/store/store.ts)** - (*/store*) - used to handle Global State Management (Redux);
    - **[Middlewares](/src/client/store/middlewares/index.ts)** - (*/store/middlewares*) - Redux middlewares (e.g. saga.middleware.ts);
    - **[Slices](/src/client/store/slices/)** - (*/store/slices*) - Redux (Redux-Toolkit) slices with according Reducers/Actions/Sagas/Selectors;
- **[Styles](/src/client/styles/)** - (*/styles*) - used to collect general styles;

## Folder's Conventions
- Adding new **Client Main area**:
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
    - consider whether it is base or new page;
    - new folder name should be consistent with according Component main file name;
    - do not forget to add index export file;
    - separate Container and Component logic using specific files;
    - do not forget about CSS Modules approach with according file name convention;
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
    - Story name is required to be stored in separate file (`[name].stories.constants.ts`) by name `STORY_TITLE` and use one of generally described namespaces (follow */config/storybook/constants* -> `NAMESPACES` options);
    - don't forget to add your Component to Overview tab (follow */config/storybook/docs/Overview.stories.mdx* for details);
    - Follow **Stories files naming conventions**:
        - Story file name should follow template: `[name].stories.tsx`;
        - Story constants file name should follow template: `[name].stories.constants.ts`;

## Folder's Structure
```
./
│
├───api
│
├───assets
│   │
│   ├───fonts
│   │
│   └───images
│
├───components
│   │
│   ├───base
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
├───store
│   │
│   ├───middlewares
│   │
│   ├───slices
│   │
│   │   store.ts
│   │   store.reducer.ts
│   │   store.saga.ts
│   └───
│
├───styles
│   │
│   ├───base
│   │
│   │   main.scss
│   │   reset-normalize.scss
│   └───
│
│   Application.component.tsx
│   Application.module.scss
│   application.tsx
│   index.ts
│   README.md
└───
```

## [!] To Consider
- Think about styles sub-Folder conventions.
