# Branching Strategy and CI/CD
1. [ General information ](#general-information)
2. [ Branching strategy ](#branching-strategy)
3. [ CI CD Configuration ](#ci-cd-configuration)
4. [ CI CD Workflows ](#ci-cd-workflows)

## General information
Project follows [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow) branching strategy.
Project includes [CI/CD](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment) pipeline to manage automate development steps reproduce and Application deployment.
CI/CD processes are handled by [CircleCI](https://circleci.com/).

## Branching strategy
[**GitHub flow**](https://docs.github.com/en/get-started/quickstart/github-flow) is relatively lightweight and simple workflow.
This strategy (unlike, for example, GitFlow) has simple **branches setup**: `main`(`master`) (*which reflects current production state*) and `feature`s \ `bugfix`s (*which handle upcoming changes*), **NO additional branches** like `release` presented.
> ⚠️***Warn**:`main`(`master`) branch should **include only ready-to-deploy state**.*

<img src="/_docs/assets/github-flow-branching-model.svg" alt="GitHub flow git model" style="width:300px;"/>

Such strategy is friendly for handling Continuos Integration and Continuos Delivery support.

## CI CD configuration
**CI/CD Configuuration** could be found here: [/.circleci/config.yml](/.circleci/config.yml).
The following **Jobs** are configured:
- ***install-packages*** - installing NPM packages. Uses cache based on `package-lock.json` file checksum;
- ***lint*** - linting of Source Code ([ESLint](/config/lint/eslint/eslint.config.js) + [Stylelint](/config/lint/stylelint/stylelint.config.js));
- ***test-tsc*** - checking TypeScript files ([/tsconfig.json](/tsconfig.json));
    > ⚠️***Warn**: This is a **vital** step. TypeScript transpilation is handled by Babel, so type checking are NOT presented during that time.*
- ***test-unit-integration*** - executing Unit/Integration tests (Jest+RTL, [/config/test/jest.config.js](/config/test/jest.config.js));
- ***test-unit-integration-with-reports*** - executing Unit/Integration tests + preparing of Reports artifacts (Results + Coverage);
- ***test-sca*** - executing Source Code for vulnerabilities;
    > 💡 ***Note**: **Snyk secrets** environment variable set up on CircleCI side.*
- ***test-performance*** - executing Performance tests (LightHouse, [/config/test/lighthouse.config.js](/config/test/lighthouse.config.js));
- ***build-app*** - building Application;
- ***deploy-app*** - deploying Application (AWS S3 hosting);
    > 💡 ***Note**: **AWS secrets** environment variables set up on CircleCI side.*
- ***build-components-library*** - building Application's Components library (StoryBook, [/config/storybook/](/config/storybook/));
- ***deploy-app*** - deploying Application (AWS S3 hosting);
    > 💡 ***Note**: **AWS secrets** environment variables set up on CircleCI side.*


## CI CD Workflows
There are two workflows available: **Common** (for `feature` branches) and **Commitment** (for `main` branch).

#### Common (feature) workflow
<img src="/_docs/assets/pipeline-common-workflow.jpg" alt="GitHub flow git model" style="width:700px;"/>

#### Commitment (main) workflow
<img src="/_docs/assets/pipeline-commitment-workflow.jpg" alt="GitHub flow git model" style="width:1200px;"/>
