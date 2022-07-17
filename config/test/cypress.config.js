const { defineConfig } = require('cypress'); // eslint-disable-line no-undef

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:1337', // TODO: CSR Host client dev server used as default. Need to be reconsidered further
        port: 3005,
        // eslint-disable-next-line no-unused-vars
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
