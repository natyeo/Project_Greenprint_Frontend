/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('.type() - type into a DOM element', () => {
    cy.get('input[name="from"')
      .type('London').should('have.value', 'London')

    cy.get('input[name="to"')
      .type('Paris').should('have.value', 'Paris')  
  })

  it('.submit() - submit a form', () => {
    cy.get('form')
      .find('input[name="from"]').type('Cardiff')
    cy.get('form')  
      .find('input[name="to"]').type('London')
    cy.get('form').submit()
    cy.get('#list').should('contain', 'Your travel options:')
  })
})
