// As we need to use ES6 modules, Babel Register usage here is required to transform ES6 -> ES5
require('@babel/register'); // eslint-disable-line no-undef

const path = require('path'); // eslint-disable-line no-undef
const environmentConfig = require('../environment/environment.config.js'); // eslint-disable-line no-undef, import/extensions
const { SRC_DIR, CONFIG_DIR } = environmentConfig;

const IS_TEST_REPORTS_ENABLED = process.env.TEST_SETUP === 'reports';

// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    // All imported modules in your tests should be mocked automatically
    // automock: false,

    // Stop running tests after `n` failures
    // bail: 0,

    // The directory where Jest should store its cached dependency information
    // cacheDirectory: "C:\\Users\\shago\\AppData\\Local\\Temp\\jest",

    // Automatically clear mock calls and instances between every test
    // clearMocks: false,

    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: IS_TEST_REPORTS_ENABLED,

    // An array of glob patterns indicating a set of files for which coverage information should be collected
    // collectCoverageFrom: undefined,

    // The directory where Jest should output its coverage files
    coverageDirectory: './test-reports/test-coverage',

    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: ['/node_modules/'],

    // Indicates which provider should be used to instrument code for coverage
    // coverageProvider: "babel",

    // A list of reporter names that Jest uses when writing coverage reports
    coverageReporters: ['text', 'cobertura'],

    // An object that configures minimum threshold enforcement for coverage results
    // coverageThreshold: undefined,

    // A path to a custom dependency extractor
    // dependencyExtractor: undefined,

    // Make calling deprecated APIs throw helpful error messages
    errorOnDeprecated: true,

    // Force coverage collection from ignored files using an array of glob patterns
    // forceCoverageMatch: [],

    // A path to a module which exports an async function that is triggered once before all test suites
    // globalSetup: undefined,

    // A path to a module which exports an async function that is triggered once after all test suites
    // globalTeardown: undefined,

    // A set of global variables that need to be available in all test environments
    globals: {
        PRODUCTION: false,
    },

    // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
    // maxWorkers: "50%",

    // An array of directory names to be searched recursively up from the requiring module's location
    // moduleDirectories: [
    //   "node_modules"
    // ],

    // An array of file extensions your modules use
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],

    // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
    /**
     * Note: This mapper works considering order and does NOT proceed for the next patterns if some previous match.
     * Thus, it is important for file paths aliases to be listed at the end.
     * For example, if .png file is also imported using file path alias (@assets/etc.) mock mapping should be FIRST at list,
     * otherwise it will lead to an error as alias pattern mapping will be used, so NO mock mapping considered.
     */
    moduleNameMapper: {
        '^.+\\.s?css$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `${path.resolve(
            CONFIG_DIR
        )}/test/jest/mocks/file.mock.js`,
        '^@test-utils/(.*)$': `${path.resolve(CONFIG_DIR)}/test/jest/test-utils/$1`,
        '^@test-utils': `${path.resolve(CONFIG_DIR)}/test/jest/test-utils`,
        '^@config/(.*)$': `${path.resolve(CONFIG_DIR)}/$1`,
        '^@config': path.resolve(CONFIG_DIR),
        '^@src/(.*)$': `${path.resolve(SRC_DIR)}/$1`,
        '^@utils/(.*)$': `${path.resolve(SRC_DIR, 'utils')}/$1`,
        '^@utils': path.resolve(SRC_DIR, 'utils'),
        '^@services/(.*)$': `${path.resolve(SRC_DIR, 'services')}/$1`,
        '^@services': path.resolve(SRC_DIR, 'services'),
        '^@api/(.*)$': `${path.resolve(SRC_DIR, 'api')}/$1`,
        '^@api': path.resolve(SRC_DIR, 'api'),
        '^@assets/(.*)$': `${path.resolve(SRC_DIR, 'assets')}/$1`,
        '^@components/(.*)$': `${path.resolve(SRC_DIR, 'components')}/$1`,
        '^@pages/(.*)$': `${path.resolve(SRC_DIR, 'components/pages')}/$1`,
        '^@reusables/(.*)$': `${path.resolve(SRC_DIR, 'reusables')}/$1`,
        '^@slices/(.*)$': `${path.resolve(SRC_DIR, 'store/slices')}/$1`,
        '^@styles/(.*)$': `${path.resolve(SRC_DIR, 'styles')}/$1`,
        '^@common-styles/(.*)$': `${path.resolve(SRC_DIR, 'styles/common')}/$1`,
        '^@base-styles-mixins/(.*)$': `${path.resolve(SRC_DIR, 'styles/base/_mixins')}/$1`,
        '^@base-styles-variables/(.*)$': `${path.resolve(SRC_DIR, 'styles/base/_variables')}/$1`,
    },

    // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
    // modulePathIgnorePatterns: [],

    // Activates notifications for test results
    /**
     * Note: Turning ON notify cause an issue with correct stopping of async operations ("Jest did not exit one second...").
     * Please keep turned OFF.
     * More details: https://github.com/facebook/jest/issues/7890
     */
    notify: false,

    // An enum that specifies notification mode. Requires { notify: true }
    // notifyMode: "failure-change",

    // A preset that is used as a base for Jest's configuration
    // preset: undefined,

    // Run tests from one or more projects
    // projects: undefined,

    // Use this configuration option to add custom reporters to Jest
    reporters: IS_TEST_REPORTS_ENABLED
        ? [
              'default',
              [
                  'jest-junit',
                  {
                      suiteName: 'Unit/Integration test results',
                      outputDirectory: './test-reports/test-results',
                      outputName: 'test-results.xml',
                      // Note: "file" attribute in JUnit result is REQUIRED for CircleCI/GitlabCI (https://github.com/jest-community/jest-junit#configuration)
                      addFileAttribute: 'true',
                  },
              ],
          ]
        : undefined,

    // Automatically reset mock state between every test
    // resetMocks: false,

    // Reset the module registry before running each individual test
    // resetModules: false,

    // A path to a custom resolver
    // resolver: undefined,

    // Automatically restore mock state between every test
    // restoreMocks: false,

    // The root directory that Jest should scan for tests and modules within
    // eslint-disable-next-line no-undef
    rootDir: path.resolve(__dirname, '../../'),

    // A list of paths to directories that Jest should use to search for files in
    roots: ['<rootDir>/src'],

    // Allows you to use a custom runner instead of Jest's default test runner
    // runner: "jest-runner",

    // The paths to modules that run some code to configure or set up the testing environment before each test (before the test framework is installed in the environment)
    setupFiles: [`${path.resolve(CONFIG_DIR)}/test/jest/jest.setup.js`],

    // A list of paths to modules that run some code to configure or set up the testing framework before each test (after the test framework has been installed in the environment.)
    setupFilesAfterEnv: [`${path.resolve(CONFIG_DIR)}/test/jest/jest.setupAfterEnv.js`],

    // The number of seconds after which a test is considered as slow and reported as such in the results.
    slowTestThreshold: 2,

    // A list of paths to snapshot serializer modules Jest should use for snapshot testing
    // snapshotSerializers: [],

    // The test environment that will be used for testing
    testEnvironment: 'jsdom',

    // Options that will be passed to the testEnvironment
    testEnvironmentOptions: {},

    // Adds a location field to test results
    // testLocationInResults: false,

    // The glob patterns Jest uses to detect test files
    testMatch: [
        '**/__tests__/**/?(*.)+(spec|test).[tj]s?(x)',
        '**/__tests__/**/?(*.)+(snap|snapshot).[tj]s?(x)',
    ],

    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: [],

    // The regexp pattern or array of patterns that Jest uses to detect test files
    // testRegex: [],

    // This option allows the use of a custom results processor
    // testResultsProcessor: undefined,

    // This option allows use of a custom test runner
    // testRunner: "jasmine2",

    // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
    // testURL: "http://localhost",

    // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
    // fakeTimers: {
    //     enableGlobally: true,
    //     timerLimit: 1000,
    // },

    // A map from regular expressions to paths to transformers
    transform: {
        '^.+\\.[jt]sx?$': 'babel-jest',
    },

    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    // transformIgnorePatterns: [
    //   "\\\\node_modules\\\\",
    //   "\\.pnp\\.[^\\\\]+$"
    // ],

    // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
    // unmockedModulePathPatterns: undefined,

    // Indicates whether each individual test should be reported during the run
    // verbose: undefined,

    // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
    // watchPathIgnorePatterns: [],

    // Whether to use watchman for file crawling
    // watchman: true,
};
