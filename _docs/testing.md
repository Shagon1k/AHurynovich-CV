# Testing
1. [ General information ](#general-information)
    1.1 [ CI CD Quality Gates ](#ci-cd-quality-gates)
2. [ Unit and Integration testing ](#unit-and-integration-testing)
    2.1 [ Unit and Integration testing Configuration ](#unit-and-integration-testing-configuration)
    2.2 [ General Unit and Integration testing Conventions ](#general-unit-and-integration-testing-conventions)
    2.3 [ Components testing Conventions ](#components-testing-conventions)
3. [ E2E testing ](#e2e-testing)
    3.1 [ E2E testing Configuration ](#e2e-testing-configuration)
    3.2 [ E2E testing Conventions ](#e2e-testing-conventions)

## General information
**All types** of testing (Unit, Integration, E2E) are supported in Application.
- **Unit + Integration** testing is covered by [Jest](https://jestjs.io/) (Testing Framework) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) (Testing Util);
    > 💡 ***Note**: **A11y** testing is also supported on Unit/Integration level and covered by [Jest-Axe](https://www.npmjs.com/package/jest-axe).*
- **E2E** testing is covered by [Cypress](https://www.cypress.io/) and extended by [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/);
    > 💡 ***Note**: **A11y** testing is also supported on E2E level and covered by [Cypress-Axe](https://www.npmjs.com/package/cypress-axe).*

### CI CD Quality Gates
**Unit/Integration** testing is **added to CI/CD pipeline** as a job:
- for ***feature*** branches Test job only **runs existing Unit and Integration tests** failing the pipeline in case any test was not passed;
    > 💡 ***Note**: Follow `test-unit-integration` job of [CircleCI config](/.circleci/config.yml) for more details.*
- for ***main*** branch Test job also includes **Reports generation** (Results + Code Coverage). This reports than are used to visualize according test data in convenient way (*using **[CircleCI Test Insights](https://circleci.com/docs/insights-tests)** for displaying **test results** and **[CodeCov](https://about.codecov.io/)** to display **code coverage report***);
    > 💡 ***Note**: Follow `test-unit-integration-with-reports` job of [CircleCI config](/.circleci/config.yml) for more details.*

**Performance** testing is also **added to CI/CD pipeline** as a job. It only runs on ***main*** branch.
> 💡 ***Note**: Follow `test-performance` job of [CircleCI config](/.circleci/config.yml) for more details.*

## Unit and Integration testing

> ***Info**: **Unit Testing** is to test each part of the program and show that the individual parts (modules, functions, components) are correct, while **Integration Testing** is to combine such parts and test as a group to see that their combination working fine.*

### Unit and Integration testing Configuration

**[Unit/Integration Tests config](/config/test/jest.config.js)** - (*/test/jest*) - used for storing Unit/Integration Tests framework configuration (Jest config) and custom testing utils setup (e.g. RTL custom utils);

For convenience purpose:
- all **Unit/Integration (+A11y) testing utilities provided from RTL/Axe** are stored and could be exported from ***`'@test-utils'` module** (allias for [/config/test/jest/test-utils/](/config/test/jest/test-utils/))*;
- all **custom testing utilities** (e.g. render decorated with Providers) are stored and could be exported from ***`'@test-utils/custom'` module** (allias for [/config/test/jest/test-utils/custom/](/config/test/jest/test-utils/custom/))*;

### General Unit and Integration testing Conventions
- **follow [F.I.R.S.T.](https://medium.com/@tasdikrahman/f-i-r-s-t-principles-of-testing-1a497acda8d6) principle**;
    > 💡 ***Note**:
        **F**ast - each test should run and show you the desired output in a matter of seconds;
        **I**solated - each test should be independent of everything else so that it results is not influenced by any other factor;
        **R**epeateble - each test should be repeatable and deterministic, it's values shouldn’t change based on being run on different environments. Unit Tests should own their data and not depend on any external factors (side-effects);
        **S**elf-validating - each test should provide readable result whether it is passed or failed, you should not do it manualy;
        **T**horough - tests should cover as much scenarios as possible(happy path, edge cases, security). Strive for it, but remember about next convention (see below).*
- **do not write test "just for test"**, remember there are no such thing as "ideal code coverage". Strive to the best coverage, but do it reasonably;
- Unit/Integration tests should be **added in separate sub-folder** (*\_\_tests\_\_*);
- test file name **should follow template**: `[name].spec.js`;
- tests **should only verify single file** (do NOT verify several components/modules/services scoped in different files in scope of single test file);
- if tests **require some solid [mocking](https://jestjs.io/docs/mock-function-api)**:
    - it should be stored in scope of (*/\_\_tests\_\_*) sub-folder in separate file;
    - mock files should follow template: `[name].mock.js`;
- `describe` and `test`(`it`) **blocks naming**:
    - **strive to follow Gherkin style** (Given-When-Then) as it helps to stricture your test files and increase their readability;
    - the high level `describe` block **should be named as an entity** (function, component, etc.) that it tests;
    - in case tested file includes multiple exports to test - **write `describe` block per each exported entity**;
    - **start `describe` block with "given..." or "when..."** (following Gherkin style);
    - **start `test`(`it`) block with "should..." or "then..."**;
        > 💡 ***Note**: As a result your test scenario will be readable, e.g.: `"given USER sees the button"` -> `"when USER clicked on button"` -> `"then 'Hooray!' message became shown"`*
- use test hooks (`beforeEach`/`beforeAll`/`afterEach`/`afterAll`) **following their purpose**: pre-test configuration (`before*`) OR cleaning up (`after*`);

### Components testing Conventions
- **follow General rules**;
- if Component should be covered with general Unit/Integration tests:
    - tests should **be stored in scope** (*/\_\_tests\_\_*) sub-folder in separate file;
    - general Test file name **should follow template**: `[name].component.spec.js`;
- if Component should be covered with A11y Tests:
    - tests should **be stored in scope** (*/\_\_tests\_\_*) sub-folder in separate file;
    - A11y Test file name **should follow template**: `[name].component.a11y.spec.js`;
- try to **avoid Snapshot testing** (using it could lead to possible false negative/false positive test results + it is usually slow);
- **React Testing Library** rules:
    - focus on USER ***behavior***, NOT on implementation details (RTL stricts access to component's internals (e.g. state));
    - there are 3 common variants of ***element querying in RTL***: `get*`, `find*`, `query*`. Generally please follow simple rule of usage ([more details](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#using-query-variants-for-anything-except-checking-for-non-existence)):
        > **Use `get*`** as a default option
            -> if need to identify an element is NOT presented - **use `query*`** (`get*` will throw an error in such case)
            -> if need handle the scenario with a result of an asynchronous action - **use `find*`**
    - focus on ***correct ("jest-dom") assertions*** ([more details](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#using-the-wrong-assertion))
        > ❌ `expect(button.disabled).toBe(true)` -> ✅ `expect(button).toBeDisabled()`

        Some of available ***matcher methods*** include: `.toBeInTheDocument()`, `.toBeVisible()`, `.toHaveValue()`, `.toHaveStyle()`, `.toBeDisabled()`, etc.
    - use ***"user-event" in priority of "fire-event"*** where possible ([more details](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#not-using-testing-libraryuser-event));
    - try to avoid using `container` to query for elements (use "screen") ([more details](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#using-container-to-query-for-elements))
    - covering **React custom Hooks**:
        - **use `renderHook` function** of @testing-library/react for covering React custom Hook;
        - **do NOT create helping Functional Components**;
        - cover only Custom hooks which **are reusable or potentially reusable**, other custom Hooks **could be covered in scope of specific Component usage**;

> ***Info**: Nice article by Kent C. Dodds (founder of Testing Library): https://kentcdodds.com/blog/common-mistakes-with-react-testing-library*

## E2E testing

> ***Info**: **E2E(End-to-End) Testing** is a technique that tests the entire software product from the beginning to the end from USER perspective. It ensures the application flow behaves as expected by simulating the real USER scenario.*

### E2E testing Configuration

**[E2E Tests config](/config/test/cypress.config.js)** - (*/test/cypress*) - used for storing E2E Tests framework configuration (Cypress config) and E2E test cases;
It ***consists of***:
- **[E2E Common Tests config](/config/test/cypress/cypress.config.common.json)** - Common E2E tests configuration;
- **[E2E A11y Tests config](/config/test/cypress/cypress.config.a11y.json)** - A11y E2E tests configuration;

### E2E testing Conventions
- mind that E2E tests are usually **the most expensive and time-consuming** test type, they are at the top of **[Testing Pyramid](https://automationpanda.com/2018/08/01/the-testing-pyramid/)**, so for each scenario:
    - **let down your tests as deep as possible** in Testing Pyramid, in case some scenario could be covered with Unit/Integration test - **do it there**;
    -  **do NOT duplicate your test cases** between different Testing Pyramid layers;
- `describe` and `test`(`it`) **blocks naming**:
    - **strive to follow Gherkin style** (Given-When-Then) as it helps to stricture your test files and increase their readability;
    - the high level `describe` block **should decribe the whole scenario** that it tests;
    - **start `describe` block with "given..." or "when..."** (following Gherkin style);
    - **start `test`(`it`) block with "should..." or "then..."**;
        > 💡 ***Note**: As a result your test scenario will be readable, e.g.: `"given USER comes to some page"` -> `"when USER clicked on button"` -> `"then 'Hooray!' message became shown"`*
- if new general E2E test should be added:
    - test files **should be stored in scope of** */config/test/cypress/e2e* folder;
    - test file name **should follow template**:  `[name].cy.js`;
- if new A11y E2E test should be added:
    - test files **should be stored in scope of** */config/test/cypress/e2e/a11y* folder;
    - test file name **should follow template**:  `[name].a11y.cy.js`;

## Performance & Insights Testing

**Performance & Insights Testing** is only supported on **CI/CD level** and handled by [LightHouse CI](https://github.com/GoogleChrome/lighthouse-ci).
Configuration file could be found here: [/config/test/lighthouse.config.js](/config/test/lighthouse.config.js).
> 💡 ***Note**: PWA Insights testing right now is turned OFF and NOT a part of general flow because PWA supported only as separate independent build type.*

> 💡 ***Note**: For **manual Performance Testing** you can use Chrome built-in Lighthouse DevTool.*
