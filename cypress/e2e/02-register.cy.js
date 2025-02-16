require('dotenv').config();
  describe('template spec', () => {
    it('checking register', () => {
      cy.visit('/register');
      cy.get('input[name=username]').type(Cypress.env('ADMIN_USER'));
      cy.get('input[name=username]').should('have.value', Cypress.env('ADMIN_USER'));
      cy.get('input[name=email]').type('wow@examle.com');
      cy.get('input[name=email]').should('have.value', 'wow@examle.com');
      cy.get('input[name=password]').type(Cypress.env('ADMIN_PASS'));
      cy.get('input[name=password]').should('have.value', Cypress.env('ADMIN_PASS'));
      cy.get('button[name=registerButton]').click()
      cy.url().should('include', '/campgrounds');
      // Verify the welcome message
      cy.contains('Welcome to Yelp Camp');
      cy.get('a[href="/logout"]').click()
      // cy.visit('/logout');
      cy.contains('Goodbye!');
    })
  })