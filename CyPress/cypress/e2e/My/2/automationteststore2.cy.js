/// <reference types="cypress" />

const { promises } = require("combined-stream");

// / <reference types="cypress-xpath" /
// ./node_modules/.bin/cypress open
// ./node_modules/.bin/cypress run

context("Looking for dynamic element name", () => {
  const places = ["Warszawa", "lomdon", "Opole", "dsdsdsd", "Wrocław"];

  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    // cy.get('#accept-selected-cookies')
    //     .check()
    //     .click()
  });

  it("print property ", () => {
    cy.get("#categorymenu").each(($el) => {
      const itemName = $el.text().trim();

      // cy.get().then()

      cy.log(itemName);
    });
  });

  it.only("const", () => {
    // cy.get('#categorymenu')
    cy.get(".nav-pills.categorymenu > li > a").each((items) => {
      cy.wrap(items)
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
    });
  });
});
