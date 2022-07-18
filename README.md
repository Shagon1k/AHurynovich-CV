# Aliaksei's Curriculum Vitae project
My personal **CV Web Application** + **React boilerplate**.
Generally CV application follows CSR approach deploying final built to AWS S3. Than it is hosted using AWS S3 Static Web Hosting feature.

## Project's Goals
1) Create personal CV-based web application;
2) Project could be also used as general React-based boilerplate (see [Boilerplate Guide](#boilerplate-guide) for more details)
3) Learning, renewing and testing some FrontEnd application tools and features;

Taking 2nd and 3rd goals into account, some parts of the Project (e.g. Redux, ability to support SSR) were added mostly not to achieve the final working result, but either for creation of more unified boilerplate approach or just for learning purpose.

## Additional info
- [Config README](/config/README.md) - general configuration setup;
- [Client README](/src/client/README.md) - major source of truth for CSR approach, also used for SSR approach;
- [Common README](/src/common/README.md) - application common staff (services, utils) which could be used both on Client and Server;
- [Server README](/src/server/README.md) - server main folder, used only for SSR approach;

## Technology Stack
### Project Bundling
- **Application bundler** - [Webpack](https://webpack.js.org/)
- **JS compiler** - [Babel](https://babeljs.io/) (using Webpack ['babel-loader'](https://www.npmjs.com/package/babel-loader))
- **Styles compiler** - Webpack [sass-loader](https://www.npmjs.com/package/sass-loader) + [postcss-loader](https://www.npmjs.com/package/postcss-loader) with [autoprefixer](https://www.npmjs.com/package/autoprefixer)

### Application
- **View rendering** - [React](https://reactjs.org/)
- **View styling** - [SCSS](https://sass-lang.com/) + [CSS-Modules](https://webpack.js.org/loaders/css-loader/#modules)
- **Routing** - [React-Router](https://reactrouter.com/)
- **Application State management** - [Redux](https://redux.js.org/) (through [Redux-Toolkit](https://redux-toolkit.js.org/)) + [Redux-Saga](https://redux-saga.js.org/)
- **I18n utility** - [i18next](https://www.i18next.com/)
- **Document Head management** - [React-Helmet](https://www.npmjs.com/package/react-helmet) OR [React-Helmet-Async](https://www.npmjs.com/package/react-helmet-async) (SSR approach)
- **Device Detection utility** - [Mobile Detect](https://www.npmjs.com/package/mobile-detect)

### Server
> ***Note**: SSR approach only*

- **Server Application framework** - [Express](https://expressjs.com/)
- **Server Secureness utility** - [Helmet](https://helmetjs.github.io/)

### Code Styling
- **Static Code analyzer** - [ESLint](https://eslint.org/) + [StyleLint](https://stylelint.io/)
- **Code formatter** - [Prettier](https://prettier.io/)

### Testing
#### Unit Testing
- **Unit Testing framework** - [Jest](https://jestjs.io/)
- **React Components testing utility** - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
#### E2E testing
- **E2E Testing framework** - [Cypress](https://www.cypress.io/)
- **Test Cases commands extend utility** - [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/)

### Other
- **Application CI/CD utility** - [CircleCI](https://circleci.com/)
- **AWS Serverless deployment** - [Serverless](https://www.serverless.com/)
- **Git Hooks utility** - [Husky](https://typicode.github.io/husky/#/)
- **Search Engine configuration** - [Robots](https://www.robotstxt.org/)

## Project Structure
```
./
│
├───.circleci   // application CI/CD configuration (using CircleCI)
│
├───.github   // GitHub templates for Projects
│
├───.husky   // Git Hooks configuration
│
├───.vscode   // VSCode Workspace configuration (additionally for .editorconfig)
│
├───config   // configurations folder
│   │
│   ├───application
│   │
│   ├───environment
│   │
│   ├───test
│   │   │
│   │   ├───jest   // Unit Tests configuration folder
│   │   │   │
│   │   │   ├───test-utils   // Testing utils enhancement (e.g. RTL custom "render" util)
│   │   │   │   │
│   │   │   │   ├───custom-utils
│   │   │   │   │
│   │   │   │   │   test-utils.js
│   │   │   │   │   index.js
│   │   │   │   └───
│   │   │   │
│   │   │   │   jest.setup.js   // Jest tests pre-setup execution
│   │   │   └───
│   │   ├───cypress   // E2E Tests configuration folder
│   │   │   │
│   │   │   ├───downloads
│   │   │   │
│   │   │   ├───e2e
│   │   │   │
│   │   │   ├───fixtures
│   │   │   │
│   │   │   └───support
│   │   │
│   │   │   cypress.config.js   // E2E Tests (Cypress) main config file
│   │   │   jest.config.js   // Unit Tests (Jest) main config file
│   │   └───
│   │
│   ├───lint
│   │   │
│   │   ├───eslint
│   │   │
│   │   └───stylelint
│   │
│   ├───prettier
│   │
│   ├───webpack
│   │   │
│   │   ├───client   // webpack Client configuration
│   │   │
│   │   ├───helpers
│   │   │   │
│   │   │   ├───loaders   // webpack loaders (babel-loader, sass-loader, etc.)
│   │   │   │
│   │   │   ├───plugins   // webpack plugins (Favicon plugin, HTML plugin, etc.)
│   │   │   │
│   │   │   └───resolve   // webpack resolves (aliases, etc.)
│   │   │
│   │   └───server   // webpack Server configuration
│   │
│   ├───robots
│   │   │
│   │   │   robots.txt   // Robots configuration to enhance Web crawlers search
│   │   └───
│   │
│   │   README.md   // Config folder info
│   └───
│
├───src
│   │
│   ├───client   // Client source folder (CSR or SSR approaches)
│   │   │
│   │   ├───api
│   │   │
│   │   ├───assets
│   │   │   │
│   │   │   ├───fonts
│   │   │   │
│   │   │   └───images
│   │   │
│   │   ├───components   // React components folder
│   │   │   │
│   │   │   ├───base   // base components (Header, Button, Icon, etc.)
│   │   │   │
│   │   │   ├───pages   // general pages components (MainPage, etc.)
│   │   │   │
│   │   │   └───routes   // application routes setup
│   │   │
│   │   ├───reusables
│   │   │   │
│   │   │   ├───custom-hooks
│   │   │   │
│   │   │   ├───hocs
│   │   │   │
│   │   │   │   services-context.js   // Services context for components injection using specific Custom Hook/HOC
│   │   │   └───
│   │   │
│   │   ├───store   // Redux's Store
│   │   │   │
│   │   │   ├───middlewares
│   │   │   │
│   │   │   ├───slices
│   │   │   │
│   │   │   │   store.js   // main Store setup file (used for both CSR and SSR approaches)
│   │   │   │   store.reducer.js   // main reducer setup file
│   │   │   │   store.saga.js   // root saga setup file (main init + watch sagas)
│   │   │   └───
│   │   │
│   │   ├───styles   // main styles folder
│   │   │   │
│   │   │   ├───base   // base styles (mixins, functions, variables, etc.)
│   │   │   │
│   │   │   │   main.scss   // main styles file
│   │   │   │   reset-normalize.scss
│   │   │   └───
│   │   │
│   │   │   application.component.js   // main application Component
│   │   │   application.module.scss   // entry styles file
│   │   │   application.js   // main Create App file (used for both CSR and SSR approaches)
│   │   │   index.js   // Client entry file
│   │   │   README.md   // Client folder info
│   │   └───
│   │
│   ├───common    // common staff which could be potentially used both for Client and Server side
│   │   │
│   │   ├───services    // device detection, i18n, etc.
│   │   │
│   │   ├───utils   // reusable utils
│   │   │
│   │   │   README.md   // Common folder info
│   │   └───
│   │
│   ├───server   // Server source folder (SSR approach)
│   │   │
│   │   ├───api   // Server API router entry folder
│   │   │
│   │   ├───middlewares   // Server custom middlewares (services, app-render for SSR, etc.)
│   │   │
│   │   │   server.js   // main Server file
│   │   │   index.js   // Server entry file
│   │   │   README.md   // Server folder info
│   │   └───
│   │
│   │   index.html   // unified HTML template used as index file for CSR approach and rendering template for SSR approach
│   └───
│
├───dist
│   │
│   ├───client   // Client dist folder
│   │   │
│   │   ├───assets
│   │   │   │
│   │   │   └───favicons   // favicons collection folder (generated by Webpack Favicon plugin)
│   │   │
│   │   │   index.js   // result Client main js file
│   │   │   [chunk_hash].index.js   // js chunk file
│   │   │   styles.css   // result Client main styles file
│   │   │   index.html   // result HTML file (used as entry for CSR approach OR as template for SSR approach)
│   │   └───
│   │
│   ├───server   // Server dist folder (only for SSR approach)
│   │   │
│   │   │   index.js   // result Server main js file
│   │   │   [chunk_hash].index.js   // js chunk file
│   │   └───
│   └───
│
│   .editorconfig   // editor basic setup for IDE
│   babel.config.js   // Babel configuration
│   jsconfig.json   // VSCode JS configuration file for indicating directory root, aliases setup, etc.
│   serverless.yml   // AWS Serverless deployment configuration
│   package.json
│   package-lock.json
│   .gitignore
│   LICENSE
│   README.md
└───
```

## Run tasks
> ***Note**: Even though CSR approach is used as primary, application is also able to follow SSR approach.*

### CSR approach's tasks:
> ***Note**: Default CSR approach Client host port: 1337.*

**Start:**
- `npm start` (`npm run build:client:and:start:dev`) - Client development build task -> start with Webpack Watcher
- `npm run build:client:and:start:prod` - Client production build task -> start hosting (using [http-server](https://www.npmjs.com/package/http-server))

**Build:**
- `npm run build:client` - Client general build task (development is default)
- `npm run build:client:dev` - Client development build task
- `npm run build:client:prod` - Client production build task

**Deploy:**
- `npm run deploy:s3` - deployment task for static AWS S3 hosting (default)
- `npm run deploy:s3:nc` - deployment task for static AWS S3 hosting (no confirm)
- `npm run build:and:deploy:s3` - Client production build task -> deployment task for static AWS S3 hosting
- `npm run build:and:deploy:s3:nc` - Client production build task -> deployment task for static AWS S3 hosting (no confirm)

### SSR approach's tasks:
> ***Note**: Default SSR approach Server host port: 3000.*

**Start:**
- `npm run start:wssr` - Server start
- `npm run start:wssr:debug` - Server start with Debug

**Build:**
- `npm run build:client:wssr` - SSR Client general build task (development is default)
- `npm run build:client:wssr:dev` - SSR Client development build task
- `npm run build:client:wssr:prod` - SSR Client production build task
- `npm run build:server` - Server general build task (development build used as default)
- `npm run build:server:dev` - Server development build task
- `npm run build:server:prod` - Server production build task
- `npm run build:app:wssr:dev` - Application (Client + Server) development build task
- `npm run build:app:wssr:prod` - Application (Client + Server) production build task

### General tasks:
- `npm run build:clean` - Clean build ("dist") folder

**Test:**
- Unit Testing
    - `npm test` (`npm run test:unit`) - run Application Unit Tests
- E2E Testing
    - `npm test:e2e` (`npm run test:e2e:prod`) - run Application E2E Tests (production build used)
    - `npm run test:e2e:dev` - open launcher of Application E2E Tests (development build used)
    - `npm run test:e2e:run` - run Application E2E Tests (preliminary Application build REQUIRED (1337 port))
    - `npm run test:e2e:open` - open launcher of Application E2E Tests (preliminary Application build REQUIRED (1337 port))

**Lint:**
- `npm run lint:scripts` - Lint JS files
- `npm run lint:scripts:fix` - Lint JS files with autofix
- `npm run lint:styles` - Lint Styles files
- `npm run lint:styles:fix` - Lint Styles files with autofix
- `npm run lint` - Lint all (JS+Styles) files
- `npm run lint:fix` - Lint all (JS+Styles) files with autofix

## Boilerplate Guide
TBD once general setup be finished
Consider:
- index html content
- serverless file replace
- robots.txt file replace
- circleci config replace
- application config
- adapt environment config
- change favicon
- adapt lint (stylelint BPs must!)
- scss variables BP
- adapt .vscode settings/launch files
- setup GTM
- !!! Consider SSR + Lazy Loading (React18 Suspense usage + renderToPipeableStream, Loadable-Components package, etc.)
- PWA support: manifest.json is already created. However, in case application need to have full PWA support - ServiceWorker should be added.
