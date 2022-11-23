// https://docs.cypress.io/api/introduction/api.html

//Test all requested functions in e2e testing

describe('Check if the listpage loads and works corretly', () => {
  it('load the page with content from api', () => {
    cy.visit('/')
    cy.contains('h1', 'dev articles')
    cy.get('.nav')
    cy.get('.card')
    cy.get('.btn-outline')
  })

  it('like layout by clicking like button on card', () => {
    cy.get('.btn').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get('.btn').click({ multiple: true })
    cy.get('.btn').should('have.css', 'background-color', 'rgb(0, 164, 224)')
  })

  it('sort by author name', () => {
    cy.get('select').select('Alphabetical').should('have.value', 'auth')
    cy.get('.card__author__data').first().contains('Andreas')
  })

  it('sort by author date added inc', () => {
    cy.get('select').select('Date inc').should('have.value', 'inc')
    cy.get('.card__author__data').first()< cy.get('.card__author__data').last()
  })

  it('sort by author date added dec', () => {
    cy.get('select').select('Date dec').should('have.value', 'dec')
    cy.get('.card__author__data').first()> cy.get('.card__author__data').last()
  })

  it('filter for only latest', () => {
    cy.get('[type="checkbox"]').check()
    cy.get('.card__author__data').contains('2022');
    cy.get('[type="checkbox"]').uncheck()
  })

  it('search VueJS Layout', () => {
    cy.get('[type="search"]').type('vue')
    cy.get('.card__title').first().contains('VueJs')
  })

})