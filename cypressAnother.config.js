const { defineConfig } = require("cypress");
const config = require("./cypress.config");

module.exports = defineConfig({
  ...config,
  viewportHeight: 768,
  viewportWidth: 1366,
});
