/// <reference types="cypress" />

const { func } = require("assert-plus");
const { flatMapSeries } = require("async");
const { first } = require("lodash");

// / <reference types="cypress-xpath" /
// ./node_modules/.bin/cypress open

context("automation test store", () => {
  //
  Cypress.on("uncaught:exception", (err, runnable) => {
    if (err.message.includes("header is not defined")) {
      return false;
    }

    return true;
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    if (err.message.includes('"isTrusted":true')) {
      return false;
    }

    return true;
  });

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

  function isVisiting() {
    const skipTestsWords = ["7", "Block", "Restricted"];
    const testTitle = this.currentTest.title;
    const firstWord = testTitle.split(" ")[0];

    if (skipTestsWords.includes(firstWord)) {
      return false;
    } else {
      return true;
    }
  }

  beforeEach(() => {
    cy.viewport(1450, 800);
    switch (Cypress.currentTest.title.split(" ")[0]) {
      case "m":
        // cy.wait(500);
        break;
      case "mo":
        cy.visit("https://www.morele.net/");
        cy.get(".actions > .btn-primary").click();
        break;
      case "st":
        cy.visit("https://skleptest.pl/");
        break;
      case "dz":
        cy.visit("https://dobreziele.pl/");
        cy.get(
          "#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"
        ).click();
        clickPopup();
        break;
      default:
        // default
        break;
    }
  });

  it("dz 1 powinien Zalogować się do aplikacji/na stronę przy użyciu Cypress i zweryfikuj, czy jest poprawnie zalogowany. ", () => {
    cy.get('[href="https://dobreziele.pl/logowanie"]').click();
    clickPopup();

    cy.get("#login_f1").type("emailtylkodokalendarza@gmail.com");
    cy.get("#login_f2").type("dfhgjxdvgwf4tywefaegwt34");
    cy.get(":nth-child(2) > form > div.tr > button").click();

    clickPopup();
    cy.get('[href="https://dobreziele.pl/wyloguj"]').should("be.visible");
  });

  it("dz 2 powinien przejsc na stronę główną aplikacji/strony internetowej i sprawdź, czy wyświetlane są oczekiwane elementy.", () => {
    // clickPopup();
    cy.get(".page-start > :nth-child(11)").should("be.visible");
    cy.get(".page-start > :nth-child(14)").should("be.visible");
  });

  it("dz 3 powinien wyszukać element na stronie przy użyciu selektorów CSS i zweryfikuj, czy jest obecny (5 różnych typów).", () => {
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
  it("dz 4 Kliknij na przycisk i sprawdź, czy akcja została wykonana poprawnie (3 przyciski na stronę).", () => {
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

  it("dz 5 Wypełnij formularz na stronie i zweryfikuj, czy dane zostały poprawnie zapisane. ", () => {
    cy.get('[href="https://dobreziele.pl/logowanie"]').click();
    clickPopup();

    cy.get("#login_f1").type("emailtylkodokalendarza@gmail.com");
    cy.get("#login_f2").type("dfhgjxdvgwf4tywefaegwt34");
    cy.get(":nth-child(2) > form > div.tr > button").click();
    clickPopup();
    cy.get('[href="https://dobreziele.pl/wyloguj"]').should("be.visible");
  });

  it("dz 6 Przejdź na inną stronę w aplikacji/stronie i sprawdź, czy URL został zmieniony. ", () => {
    cy.get(
      '.container > :nth-child(1) > .id-1 > [href="https://dobreziele.pl/sklep/bombille"]'
    ).click();
    clickPopup();
    cy.url().should("equal", "https://dobreziele.pl/sklep/bombille");
  });

  it("mo 7 Sprawdź, czy na stronie wyświetlane są oczekiwane dane z bazy danych (w miarę możliwości). ", () => {
    cy.get(".h-user-control > .btn-link > .h-control-btn-label").click();
    cy.get(".actions > .btn-primary").click();
    cy.get("#username").type("rogirec105@rykone.com");
    cy.get("#password-log").type("Dd3!23432");
    cy.get("#login_form > .btn-primary-2").click();
    cy.get(":nth-child(4) > .js-action-button").click();
    cy.get(":nth-child(4) > .js-action-button").click();
    cy.get(":nth-child(1) > .mUSER-pm-menu > :nth-child(1) > a").click();
    cy.get(".order-list-empty").should("be.visible");
  });

  it("dz 8 Przejdź przez proces zakupowy w sklepie internetowym i sprawdź, czy zamówienie zostało poprawnie złożone (później je anulować, bez płatności). ", () => {
    cy.get(".tab.active").should("be.visible");
    cy.get(
      '[style="background-image:url(https://dobreziele.pl/!data/shop/s_shop_6728.jpg?nc=1737548824)"]'
    ).click();
    clickPopup();
    cy.get(".basket").click();
    cy.get(".basket-box > span").should("be.visible");
  });

  it("st 9 Przejdź przez proces rejestracji użytkownika i sprawdź, czy nowe konto zostało utworzone. ", () => {
    cy.get(".top-account").click();
    cy.get(".register > :nth-child(1) > label").type("rogirec105@rykone.com");
    cy.get(".register > :nth-child(2) > label").type("Dd3!23432");
    cy.get(".woocommerce-FormRow > .woocommerce-Button").click();
    cy.get(".woocommerce-error > li").should("be.visible");
  });

  it("mo 9 ", () => {
    cy.visit("https://www.morele.net/login");
    cy.get(".actions > .btn-primary").click();
    cy.get('[data-target-id="register"]').click();

    cy.get("#user_userEmail").type("rogirec105@rykone.com");
    cy.get("#user_plainPassword").type("Dd3!23432");

    cy.get(
      "#register_form > #accept_regulation > .switch-container > .switch > .slider > .circle"
    ).click();
    cy.get(
      "#register_form > .nst-is-collapsed > .form-control-input > .switch-container > .switch > .slider"
    ).click();

    cy.get("#register_form > .btn-primary-2").click();
    cy.get("#register_form > .btn-primary-2").click();

    cy.get(".h-contact-control > .h-control-btn > .h-control-btn-label").should(
      "be.visible"
    );
  });

  it("10 Zweryfikuj, czy na stronie wyświetlane są oczekiwane komunikaty błędów (nie dotyczy niepoprawnego logowania – patrz zad.13). ", () => {
    cy.visit("https://www.morele.net/info/napisz_zapytanie/4/");
    cy.get(".actions > .btn-primary").click();
    cy.get(":nth-child(11) > .btn").click();
    cy.get(":nth-child(5) > .error > span").should("be.visible");
  });

  it("10 Zweryfikuj, czy na stronie wyświetlane są oczekiwane komunikaty błędów (nie dotyczy niepoprawnego logowania – patrz zad.13). ", () => {
    cy.visit("https://skleptest.pl/my-account/");
    cy.get(".woocommerce-FormRow > .woocommerce-Button").click();
    cy.get(".woocommerce-error").should("be.visible");
  });

  it("mo 11 Sprawdź, czy elementy na stronie są widoczne po odpowiednich akcjach, takich jak przewinięcie strony. ", () => {
    cy.scrollTo("bottom");
    cy.get(":nth-child(3) > ul > :nth-child(13) > a").should("be.visible");

    cy.scrollTo(0, 1000);
    cy.get(
      ".slider-box-wr.slider-box-recommended > .slider-box-slider > .swiper-container > .swiper-wrapper > .swiper-slide-active > .ps-image > .swiper-lazy"
    ).should("be.visible");
  });

  it("dz 11", () => {
    cy.scrollTo(0, 1000);
    cy.get(".tab.active > :nth-child(6)").should("be.visible");
  });

  it.only("12 Wykonaj operacje na elementach, takie jak przeciąganie i upuszczanie, i sprawdź, czy działają poprawnie. ", () => {
    cy.visit("https://material.angular.io/cdk/drag-drop/examples");
    cy.wait(2000);
    cy.get('[cdkdraglockaxis="x"]').move({ x: 200, y: 0 });

    // cy.get("#drag1")
    //   .trigger("mousedown", { which: 1 }) // Click and hold the element
    //   .trigger("dragstart"); // Start dragging

    // cy.get("#div2")
    //   .trigger("dragenter") // Enter the drop target
    //   .trigger("dragover") // Hover over the drop target
    //   .trigger("drop"); // Drop the dragged element

    // cy.get("#drag1").trigger("dragend"); // End the drag operation

    // cy.get("#drag1")
    //   .trigger("mousedown", { which: 0 })
    //   .trigger("mousemove", { clientX: 200, clientY: 0 });
    // cy.get("#div2").trigger("mousemove").trigger("drop");
  });
  it("d 13 Przejdź przez proces logowania przy użyciu nieprawidłowych danych i sprawdź, czy otrzymujesz odpowiednie komunikaty błędów. ", () => {
    cy.get('[href="https://dobreziele.pl/logowanie"]').click();
    clickPopup();

    cy.get("#login_f1").type("emailtylkodrza@gmail.com");
    cy.get("#login_f2").type("dfhgjxdvgwwefaegwt34");
    cy.get(":nth-child(2) > form > div.tr > button").click();

    clickPopup();
    cy.get(":nth-child(2) > .alert").should(
      "contain",
      "Błędny e-mail lub hasło!"
    );
  });
  it("14 Sprawdź, czy strona jest responsywna i poprawnie wyświetla się na różnych urządzeniach. ", () => {
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  });
  it("15 Zweryfikuj, czy przyciski i linki na stronie prowadzą do odpowiednich miejsc. ", () => {
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  });
  it("", () => {
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  });
  it("16 Sprawdź, czy elementy na stronie są poprawnie wyświetlane po zmianie rozmiaru okna przeglądarki. ", () => {
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  });
  it("17 Przejdź przez proces resetowania hasła i sprawdź, czy nowe hasło zostało poprawnie ustawione. ", () => {
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  });
  it("18 Sprawdź, czy aplikacja poprawnie obsługuje różne języki i tłumaczenia. ", () => {
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  });
  it("19 Wykonaj testy na różnych przeglądarkach i sprawdź, czy aplikacja działa poprawnie na każdej z nich. ", () => {
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  });
  it("20 Zweryfikuj, czy na stronie nie ma żadnych błędów w konsoli przeglądarki. ", () => {
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  });
});
