/// <reference types="cypress" />

const { func } = require("assert-plus");
const { flatMapSeries } = require("async");
const { first } = require("lodash");

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

  it("3 powinien wyszukać element na stronie przy użyciu selektorów CSS i zweryfikuj, czy jest obecny (5 różnych typów).", () => {
    cy.get(".container > .readmore > :nth-child(1)").should("be.visible");
    cy.get(".container > :nth-child(1) > .menu-newest > a").should(
      "be.visible"
    );
    cy.get(
      '.container > :nth-child(1) > .id-6 > [href="https://dobreziele.pl/sklep/guarana-i-inne"]'
    ).should("be.visible");
    cy.get(
      '.container > :nth-child(1) > .id-5 > [href="https://dobreziele.pl/sklep/zestawy"]'
    ).should("be.visible");
  });
  it("4 Kliknij na przycisk i sprawdź, czy akcja została wykonana poprawnie (3 przyciski na stronę).", () => {
    cy.get(".container > :nth-child(1) > .menu-newest > a").click();
    clickPopup();
    cy.get(".breadcrumbs").should("contain", "Nowości");

    cy.get(
      '.container > :nth-child(1) > .id-6 > [href="https://dobreziele.pl/sklep/guarana-i-inne"]'
    ).click();
    clickPopup();
    cy.get(".breadcrumbs").should("contain", "Inne Ziele");

    cy.get(
      '.container > :nth-child(1) > .id-5 > [href="https://dobreziele.pl/sklep/zestawy"]'
    ).click();
    clickPopup();
    cy.get(".breadcrumbs").should("contain", "Zestawy");
  });

  it("5 Wypełnij formularz na stronie i zweryfikuj, czy dane zostały poprawnie zapisane. ", () => {
    cy.get('[href="https://dobreziele.pl/logowanie"]').click();
    clickPopup();

    cy.get("#login_f1").type("emailtylkodokalendarza@gmail.com");
    cy.get("#login_f2").type("dfhgjxdvgwf4tywefaegwt34");
    cy.get(":nth-child(2) > form > div.tr > button").click();
    clickPopup();
    cy.get('[href="https://dobreziele.pl/wyloguj"]').should("be.visible");
  });

  it("6 Przejdź na inną stronę w aplikacji/stronie i sprawdź, czy URL został zmieniony. ", () => {
    cy.get(
      '.container > :nth-child(1) > .id-1 > [href="https://dobreziele.pl/sklep/bombille"]'
    ).click();
    clickPopup();
    cy.url().should("equal", "https://dobreziele.pl/sklep/bombille");
  });

  //!!!
  it("7 Sprawdź, czy na stronie wyświetlane są oczekiwane dane z bazy danych (w miarę możliwości). ", () => {});

  it.only("8 Przejdź przez proces zakupowy w sklepie internetowym i sprawdź, czy zamówienie zostało poprawnie złożone (później je anulować, bez płatności). ", () => {
    cy.get(".tab.active").should("be.visible");
    cy.get(".shop-item").first().click();
    clickPopup();
  });
});
