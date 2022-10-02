const { defineConfig } = require("cypress");
const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on('file:preprocessor', webpackPreprocessor());
    },
    baseUrl: "https://telnyx.com/",
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 30000,
  video: false,
  scrollBehavior: 'top',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  }
});
