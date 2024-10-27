/// <reference types="cypress" />
// ./node_modules/.bin/cypress open
// ./node_modules/.bin/cypress run
// ./node_modules/.bin/cypress run --headed
// ./node_modules/.bin/cypress run --browser chrome
// ./node_modules/.bin/cypress run --spec cypress/e2e/My/1/test.cy.js

context('biedronka', () => {
    beforeEach(() => {
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
    })

    // it('powinien mieć tytuł - Wikipedia, the free encyclopedia', () => {
    //     cy.title().should('eq', 'Wikipedia, the free encyclopedia')
    // })

    // it('powinien przycisnąć przycisk - Talk', () => {
    //     cy.get('#left-navigation')
    //         .contains('Talk')
    //         .click()
    // })

    it('powinien wypełnić formulaż search', () => {
        cy.get('#p-search > .cdx-button--fake-button > .vector-icon')
            .click()
        cy.get('.cdx-text-input__input')
            .type('dsdsd')
        cy.get('.cdx-search-input > .cdx-button')
            .click();
    })
})

