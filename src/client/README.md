# Client documentation
Documentation and guidelines for application's Client.
> ***Note:** Client supports both CSR (for static hosting) and SSR approaches which are separated using **WITH_SSR** environment variable.*

### General
- Client uses:
    - React for View rendering;
    - Redux for Global State Management;
    - Redux-Saga for Redux's side-effects;
    - React-Router for routing;
    - SCSS + CSS Modules for styling;
- Client entry file - *index.js*;
- Client main application's file - *application.js*;
- Client main application's Component - *application.component.js*;
- Client main styles file - *application.module.scss*;
- Client Global State main file - */store/store.js*;
- Application's Root element ID (APP_ROOT_ID) is configured and comes from **[Application's configuration](/config/application/application.config.js)**;

---
### Main areas
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
    - **[Reducers](/src/client/store/reducers/)** - (*/store/reducers*) - Redux reducers with according Actions/Sagas;
    - **[Selectors](/src/client/store/selectors/)** - (*/store/selectors*) - Redux's state selectors;
- **[Styles](/src/client/styles/)** - (*/styles*) - used to collect general styles;

---
### Folder's Conventions
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
    - add specific reducer to */reducers* folder;
    - new folder name should be consistent with inner file names (e.g. app-info/app-info.reducer.js);
    - do not forget to update *store/sore.reducer.js* and *store/sore.saga.js*;
    - consider whether selectors need, if yes - selector file name should be consistent with according reducer (e.g. app-info.reducer.js and app-info.selector.js);
- Adding new **Store** Middleware:
    - add specific middleware to */middlewares* folder;
    - do not forget to add index export file;
    - do not forget to update *store/store.js*;
- Follow **files naming conventions**:
    - each new folder/file name should follow kebab-case rule EXCEPT Components (*/components*) which should follow CamelCase rule;
    - each new entity file name should follow according entity template: `[name].reducer.js`, `[name].actions.js`, `[name].middleware.js`, `[SomeName].component.js`, [SomeName].container.js`, etc;

---
### Folder's Structure
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
│   ├───reducers
│   │
│   ├───selectors
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
│   │   reset.scss
│   └───
│
│   application.component.js
│   application.module.scss
│   application.js
│   index.js
│   README.md
└───
```

---
### [!] To Consider
- Think about styles sub-Folder conventions.
