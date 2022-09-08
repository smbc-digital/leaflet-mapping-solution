const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://localhost:8080",
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
