/// <reference types="cypress" />

const { promises } = require("combined-stream");
const { invoke } = require("lodash");

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

  it("const", () => {
    // cy.get('#categorymenu')
    cy.get(".nav-pills.categorymenu > li > a").each((items) => {
      cy.wrap(items)
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
    });
  });

  it.only("alias", () => {
    cy.get(".thumbnail").as("productThumbnail"); //Alias
    cy.get("@productThumbnail").should("have.length", 16);
    cy.get("@productThumbnail").each((thumbnail) => {
      cy.wrap(thumbnail)
        // .invoke("hasClass")
        .find(".pricetag.jumbotron")
        .find('a.productcart[titme="Add to Cart"]');
      // .should("have.attr", "tittle", "Add to Cart");
      // .find('a.productcart[title="Add to Cart"]')
      // .should("exist");
      cy.wrap(thumbnail).find(".pricetag.jumbotron");
      // .should("have.attr", "title", "Add to Cart");
      // // .invoke("hasClass")
      // .contains()
      // .find('a.productcart[titme="Add to Cart"]');
      // .should("have.attr", "tittle", "Add to Cart");
      // .find('a.productcart[title="Add to Cart"]')
      // .should("exist");
    });
  });
});
