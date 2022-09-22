# Common documentation
Documentation and guidelines for application's Client and Server common staff.
> 💡 ***Note**: If application is used only as static CSR and there are no need in Server - consider moving '/common' folder content into '/client' folder.*

## Main areas
- **[Services](/src/common/services/index.ts)** - (*/services*) - used for storing application services like i18n, Device Detect, etc;
    > 💡 ***Note**: As application uses Redux, some of services could be used on State Management side (e.g. Redux-Saga's side effects). For example, i18n service is used to correctly update Application language. Thus they were moved to separate Facade entity which is injected to Redux-Saga's context OR for specific Component (using Custom Hook/HOC).
Services are initiated with User specific config (base language, userAgent, etc) and potentially could depend one on each other (so main Facade could be used as IoC container).*
- **[Utils](/src/common/utils/index.ts)** - (*/utils*) - used for storing application utils;

## Folder's Conventions
- Adding new **Common Main area**:
    - add it in new specific folder;
    - once finished - update this README with new area;
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
├───services
│
├───utils
│
│   README.md
└───
```

## [!] To Consider
- Move same area services (functions, strings, numbers, etc.) to specific folders.
