# AH Curriculum Vitae project
<img src="/_docs/assets/project-github-logo.jpg" alt="react boilerplate" align="center" />
<div align="right">based on my <a href="https://github.com/Shagon1k/React-Universal-Boilerplate">React Universal Boilerplate</a></div>

<br/>

<div align="center">My personal <b>CV Web Application</b> written on <b>TypeScript</b>.</div>

<br/>

<div align="center">Generally <b>Application</b> follows <b>Static CSR approach</b> deploying final build to <b>AWS S3</b>. Than it is hosted using <b>AWS S3 Static Web Hosting</b> feature.</div>

<br/>

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Shagon1k/AHurynovich-CV/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/Shagon1k/AHurynovich-CV/tree/main) [![codecov](https://codecov.io/gh/Shagon1k/AHurynovich-CV/branch/main/graph/badge.svg?token=BDI6WSS9T0)](https://codecov.io/gh/Shagon1k/AHurynovich-CV) [![Known Vulnerabilities](https://snyk.io/test/github/Shagon1k/AHurynovich-CV/badge.svg)](https://snyk.io/test/github/Shagon1k/AHurynovich-CV) [![GitHub MIT License](https://img.shields.io/badge/license-MIT-00c8e6.svg)](https://github.com/shagon1k/AHurynovich-CV/blob/main/LICENSE)

[![InsightsSnapshot](https://dl.circleci.com/insights-snapshot/gh/Shagon1k/AHurynovich-CV/main/Commitment(main)/badge.svg?window=30d)](https://app.circleci.com/insights/github/Shagon1k/AHurynovich-CV/workflows/Commitment(main)/overview?branch=main&reporting-window=last-30-days&insights-snapshot=true)


[![OpenVSCode](https://img.shields.io/badge/Open_in_VSCode_online-black?style=for-the-badge&labelColor=grey&logo=visualstudiocode)](https://github1s.com/Shagon1k/AHurynovich-CV)

1. [ Technology Stack ](#technology-stack)
2. [ Run tasks ](#run-tasks)
3. [ Project structure ](#project-structure)
4. [ Additional documentation ](#additional-documentation)
4. [ Issues ](#issues)
4. [ License ](#license)

## Technology stack
### Project Bundling
[![Webpack](https://img.shields.io/badge/Webpack-application_bundler-00c8e6?labelColor=grey&logo=webpack)](https://webpack.js.org/)
[![Babel](https://img.shields.io/badge/Babel-JS/TS_compile-00c8e6?labelColor=grey&logo=babel)](https://babeljs.io/) [![SASS-Loader](https://img.shields.io/badge/SASS--Loader-grey?labelColor=grey&logo=sass)](https://www.npmjs.com/package/sass-loader)[![PostCSS-Loader](https://img.shields.io/badge/PostCss--Loader-grey?labelColor=grey&logo=postcss)](https://www.npmjs.com/package/postcss-loader)[![Autoprefixer](https://img.shields.io/badge/SASS--Loader-styles_compile-00c8e6?labelColor=grey&logo=autoprefixer)](https://www.npmjs.com/package/autoprefixer)

<details>
    <summary>💡 <b>Note</b> (TypeScript tranpiling using Babel)</summary>
Transpiling TypeScript <b>using Babel</b> (with Webpack <a href="https://www.npmjs.com/package/babel-loader">'babel-loader'</a>, <b>NOT</b> <a href="https://www.npmjs.com/package/ts-loader">'ts-loader'</a>) <b>was chosen</b>: 1) faster compilation (no types check); 2) having single source of compilation - Babel.

On the other hand, using Babel compilation results in <b>completely lose of type safety and TypeScript checks</b> during this phase. That's why additional test script (<a href="https://www.typescriptlang.org/docs/handbook/compiler-options.html">tsc</a>) were presented <b>to check as pre-commit(push) hook + in scope of CI/CD</b>.
</details>

### Application
[![TypeScript](https://img.shields.io/badge/TypeScript-development_language-00c8e6?labelColor=grey&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-view_rendering-00c8e6?labelColor=grey&logo=react)](https://reactjs.org/) [![React-Router](https://img.shields.io/badge/React--Router-routing-00c8e6?labelColor=grey&logo=reactrouter)](https://reactrouter.com/) [![Redux](https://img.shields.io/badge/Redux-grey?labelColor=grey&logo=redux)](https://redux.js.org/)[![Redux-Saga](https://img.shields.io/badge/Redux--Saga-state_management-00c8e6?labelColor=grey&logo=reduxsaga)](https://redux-saga.js.org/)
[![SCSS](https://img.shields.io/badge/SCSS-grey?labelColor=grey&logo=sass)](https://sass-lang.com/)[![CSS-Modules](https://img.shields.io/badge/CSS--Modules-view_styling-00c8e6?labelColor=grey&)](https://webpack.js.org/loaders/css-loader/#modules) [![I18n-Next](https://img.shields.io/badge/i18next-i18n_utility-00c8e6?labelColor=grey&logo=i18next)](https://www.i18next.com/) [![React-Helmet](https://img.shields.io/badge/React--Helmet-head_management-00c8e6?labelColor=grey&logo=npm)](https://www.npmjs.com/package/react-helmet) [![Mobile-Detect](https://img.shields.io/badge/Mobile--Detect-device_detection-00c8e6?labelColor=grey&logo=npm)](https://www.npmjs.com/package/mobile-detect)

### Code Styling
[![ESLint](https://img.shields.io/badge/ESLint-JS/TS_static_code_analyzer-00c8e6?labelColor=grey&logo=eslint)](https://eslint.org/) [![StyleLint](https://img.shields.io/badge/StyleLint-(S)CSS_static_code_analyzer-00c8e6?labelColor=grey&logo=stylelint)](https://stylelint.io/) [![Prettier](https://img.shields.io/badge/Prettier-code_formatter-00c8e6?labelColor=grey&logo=prettier)](https://prettier.io/)

### Testing
#### Unit/Integration Testing
[![Jest](https://img.shields.io/badge/Jest-testing_framework-00c8e6?labelColor=grey&logo=jest)](https://jestjs.io/) [![RTL](https://img.shields.io/badge/RTL-React_components_testing-00c8e6?labelColor=grey&logo=testinglibrary)](https://testing-library.com/docs/react-testing-library/intro) [![Jest-Axe](https://img.shields.io/badge/Jest_Axe-testing_a11y-00c8e6?labelColor=grey&logo=jest)](https://www.npmjs.com/package/jest-axe)

#### E2E Testing
[![Cypress](https://img.shields.io/badge/Cypress-E2E_testing_framework-00c8e6?labelColor=grey&logo=cypress)](https://www.cypress.io/) [![Cypress-Testing-Library](https://img.shields.io/badge/Cypress_Testing_Library-test_commands_extend-00c8e6?labelColor=grey&logo=testinglibrary)](https://testing-library.com/docs/cypress-testing-library/intro/) [![Cypress-Axe](https://img.shields.io/badge/Cypress_Axe-E2E_testing_a11y-00c8e6?labelColor=grey&logo=cypress)](https://www.npmjs.com/package/cypress-axe)

#### Performance testing
[![LightHouse-CI](https://img.shields.io/badge/LightHouse_CI-performance_&_insights_testing-00c8e6?labelColor=grey&logo=lighthouse)](https://github.com/GoogleChrome/lighthouse-ci)

<details>
    <summary>💡 <b>Note</b> (Performance Testing usage)</summary>
    Performance Testing is only set up on <b>CI/CD pipeline level</b>. For <b>manual performance testing</b> you can use Chrome built-in Lighthouse DevTool.
</details>

#### Tests Reports
[![CodeCov](https://img.shields.io/badge/CodeCov-code_coverage_reports-00c8e6?labelColor=grey&logo=codecov)](https://about.codecov.io/) [![CircleCI-Test-Insights](https://img.shields.io/badge/CircleCI_Test_Insights-grey?logo=circleci)](https://circleci.com/docs/insights-tests)[![Jest-JUnit](https://img.shields.io/badge/Jest_JUnit-test_results_reports-00c8e6?labelColor=grey)](https://www.npmjs.com/package/jest-junit)

### Other
[![CircleCI](https://img.shields.io/badge/CircleCI-CI/CD_utility-00c8e6?labelColor=grey&logo=circleci)](https://circleci.com/) [![AWS-CLI](https://img.shields.io/badge/AWS--CLI-AWS_command_line_interface-00c8e6?labelColor=grey&logo=amazonaws)](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) [![Husky](https://img.shields.io/badge/Husky-Git_hooks_utility-00c8e6?labelColor=grey&logo=npm)](https://typicode.github.io/husky/#/)
[![Robots](https://img.shields.io/badge/Robots-search_engine_configuration-00c8e6?labelColor=grey)](https://www.robotstxt.org/) [![Snyk](https://img.shields.io/badge/Snyk-code_vulnerabilities_scan-00c8e6?labelColor=grey&logo=snyk)](https://snyk.io/) [![StoryBook](https://img.shields.io/badge/StoryBook-UI_components_library-00c8e6?labelColor=grey&logo=storybook)](https://storybook.js.org/)

[⬆️ back to top](#ah-curriculum-vitae-project)
## Run tasks
> 💡 ***Note:** Default development Client host port: **1337***

### Start:
- `npm start` (`npm run build:and:start:dev`) - Application development build task -> start with Webpack Watcher (port 1337)
- `npm run build:and:start:prod` - Application production build task -> start hosting (using [http-server](https://www.npmjs.com/package/http-server))

### Build:
- `npm run build` - Application general build task (development is default)
- `npm run build:dev` - Application development build task
- `npm run build:prod` - Application production build task
- `npm run build:prod:pwa` - Application production build task (with PWA support)

### Deploy:
- `npm run deploy:s3` - Application deploy to AWS S3 task (used for Static Site Hosting)
- `npm run build:and:deploy:s3` - Application production build -> deploy to AWS S3 task (used for Static Site Hosting)

### Clean up:
- `npm run build:clean` - Clean build ("dist") folder

### Test:
- **Unit/Integration Testing**
    - `npm test` (`npm run test`) - run Application Unit/Integration Tests (Common + A11y)
    - `npm run test:with:reports` - run Application Unit/Integration Tests (Common + A11y). Reports (results and coverage) enabled.
    - `npm run test:ci` - run Application Unit/Integration Tests in CI mode (used for CI/CD pipeline level testing)
    - `npm run test:ci:with:reports` - run Application Unit/Integration Tests in CI mode (used for CI/CD pipeline level testing). Reports (results and coverage) enabled.
- **E2E Testing**
    - `npm run test:e2e` (`npm run test:e2e:dev`) - run All (Common + A11y) E2E Tests (development build used)
    - `npm run test:e2e:dev:open` - open launcher of All (Common + A11y) E2E Tests (development build used)
    - `npm run test:e2e:common:prod` - run Common E2E Tests (production build used)
    - `npm run test:e2e:a11y:prod` - run A11y E2E Tests (production build used)
- **Performance Testing**
    - `npm run test:perf:ci` - run Application Performance + Insights testing (Lighthouse CI, used for CI/CD pipeline level testing)
- **TypeScript Types checking**
    - `npm run test:tsc` - run Application Typescript's types checking (no Libraries level checking)

### Lint:
- `npm run lint:scripts` - lint JS/TS files
- `npm run lint:scripts:fix` - lint JS/TS files with autofix
- `npm run lint:styles` - lint Styles files
- `npm run lint:styles:fix` - lint Styles files with autofix
- `npm run lint` - lint all (JS/TS+Styles) files
- `npm run lint:fix` - lint all (JS/TS+Styles) files with autofix

### Code vulnerabilities scan:
- `npm run sca:test` - scan for vulnerabilities for known issues (with disrupting processes) - CI/CD integration.
- `npm run sca:test:dev` - scan for vulnerabilities for known issues (with disrupting processes), include dev dependencies
- `npm run sca:monitor` - scan for vulnerabilities with exposing and storing results snapshot (without disrupting processes)
- `npm run sca:auth` - SCA tool (Snyk) authenticate (auth token required)

### Components Library maintaining:
- `npm run storybook:start` - start Components Library application (localy)
- `npm run storybook:build` - build Components Library (dist folder: 'storybook-static')
- `npm run storybook:build:clean` - clean Components Library build
- `npm run storybook:deploy:s3` - Components Library deploy to AWS S3 task for (used for Static Site Hosting)
- `npm run storybook:build:and:deploy:s3` - Components Library build -> deploy to AWS S3 task (used for Static Site Hosting)

[⬆️ back to top](#ah-curriculum-vitae-project)
## Project structure
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
│   │   │   ├───mocks   // Jest setup mocks (e.g. no-JS pattern files mock)
│   │   │   │
│   │   │   ├───test-utils   // Testing utils enhancement (e.g. RTL custom "render" util)
│   │   │   │   │
│   │   │   │   ├───custom
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
│   │   ├───app   // Webpack Application configuration
│   │   │
│   │   ├───helpers
│   │   │   │
│   │   │   ├───loaders   // Webpack loaders (babel-loader, sass-loader, etc.)
│   │   │   │
│   │   │   ├───plugins   // Webpack plugins (Favicon plugin, HTML plugin, etc.)
│   │   │   │
│   │   │   └───resolve   // Webpack resolves (aliases, etc.)
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
│   │   └───
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
│   ├───api
│   │
│   ├───services    // device detection, i18n, etc.
│   │
│   ├───utils   // reusable utils
│   │   │
│   │   ├───functions
│   │   │
│   │   ├───strings
│   │   │
│   │   └───numbers
│   │
│   ├───assets
│   │   │
│   │   ├───fonts
│   │   │
│   │   └───images
│   │
│   ├───components   // React components folder
│   │   │
│   │   ├───base   // base components (Button, Icon, etc.)
|   |   |
|   |   ├───common   //common components (Header, Footer, etc.)
│   │   │
│   │   ├───pages   // general pages components (MainPage, etc.)
│   │   │
│   │   └───routes   // application routes setup
│   │
│   ├───reusables
│   │   │
│   │   ├───custom-hooks
│   │   │
│   │   ├───hocs
│   │   │
│   │   │   services-context.tsx   // Services context for components injection using specific Custom Hook/HOC
│   │   └───
│   │
│   ├───store   // Redux's Store
│   │   │
│   │   ├───middlewares
│   │   │
│   │   ├───slices
│   │   │
│   │   │   store.ts   // main Store setup file
│   │   │   store.reducer.ts   // main reducer setup file
│   │   │   store.saga.ts   // root saga setup file (main init + watch sagas)
│   │   └───
│   │
│   ├───styles   // main styles folder
│   │   │
│   │   ├───base   // base styles (mixins, functions, variables, etc.)
│   │   │
│   │   │   main.scss   // main styles file
│   │   │   font-declarations.scss  // fonts declarations main file
│   │   │   reset-normalize.scss   // reset & normalize basic styles
│   │   │   scrollbar.scss   // scrollbar styles
│   │   └───
│   │
│   │   Application.component.tsx   // main application Component
│   │   Application.module.scss   // entry styles file
│   │   application.tsx   // main Create App file
│   │   application.types.ts   // application types models file
│   │   declarations.d.ts   // non-TS files declarations and globals
│   │   index.ts   // main entry file
|   |   index.html   // source HTML file
│   │   README.md   // Source folder info
│   └───
│
├───dist
│   │
│   ├───assets
│   │   │
│   │   ├───favicons   // favicons collection folder (generated by Webpack Favicon plugin)
│   │   │
│   │   ├───fonts
│   │   │
│   │   └───images
│   │
│   ├───css
│   │
│   ├───js
│   │
│   │   index.html   // result HTML file
│   └───
├───
│
│   .editorconfig   // editor basic setup for IDE
│   babel.config.js   // Babel configuration
│   jsconfig.json   // JS configuration file for indicating directory root, aliases setup, etc.
│   tsconfig.json   // TS configuration file for indicating basic setup, including directory root, aliases setup, etc.
│   package.json
│   package-lock.json
│   .gitignore
│   LICENSE
│   README.md
└───
```

[⬆️ back to top](#ah-curriculum-vitae-project)
## Additional documentation
### Folders README
|Name|Description|
|---|---|
|[Config README](/config/README.md)|general configuration setup|
|[Source README](/src/README.md)|major source of truth for Source folder|
### Project Docs
|Name|Description|
|---|---|
|[Branching Strategy & CI/CD](/_docs/branching-strategy-and-ci-cd.md)|Project's branching strategy info and CI/CD approach description|
|[TypeScript](/_docs/typescript.md)|Project's TypeScript usage details and general Code Convention|
|[PWA](/_docs/pwa.md)|Project's PWA support information (tech stack, build process, etc.)|
|[Testing](/_docs/testing.md)|Project's testing approaches (Unit+Integration, E2E) + according CI/CD quality gates description|
|[Typography](/_docs/typography.md)|Project's typography configuration and conventions|

## Issues
Find a bug or enhancement and want provide help? Please submit an issue.
## License
[MIT](/LICENSE) [Aliaksei's Curriculum Vitae project](https://github.com/Shagon1k/AHurynovich-CV)

[⬆️ back to top](#ah-curriculum-vitae-project)
