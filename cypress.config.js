const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature", // Define o padrão para arquivos Gherkin
    supportFile: "cypress/support/e2e.js", // Arquivo de suporte
    setupNodeEvents(on, config) {
      // Adiciona os plugins necessários
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    defaultCommandTimeout: 10000,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
