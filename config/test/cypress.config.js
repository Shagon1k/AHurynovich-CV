const { defineConfig } = require('cypress'); // eslint-disable-line no-undef
const fse = require('fs-extra'); // eslint-disable-line no-undef
const path = require('path'); // eslint-disable-line no-undef

const TYPE_ALL = 'all';

function getConfigurationByFile(file) {
    const pathToConfigFile = path.resolve('cypress', `${file}.json`);

    return fse.readJson(pathToConfigFile);
}

module.exports = defineConfig({
    e2e: {
        /**
         * TODO: This one is configured only for local E2E testing (1337 port is used as default CSR Client local Hosting)
         * Should be reconsidered after real Application deployment + hosting in real world.
         */
        baseUrl: 'http://localhost:1337',
        port: 3005,
        setupNodeEvents(on, config) {
            const type = config.env.configType || TYPE_ALL;

            if (type === TYPE_ALL) {
                return {};
            }

            const fileName = `cypress.config.${type}`;
            const overrideConfig = getConfigurationByFile(fileName);

            return overrideConfig;
        },
    },
});
