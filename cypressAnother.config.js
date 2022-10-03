const { defineConfig } = require("cypress");
const config = require("./cypress.config");
const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
  ...config,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on('file:preprocessor', webpackPreprocessor());
    },
    baseUrl: "https://telnyx.com/",
    specPattern: 'cypress/e2e/**/*.cy.js'
  }
});
