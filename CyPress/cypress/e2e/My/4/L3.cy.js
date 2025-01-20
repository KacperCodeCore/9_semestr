/// <reference types="cypress" />

const { func } = require("assert-plus");
const { flatMapSeries } = require("async");

// / <reference types="cypress-xpath" /
// ./node_modules/.bin/cypress open

context("automationteststore", () => {
  function clickPopup() {
    cy.get("body").then(($body) => {
      if ($body.find(".close-yerba > img").length > 0) {
        // Jeśli element istnieje, kliknij
        cy.get(".close-yerba > img").click();
      } else {
        // Jeśli element nie istnieje, wykonaj inną logikę lub zignoruj
        cy.log(
          "Element .close-yerba > img nie został znaleziony, przechodzę dalej"
        );
      }
    });
  }
  beforeEach(() => {
    cy.viewport(1450, 800);
    cy.visit("https://dobreziele.pl/");
    cy.get("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll").click();
    clickPopup();
  });

  it("1 powinien Zalogować się do aplikacji/na stronę przy użyciu Cypress i zweryfikuj, czy jest poprawnie zalogowany. ", () => {
    cy.get('[href="https://dobreziele.pl/logowanie"]').click();
    clickPopup();

    cy.get("#login_f1").type("emailtylkodokalendarza@gmail.com");
    cy.get("#login_f2").type("dfhgjxdvgwf4tywefaegwt34");
    cy.get(":nth-child(2) > form > div.tr > button").click();

    clickPopup();
    cy.get('[href="https://dobreziele.pl/wyloguj"]').should("be.visible");
  });

  it("2 powinien przejsc na stronę główną aplikacji/strony internetowej i sprawdź, czy wyświetlane są oczekiwane elementy.", () => {
    // clickPopup();
    cy.get(".page-start > :nth-child(11)").should("be.visible");
    cy.get(".page-start > :nth-child(14)").should("be.visible");
  });

  it.only("3 powinien wyszukać element na stronie przy użyciu selektorów CSS i zweryfikuj, czy jest obecny (5 różnych typów).", () => {
    cy.get(".page-start > :nth-child(11)").click();
    cy.get(".page-start > :nth-child(14)").should("be.visible");
  });
});
