const { defineConfig } = require("cypress");
const dotenv = require('dotenv');
dotenv.config();

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      config.env.ADMIN_USER = process.env.ADMIN_USER;
      config.env.ADMIN_PASS = process.env.ADMIN_PASS;
      return config;
    }
  },
});
