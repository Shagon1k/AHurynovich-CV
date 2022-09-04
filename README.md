# Aliaksei's Curriculum Vitae project

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Shagon1k/AHurynovich-CV/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/Shagon1k/AHurynovich-CV/tree/main) [![codecov](https://codecov.io/gh/Shagon1k/AHurynovich-CV/branch/main/graph/badge.svg?token=BDI6WSS9T0)](https://codecov.io/gh/Shagon1k/AHurynovich-CV) [![Known Vulnerabilities](https://snyk.io/test/github/Shagon1k/AHurynovich-CV/badge.svg)](https://snyk.io/test/github/Shagon1k/AHurynovich-CV) [![GitHub MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/shagon1k/AHurynovich-CV/blob/main/LICENSE)

[![InsightsSnapshot](https://dl.circleci.com/insights-snapshot/gh/Shagon1k/AHurynovich-CV/main/Commitment(main)/badge.svg?window=30d)](https://app.circleci.com/insights/github/Shagon1k/AHurynovich-CV/workflows/Commitment(main)/overview?branch=main&reporting-window=last-30-days&insights-snapshot=true)

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
#### Unit/Integration Testing
- **Testing framework** - [Jest](https://jestjs.io/)
- **React Components testing utility** - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- **Testing A11y** - [Jest-Axe](https://www.npmjs.com/package/jest-axe)
#### E2E Testing
- **E2E Testing framework** - [Cypress](https://www.cypress.io/)
- **Test Cases commands extend utility** - [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/)
- **E2E Testing A11y** - [Cypress-Axe](https://www.npmjs.com/package/cypress-axe)
### Performance testing
- **Performance & Insights Testing utility** - [LightHouse CI](https://github.com/GoogleChrome/lighthouse-ci)
    > ***Note**: Performance Testing is only set up on **CI/CD pipeline level**. For **manual performance testing** you can use Chrome built-in Lighthouse DevTool.*
#### Tests Reports
- **Code Coverage Reports** - [CodeCov](https://about.codecov.io/)
- **Test Results Reports** - [CircleCI Test Insights](https://circleci.com/docs/insights-tests) (with help of [Jest JUnit](https://www.npmjs.com/package/jest-junit))

### Other
- **Application CI/CD utility** - [CircleCI](https://circleci.com/)
- **AWS Serverless deployment** - [Serverless](https://www.serverless.com/)
- **Git Hooks utility** - [Husky](https://typicode.github.io/husky/#/)
- **Search Engine configuration** - [Robots](https://www.robotstxt.org/)
- **Code vulnerabilities Scan tool** - [Snyk](https://snyk.io/)
- **UI Components Library tool** - [StoryBook](https://storybook.js.org/)

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
│   │   ├───jest   // Unit/Integration Tests configuration folder
│   │   │   │
│   │   │   ├───test-utils   // Testing utils enhancement (e.g. RTL custom "render" util)
│   │   │   │   │
│   │   │   │   ├───custom-utils
│   │   │   │   │
│   │   │   │   │   test-utils.js
│   │   │   │   │   index.js
│   │   │   │   └───
│   │   │   │
│   │   │   │   jest.setupAfterEnv.js   // Jest pre-setup execution (after installed to environment)
│   │   │   │   jest.setup.js   // Jest pre-setup execution (before installed to environment)
│   │   │   └───
│   │   ├───cypress   // E2E Tests configuration folder
│   │   │   │
│   │   │   ├───downloads
│   │   │   │
│   │   │   ├───e2e
│   │   │   │
│   │   │   ├───fixtures
│   │   │   │
│   │   │   ├───support
│   │   │   │
│   │   │   │   cypress.config.a11y.json   // E2E A11y Tests override configuration
│   │   │   │   cypress.config.e2e.json   // E2E General Tests override configuration
│   │   │   └───
│   │   │
│   │   │   cypress.config.js   // E2E Tests (Cypress) main config file
│   │   │   jest.config.js   // Unit/Integration Tests (Jest) main config file
│   │   │   lighthouse.config.js   // Performance Tests main config file (used for CI/CD pipeline)
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
│   │   ├───client   // Webpack Client configuration
│   │   │
│   │   ├───helpers
│   │   │   │
│   │   │   ├───loaders   // Webpack loaders (babel-loader, sass-loader, etc.)
│   │   │   │
│   │   │   ├───plugins   // Webpack plugins (Favicon plugin, HTML plugin, etc.)
│   │   │   │
│   │   │   └───resolve   // Webpack resolves (aliases, etc.)
│   │   │
│   │   ├───server   // Webpack Server configuration
│   │   │
│   │   └───storybook   // Webpack Components Library (StoryBook) configuration
│   │
│   ├───storybook   // UI Components Library configuration
│   │   │
│   │   ├───docs
│   │   │
│   │   ├───helpers
│   │   │   │
│   │   │   ├───argTypes   // StoryBook global argTypes and args (e.g. device type)
│   │   │   │
│   │   │   └───decorators   // StoryBook global decorators (e.g. Providers wrapper)
│   │   │
│   │   │   constants.js   // StoryBook sharable constants
│   │   │   main.js   // StoryBook main config file
│   │   │   preview.js   // StoryBook global stories setup (decorators, parameters, args, etc.)
│   │   │   webpack.config.storybook.es5.js   // StoryBook Webpack config loader (use Babel transpiler to provide ES6 Webpack config usage)
│   │   │   serverless.yml   // AWS Serverless Components Library deployment configuration
│   │   └───
│   │
│   ├───
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
│   serverless.yml   // AWS Serverless Application deployment configuration
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
- `npm run deploy:s3` - deployment task for Application static AWS S3 hosting (no confirm)
- `npm run build:and:deploy:s3` - Client production build task -> deployment task for static AWS S3 hosting (no confirm)

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
- **Unit/Integration Testing**
    - `npm test` (`npm run test`) - run Application Unit/Integration Tests (Common + A11y)
    - `npm test:with:reports` (`npm run test`) - run Application Unit/Integration Tests (Common + A11y). Reports (results and coverage) enabled.
    - `npm run test:ci` - run Application Unit/Integration Tests in CI mode (used for CI/CD pipeline level testing)
    - `npm run test:ci:with:reports` - run Application Unit/Integration Tests in CI mode (used for CI/CD pipeline level testing). Reports (results and coverage) enabled.
- **E2E Testing**
    - `npm run test:e2e` (`npm run test:e2e:dev`) - run All (Common + A11y) E2E Tests (development build used)
    - `npm run test:e2e:dev:open` - open launcher of All (Common + A11y) E2E Tests (development build used)
    - `npm run test:e2e:common:prod` - run Common E2E Tests (production build used)
    - `npm run test:e2e:a11y:prod` - run A11y E2E Tests (production build used)
- **Performance Testing**
    - `npm run test:perf:ci` - run Application Performance + Insights testing (Lighthouse CI, user for CI/CD pipeline level testing)

**Lint:**
- `npm run lint:scripts` - lint JS files
- `npm run lint:scripts:fix` - lint JS files with autofix
- `npm run lint:styles` - lint Styles files
- `npm run lint:styles:fix` - lint Styles files with autofix
- `npm run lint` - lint all (JS+Styles) files
- `npm run lint:fix` - lint all (JS+Styles) files with autofix

**Code vulnerabilities scan/monitor:**
- `npm run sca:test` - scan for vulnerabilities for known issues (with disrupting processes) - CI/CD integration
- `npm run sca:test:dev` - scan for vulnerabilities for known issues (with disrupting processes), include dev dependencies
- `npm run sca:monitor` - scan for vulnerabilities with exposing and storing results snapshot (without disrupting processes)
- `npm run sca:auth` - SCA tool (Snyk) authenticate (auth token required)

**Components Library maintaining:**
- `npm run storybook:start` - start Components Library application (localy)
- `npm run storybook:build` - build Components Library (dist folder: 'storybook-static')
- `npm run storybook:build:clean` - clean Components Library build
- `npm run storybook:deploy:s3` - deployment task for Components Library static AWS S3 hosting (no confirm)
- `npm run storybook:build:and:deploy:s3` - build Components Library -> deployment task for Components Library static AWS S3 hosting (no confirm)

## Boilerplate Guide
TBD once general setup be finished
Consider:
- use badges instead of boring listing for tech stack (https://badges.aleen42.com/, https://img.shields.io/)
- add ci-cd.md documentation file
- index html content
- Add note about SourceMaps for production build: was decided to use them ('source-map' webpack "devtool" value): 1) easy debug potential error; 2) it could potentially help others to learn/advice, there is MIT License for code => who cares about stealing? :D. Alternatively sourcemaps generation could be configured to be hosted to some authentication-based URL so be used only with access provided.
- add contents to all MD files
- enhance /_docs folder
- serverless file replace \ AWS static host management
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
- Add vulnerabilities scan (snyk) auth notes
- Make README documentation more convenient (use tables, etc.)
