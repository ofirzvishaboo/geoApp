// cypress/page-objects/RegisterPage.js
class RegisterPage {
    visit() {
      cy.visit('/register');
    }

    getUsernameInput() {
      return cy.get('input[name=username]');
    }

    getEmailInput() {
        return cy.get('input[name=email]');
    }

    getPasswordInput() {
      return cy.get('input[name=password]');
    }

    getRegisterButton() {
      return cy.get('button[name=registerButton]');
    }

    getLogoutButton() {
        return cy.get('a[href="/logout"]')
    }

    login(username, email, password) {
      this.visit();
      this.getUsernameInput().type(username).should('have.value', username);
      this.getEmailInput().type(email).should('have.value', email);
      this.getPasswordInput().type(password).should('have.value', password);
      this.getRegisterButton().click();
    }

    verifyRegister() {
      cy.url().should('include', '/campgrounds');
      cy.contains('Welcome to Yelp Camp');
    }

    logout() {
      this.getLogoutButton().click();
      cy.contains('Goodbye!');
    }
}

export default RegisterPage;