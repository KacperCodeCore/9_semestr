/// <reference types="cypress" />
// / <reference types="cypress-xpath" /
// ./node_modules/.bin/cypress open
//! ./node_modules/.bin/cypress run --spec cypress/e2e/My/4/automationteststore.cy.js

context("automationteststore", () => {
  beforeEach(() => {
    cy.visit("https://amido.com.pl/");
  });

  it("1. Odwiedzenie strony i sprawdzenie tytułu Odwiedź stronę główną aplikacji i sprawdź, czy tytuł strony jest poprawny.", () => {
    // cy.visit('https://amido.com.pl/' )
    cy.title().should("equal", "Hurtownia spożywcza online Warszawa");
  });

  it("2. Kliknięcie przycisku na stronie Odwiedź stronę i kliknij przycisk, aby przejść do innej sekcji. ", () => {
    // cy.visit('https://amido.com.pl/')
    cy.get("#contactPage").click();
  });

  it("3. Wypełnienie formularza i jego wysłanie Odwiedź stronę z formularzem, wypełnij go i wyślij. ", () => {
    // cy.visit('https://amido.com.pl/')
    cy.get("#contactPage").click();
    cy.get("#question\\[email\\]_id").type("Jon");
    cy.get("#question\\[name\\]_id").type("Jon");
    cy.get("#topic_id").type("Jon");
    cy.get("#question\\[question\\]_id").type("Jon");
  });

  it("4. Wybór opcji z rozwijanego menu Odwiedź stronę z formularzem, wybierz opcję z rozwijanego menu i wyślij formularz. ", () => {
    cy.get("#categoriesPanel").should("be.visible").click();

    cy.get("#categoriesPanel ul.mega-menu.dropdown-menu > li").first().click();

    cy.get('ul[id^="sm-"] li') // Select all <li> items within the submenu
      .contains("Dla kota") // Find the item containing the text "Dla kota"
      .click(); // Click the item
  });

  it("5. Sprawdzenie obecności elementu po kliknięciu Odwiedź stronę, kliknij przycisk i sprawdź, czy nowy element pojawia się na stronie.", () => {
    cy.get(
      ".slick-current > :nth-child(1) > .item > .abs-layout-product-slide > .abs-col-footer > :nth-child(2) > .abs-layout-purchase > .cart-widget > .purchase-buttons > .cart-button > .cart-btn"
    ).click();
    cy.get(
      "#siteFloatingHeader > .container > .abs-header-content-row > .abs-header-content-buttons > .nav > .abs-btn-cart > .abs-btn-cart-url > .abs-counter-icon"
    ).should("be.visible");
  });

  it("6. Nawigacja do strony i sprawdzenie obecności tekstu Odwiedź stronę i sprawdź, czy określony tekst jest obecny. ", () => {
    cy.get("button.cart-btn .abs-btn-msg").should("contain.text", "Do koszyka");
  });

  it("7.      Wybór wielu opcji z listy Odwiedź stronę z listą opcji, wybierz kilka z nich i sprawdź, czy są zaznaczone. ", () => {
    cy.get("ul.nav.nav-pills li").should("have.length.greaterThan", 0);
  });

  it("8. Wypełnienie formularza z walidacją Odwiedź stronę z formularzem, wypełnij go niepoprawnie, sprawdź komunikaty walidacyjne, a następnie popraw i wyślij. ", () => {
    cy.visit("https://amido.com.pl/kontakt");
    cy.get("input#question\\[email\\]_id").type("test@example.com");

    cy.get("input#question\\[name\\]_id").type("Ania");

    cy.get("#topic_id").type("Najważniejszy temat na świecie!!!!!!!!!!!");

    cy.get("#addOrderParam\\[\\]_id")
      .should("be.visible")
      .and("not.be.disabled")
      .click();

    cy.get("#question\\[question\\]_id").type(
      "Przecież to oczywiste prosze nie zadawać głupich pytań"
    );

    cy.get("#addOrderParam\\[\\]_id")
      .should("be.visible")
      .and("not.be.disabled")
      .click();

    // niestety jestem robotem ;'/
    // cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()
  });

  it("9. Interakcja z elementem dynamicznym Odwiedź stronę, kliknij przycisk, aby załadować dynamiczny element, a następnie sprawdź jego zawartość. ", () => {
    cy.visit("https://amido.com.pl/dania-gotowe");
    cy.get("td.abs-col-name.idx4").should("exist");
  });

  it.only("10.  Sprawdzenie przekierowania po zalogowaniu Odwiedź stronę logowania, zaloguj się i sprawdź, czy nastąpiło przekierowanie do strony głównej. ", () => {
    cy.visit("https://amido.com.pl/client/loginorcreate/login/");

    cy.get("#email_id").type("piniyi3632@shouxs.com");
    cy.get("#password_id").type("asdasdASasdasd@#$@342342s");
    cy.get("#login_id").click();

    cy.url().should("eq", "https://amido.com.pl/");
  });
});
