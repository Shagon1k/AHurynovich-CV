# Config documentation
Documentation and guidelines for application's config.

## Main areas
- **[Application config](/config/application/application.config.js)** - (*/application*) - used for storing application configuration like React's root element ID, Server default port, etc;
- **[Environment config](/config/environment/environment.config.js)** - (*/environment*) - used for storing environment configuration like project's main folders routes and entries, information about CSR/SSR flow, current environment type, etc;
- **[Unit/Integration Tests config](/config/test/jest.config.js)** - (*/test/jest*) - used for storing Unit/Integration Tests framework configuration (Jest config) and custom testing utils setup (e.g. RTL custom utils);
    > 💡 ***Note**: **A11y Tests** setup included. Common and A11y tests run together.*
- **[E2E Tests config](/config/test/cypress.config.js)** - (*/test/cypress*) - used for storing E2E Tests framework configuration (Cypress config) and E2E test cases;
    - **[E2E Common Tests config](/config/test/cypress/cypress.config.a11y.json)** - Common E2E tests configuration;
    - **[E2E A11y Tests config](/config/test/cypress/cypress.config.e2e.json)** - A11y E2E tests configuration;
    > 💡 ***Note**: Adding new **E2E Tests** please follow **Folder's Conventions** (see below).*
- **[Performance & Insights Test config](/config/test/lighthouse.config.js)** - Performance & Insights (SEO, Best practices, etc), CI/CD level only.
    > 💡 ***Note**: Performance Testing is only set up on **CI/CD pipeline level**. For **manual performance testing** you can use Chrome built-in Lighthouse DevTool.*
- **[Code Styling config](/config/lint/)** - (*/lint*) - used for storing Code Styling tools configuration (**[ESlint config](/config/lint/eslint/eslint.config.js)** and **[Stylelint config](/config/lint/stylelint/stylelint.config.js)**);
- **[Code Formatting config](/config/prettier/prettier.config.js)** - (*/prettier*) - used for storing Code Formatter tool configuration (Prettier);
- **[Application bundler config](/config/webpack/)** - (*/webpack*) - used for storing Bundler configuration (Webpack). **[Client config](/config/webpack/client/webpack.config.client.babel.js)** and **[Server config](/config/webpack/server/webpack.config.server.babel.js)** are separated, reusable **[Webpack utilities](/config/webpack/helpers/)** ([loaders](/config/webpack/helpers/loaders/index.js), [resolvers](/config/webpack/helpers/resolve/index.js), [plugins](/config/webpack/helpers/plugins/index.js)) moved to specific folder;
    > 💡 ***Note**: **[StoryBook Webpack config](/config/webpack/storybook/)** is also located here. After it is used in **[StoryBook config folder](/config/storybook/)**.*
- **[UI Components Library](/config/storybook/main.js)** - (*/storybook*) - general configuration for Components Library (StoryBook);
- **[Search Engines traversing config](/config/robots/robots.txt)** - (*/robots*) - configuration to enhance Web Crawlers search engine (setup, restrictions, sitemap, etc.);

> 💡 ***Note**: **JS compiler config** ([Babel config](/babel.config.js)) is located in project root folder.*

## Folder's conventions
- Adding new **Configuration Main area**:
    - add it in new specific folder;
    - if configuration is assumed to be used in general application flow (*/src* folder) - add index export file;
    - once finished - update this README with new area;
- Follow **files naming conventions**:
    - each new main config name should follow template: `[name].config.{js,ts}`;
    - if config has sub-types - according files names should follow template: `[name].config.[sub-type][...].{js,ts,json}`;
    - if new Webpack helpers (loaders, plugins, resolve) need to be added - files names should follow according template, e.g. `[name].loader.{js,ts}`;
- Adding new **E2E tests**: please check **[Testing Documentation](/_docs/testing.md)** for more details;:

## Folder's structure
```
./
│
├───application
│
├───environment
│
├───test
│   │
│   ├───jest
│   │   │
│   │   ├───test-utils
│   │   │   │
│   │   │   ├───custom-utils
│   │   │   │
│   │   │   │   test-utils.js
│   │   │   │   index.js
│   │   │   └───
│   │   │
│   │   │   jest.setupAfterEnv.js
│   │   │   jest.setup.js
│   │   └───
│   ├───cypress
│   │   │
│   │   ├───downloads
│   │   │
│   │   ├───e2e
│   │   │
│   │   ├───fixtures
│   │   │
│   │   ├───support
│   │   │
│   │   │   cypress.config.a11y.json
│   │   │   cypress.config.e2e.json
│   │   └───
│   │
│   │   cypress.config.js
│   │   jest.config.js
│   │   lighthouse.config.js
│   └───
│
├───lint
│   │
│   ├───eslint
│   │
│   └───stylelint
│
├───prettier
│
├───webpack
│   │
│   ├───client
│   │
│   ├───helpers
│   │   │
│   │   ├───loaders
│   │   │
│   │   ├───plugins
│   │   │
│   │   └───resolve
│   │
│   ├───server
│   │
│   └───storybook
│
├───storybook
│   │
│   ├───docs
│   │
│   ├───helpers
│   │   │
│   │   ├───argTypes
│   │   │
│   │   └───decorators
│   │
│   │   constants.js
│   │   main.js
│   │   preview.js
│   │   webpack.config.storybook.es5.js
│   └───
│
├───robots
│   │
│   │   robots.txt
│   └───
│
│   README.md
└───
```
