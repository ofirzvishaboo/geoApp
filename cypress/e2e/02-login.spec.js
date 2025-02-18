require('dotenv').config();
// cypress/e2e/login.spec.js
import LoginPage from '../page-objects/loginPage';

describe('Login Test', () => {
  const loginPage = new LoginPage();

  it('should log in successfully', () => {
    // Replace these with valid credentials or use environment variables
    const username = Cypress.env('ADMIN_USER');
    const password = Cypress.env('ADMIN_PASS');

    loginPage.login(username, password);
    loginPage.verifyLogin()

    loginPage.logout()

    // Add assertions as needed, for example:
    cy.url().should('include', '/campgrounds');
  });
});

