// cypress/page-objects/LoginPage.js
class LoginPage {
    visit() {
      cy.visit('/login');
    }

    getUsernameInput() {
      return cy.get('input[name=username]');
    }

    getPasswordInput() {
      return cy.get('input[name=password]');
    }

    getLoginButton() {
      return cy.get('button[name=loginButton]');
    }

    getLogoutButton() {
        return cy.get('a[href="/logout"]')
    }

    login(username, password) {
      this.visit();
      this.getUsernameInput().type(username).should('have.value', username);
      this.getPasswordInput().type(password).should('have.value', password);
      this.getLoginButton().click();
    }

    verifyLogin() {
      cy.url().should('include', '/campgrounds');
      cy.contains('welcome back!');
    }

    logout() {
      this.getLogoutButton().click();
      cy.contains('Goodbye!');
    }
}

//   export default LoginPage;
//   describe('template spec', () => {
//     it('checking login', () => {
//       cy.visit('/login');
//       cy.get('input[name=username]').type(Cypress.env('ADMIN_USER'));
//       cy.get('input[name=username]').should('have.value', Cypress.env('ADMIN_USER'));
//       cy.get('input[name=password]').type(Cypress.env('ADMIN_PASS'));
//       cy.get('input[name=password]').should('have.value', Cypress.env('ADMIN_PASS'));
//       cy.get('button[name=loginButton]').click()
//       cy.url().should('include', '/campgrounds');
//       // Verify the welcome message
//       cy.contains('welcome back!');
//       cy.get('a[href="/logout"]').click()
//       // cy.visit('/logout');
//       cy.contains('Goodbye!');
//     })
//   })