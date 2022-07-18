# Client documentation
Documentation and guidelines for application's Client.
> ***Note:** Client supports both CSR (for static hosting) and SSR approaches which are separated using **WITH_SSR** environment variable.*

## General
- Client uses:
    - React for **View rendering**;
    - Redux for **Global State Management**;
    - Redux-Saga for **Redux's side-effects**;
    - React-Router for **routing**;
    - SCSS + CSS Modules for **styling**;
- Client entry file - *index.js*;
- Client main application's file - *application.js*;
- Client main application's Component - *application.component.js*;
- Client main styles file - *application.module.scss*;
- Client Global State main file - */store/store.js*;
- Application's Root element ID (APP_ROOT_ID) is configured and comes from **[Application's configuration](/config/application/application.config.js)**;

## Main areas
- **[API](/src/client/api/index.js)** - (*/api*) - used to handle different API calls;
    > ***Note:** For CSR approach it calls external API directly, for SSR approach it calls Server side (BFF).*
- **[Assets](/src/client/assets/)** - (*/assets*) - used to collect application's assets (fonts, images, favicon, etc.);
    - **[Fonts](/src/client/assets/fonts/)** - (*/assets/fonts*) - application's fonts folder;
    - **[Images](/src/client/assets/images/)** - (*/assets/images*) - application's static images folder;
- **[Components](/src/client/components/)** - (*/components*) - used to collect View React Components;
    - **[Base](/src/client/components/base/)** - (*/components/base*) - base Components (Header, Icon, Button, etc.);
    - **[Pages](/src/client/components/pages/)** - (*/components/pages*) - pages Components (MainPage, etc.);
    - **[Routes](/src/client/components/routes/routes.component.js)** - (*/components/routes*) - routing (React-Router) configuration for application's pages;
- **[Reusables](/src/client/reusables/)** - (*/reusables*) - used to collect React reusable entities (Custom Hooks, HOCs);
    - **[Custom Hooks](/src/client/reusables/custom-hooks/)** - (*/reusables/custom-hooks*) - Custom Hooks;
    - **[HOCs](/src/client/reusables/hocs/)** - (*/reusables/hocs*) - reusable HOCs;
    - **[some-name]** - (*/reusables/[some-name].js*) - reusables common (e.g. React Context files reused both for Custom Hook and HOC);
- **[Store](/src/client/store/store.js)** - (*/store*) - used to handle Global State Management (Redux);
    - **[Middlewares](/src/client/store/middlewares/index.js)** - (*/store/middlewares*) - Redux middlewares (e.g. saga.middleware.js);
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
    - do not forget to update *api/api.js*;
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
    - Custom Hook/HOC should have consistent name with each other (e.g. use-services.hook.js and with-services.hoc.js);
    - if added Custom Hook/HOC need something common (rare case, e.g. React Context) - add it to */reusables* root folder;
- Adding new **Store** slice:
    - add specific slice to */store/slices* folder;
    - new folder name should be consistent with inner file names (e.g. app-info/app-info.slice.js);
    - in [name].slice.js Redux's slice "actions" should be independent exports when Redux's slice "reducer" should be default export;
    - consider whether selectors need, if yes - selector file name should be consistent with according slice (e.g. app-info.selector.js);
    - consider whether side-effects handling need, if yes - saga file name should be consistent with according slice (e.g. app-info.saga.js);
    - do not forget to update *store/store.reducer.js*, *store/store.saga.js* and *store/store.js*;
- Adding new **Store** Middleware:
    - add specific middleware to */store/middlewares* folder;
    - do not forget to add index export file;
    - do not forget to update *store/store.js*;
- Follow **files naming conventions**:
    - each new folder/file name should follow kebab-case rule EXCEPT Components (*/components*) which should follow CamelCase rule;
    - each new entity file name should follow according entity template: `[name].slice.js`, `[name].saga.js`, `[name].middleware.js`, `[SomeName].component.js`, `[SomeName].container.js`, etc;

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
│   │   [some-name].js
│   └───
│
├───store
│   │
│   ├───middlewares
│   │
│   ├───slices
│   │
│   │   store.js
│   │   store.reducer.js
│   │   store.saga.js
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
│   application.component.js
│   application.module.scss
│   application.js
│   index.js
│   README.md
└───
```

## [!] To Consider
- Think about styles sub-Folder conventions.
