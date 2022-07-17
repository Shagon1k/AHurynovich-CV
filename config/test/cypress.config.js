const { defineConfig } = require('cypress'); // eslint-disable-line no-undef

module.exports = defineConfig({
    e2e: {
        /**
         * TODO: This one is configured only for local E2E testing (1337 port is used as default CSR Client local Hosting)
         * Should be reconsidered after real Application deployment + hosting in real world.
         */
        baseUrl: 'http://localhost:1337',
        port: 3005,
        // eslint-disable-next-line no-unused-vars
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
