require('dotenv').config();
  describe('template spec', () => {
    it('checking login', () => {
      cy.visit('/login');
      cy.get('input[name=username]').type(Cypress.env('ADMIN_USER'));
      cy.get('input[name=username]').should('have.value', Cypress.env('ADMIN_USER'));
      cy.get('input[name=password]').type(Cypress.env('ADMIN_PASS'));
      cy.get('input[name=password]').should('have.value', Cypress.env('ADMIN_PASS'));
      cy.get('button[name=loginButton]').click()
      cy.url().should('include', '/campgrounds');
      // Verify the welcome message
      cy.contains('welcome back!');
      cy.get('a[href="/logout"]').click()
      // cy.visit('/logout');
      cy.contains('Goodbye!');
    })
  })