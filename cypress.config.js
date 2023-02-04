const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "83nqm8",
    baseUrl: 'http://qamid.tmweb.ru/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
