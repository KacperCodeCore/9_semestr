// ./node_modules/.bin/cypress open
/// <reference types="cypress" />

describe("Handle js alerts", () => {
  it("Confirm js alert contains the correct text", () => {
    //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#button1").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });
});


