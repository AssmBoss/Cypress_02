const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "2j6cbx",
    baseUrl: 'http://qamid.tmweb.ru/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
