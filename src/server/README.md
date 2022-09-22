# Server documentation
Documentation and guidelines for application's Server.

## General
- Server uses Express as **NodeJS framework**;
- Server entry file - *index.ts*;
- Server main file - *server.ts*;
- Port (SERVER_PORT) is configured and comes from **[Application's configuration](/config/application/application.config.js)**;

## Main areas
- **[API](/src/server/api/index.ts)** - (*/api*) - used to handle different API calls, uses /api sub-route for them;
    > 💡 ***Note**: Could be used as BFF layer.*
- **[Middlewares](/src/server/middlewares/index.ts)** - (*/middlewares*) - used to handle Server middlewares;

## Folder's Conventions
- Adding new **Server Main area**:
    - add it in new specific folder;
    - once finished - update this README with new area;
- Adding new **API endpoint**:
    - add it in */api* subfolder;
    - new folder name should be consistent with according main file name;
    - do not forget to add index export file;
    - do not forget to update *api/api.router.ts*;
- Adding new **Middleware**:
    - add it in */middleware* subfolder;
    - new folder name should be consistent with according main file name;
    - do not forget to add index export file;
- Follow **files naming conventions**:
    - each new API endpoint/middleware folder/file name should follow kebab-case rule;
    - each new API endpoint's main file name should follow template: `[name].api.ts`;
    - each new middleware's main file name should follow template: `[name].middleware.ts`;

## Folder's Structure
```
./
│
├───api
│
├───middlewares
│
│   server.ts
│   index.ts
│   README.md
└───
```
