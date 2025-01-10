/// <reference types="cypress" />

const { flatMapSeries } = require("async");

// / <reference types="cypress-xpath" /
// ./node_modules/.bin/cypress open

context("automationteststore", () => {
  beforeEach(() => {
    cy.visit("https://webdriveruniversity.com/Popup-Alerts/index.html");
  });

  it("alert 1", () => {
    cy.get("#button1").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });

  it("alert 2", () => {
    cy.get("#button4").click();
    cy.on("window:confirm", (str) => {
      return true;
    });

    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });

  
  it.only("alert 2", () => {
    cy.get("#button4").click().then(()=>{
        expect(stub.get)
    })

    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });
});
