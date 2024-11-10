
/// <reference types="cypress" />
// / <reference types="cypress-xpath" / 
// ./node_modules/.bin/cypress open
// ./node_modules/.bin/cypress run --spec cypress/e2e/My/Google.cy.js

context('Looking for dynamic element name', () => {
    const places = ['Warszawa', 'lomdon', 'Opole', 'dsdsdsd', 'Wrocław']

    beforeEach(() => {
        cy.visit('www.google.com')
        cy.get('#W0wltc > .QS5gu').click()
    })

    it('loop ', () => {

        places.forEach((name) => {
            cy.visit('www.google.com', 3000)

            cy.get('#APjFqb')
                .type(name)
                .type('{enter}');


            cy.get('.PZPZlf.ssJ7i.B5dxMb')
                .invoke('text')
                .then((text) => {
                    if (text == name) {
                        cy.log(`${name} found!`); // Log message if true
                    } else {
                        cy.log(`${name} not found!`); // Log message if falses
                    }
                })
        })
    });
})