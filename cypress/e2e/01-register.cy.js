require('dotenv').config();
// cypress/e2e/login.spec.js
const RegisterPage = require('../page-objects/registerPage');

describe('Login Test', () => {
  const registerPage = new RegisterPage();

  it('should log in successfully', () => {
    // Replace these with valid credentials or use environment variables
    const username = 'yakov';
    const email = 'wow@examle.com';
    const password = Cypress.env('ADMIN_PASS');

    registerPage.login(username, email, password);
    registerPage.verifyRegister()

    registerPage.logout()

    // Add assertions as needed, for example:
    cy.url().should('include', '/campgrounds');
  });
});