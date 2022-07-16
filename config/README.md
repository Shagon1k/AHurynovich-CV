# Config documentation
Documentation and guidelines for application's config.

## Main areas
- **[Application config](/config/application/application.config.js)** - (*/application*) - used for storing application configuration like React's root element ID, Server default port, etc;
- **[Environment config](/config/environment/environment.config.js)** - (*/environment*) - used for storing environment configuration like project's main folders routes and entries, information about CSR/SSR flow, current environment type, etc;
- **[Unit Tests config](/config/jest/jest.config.js)** - (*/jest*) - used for storing Unit Tests framework configuration (jest config);
- **[Code Styling config](/config/lint/)** - (*/lint*) - used for storing Code Styling tools configuration (**[ESlint config](/config/lint/eslint/eslint.config.js)** and **[Stylelint config](/config/lint/stylelint/stylelint.config.js)**);
- **[Code Formatting config](/config/prettier/prettier.config.js)** - (*/prettier*) - used for storing Code Formatter tool configuration (Prettier);
- **[Application bundler config](/config/webpack/)** - (*/webpack*) - used for storing Bundler configuration (Webpack). **[Client config](/config/webpack/client/webpack.config.client.babel.js)** and **[Server config](/config/webpack/server/webpack.config.server.babel.js)** are separated, reusable **[Webpack utilities](/config/webpack/helpers/)** ([loaders](/config/webpack/helpers/loaders/index.js), [resolvers](/config/webpack/helpers/resolve/index.js), [plugins](/config/webpack/helpers/plugins/index.js)) moved to specific folder;
- **[Search Engines traversing config](/config/robots/robots.txt)** - (*/robots*) - configuration to enhance Web Crawlers search engine (setup, restrictions, sitemap, etc.);

> ***Note**: **JS compiler config** ([Babel config](/babel.config.js)) is located in project root folder.*

## Folder's Conventions
- Adding new **Configuration Main area**:
    - add it in new specific folder;
    - if configuration is assumed to be used in general application flow (*/src* folder) - add index export file;
    - once finished - update this README with new area;
- Follow **files naming conventions**:
    - each new main config name should follow template: `[name].config.js`;
    - if config has sub-types - according files names should follow template: `[name].config.[sub-type][...].js`;
    - if new Webpack helpers (loaders, plugins, resolve) need to be added - files names should follow according template, e.g. `[name].loader.js`;

## Folder's Structure
```
./
│
├───application
│
├───environment
│
├───jest
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
│   └───server
│
├───robots
│   │
│   │   robots.txt
│   └───
│
│   README.md
└───
```