Cypress.on("uncaught:exception", (err, runnable) => {
  // Ignoruje błędy typu ReferenceError dla `header`
  if (err.message.includes("header is not defined")) {
    return false;
  }

  return true;
});

Cypress.on("uncaught:exception", (err, runnable) => {
  // Ignoruj błąd {"isTrusted":true}
  if (err.message.includes('"isTrusted":true')) {
    return false; // Ignoruje wyjątek i kontynuuje test
  }

  return true;
});

describe("Testowanie", () => {
  it("Zadanie 1", () => {
    cy.visit("https://skleptest.pl/my-account/");
    cy.get("#username").type("gruszka111@o2.pl");
    cy.get("#password").type("studia123@");
    cy.get(":nth-child(3) > .woocommerce-button").click();

    cy.get(".woocommerce-MyAccount-content > :nth-child(2) > a").should(
      "contain",
      "Log out"
    );
  });

  it("Zadanie 1 v2", () => {
    cy.visit("https://www.morele.net/login/");
    cy.get(".actions > .btn-primary").click();
    cy.get("#username").type("gruszka111@tlen.pl");
    cy.get("#password-log").type("Studia123@");
    cy.get("#login_form > .btn-primary-2").click();
    cy.url().should("eq", "https://www.morele.net/");
  });

  it("Zadanie 2", () => {
    cy.visit("https://skleptest.pl/");
    cy.get(".top-email").should("be.visible");
  });

  it("Zadanie 2 v2", () => {
    cy.visit("https://www.morele.net/");
    cy.get(".actions > .btn-primary").click();
    cy.get(".foot-menu > :nth-child(1) > .foot-menu-title").should(
      "be.visible"
    );
    cy.get(":nth-child(4) > .foot-menu-title").should("be.visible");
  });

  it("Zadanie 3", () => {
    cy.visit("https://skleptest.pl/");
    cy.get(".site-title").should("exist");
    cy.get("#recent-posts-2").should("exist");
    cy.get("#recent-comments-2 > .widget-title > span").should("exist");
    cy.get("#search-field-top-bar").should("exist");
    cy.get(".tag-link-16").should("exist");
  });

  it("Zadanie 3 v2", () => {
    cy.visit("https://www.morele.net/");
    cy.get(".actions > .btn-primary").click();
    cy.get(".swiper-slide-active > .img-container > .mx-auto").should("exist");
    cy.get(
      ".h-quick-search > .h-quick-search-box > .btn > .icon-search"
    ).should("exist");
    cy.get(".prom-box-title").should("exist");
    cy.get(
      ".h-quick-search > .h-quick-search-box > .morele-autocomplete > .ma-result-wrapper > .h-quick-search-dropdown > .morele-dropdown > .md-top > .md-button"
    ).should("exist");
    cy.get(".ps-window > .swiper-button-prev > .icon-arrow-left-circle").should(
      "exist"
    );
  });

  it("Zadanie 4", () => {
    cy.visit("https://skleptest.pl/");
    cy.get(".tag-link-16").click();
    cy.url().should("eq", "https://skleptest.pl/tag/autumn/");
    cy.get(".tag-link-17").click();
    cy.url().should("eq", "https://skleptest.pl/tag/dress/");
    cy.get(".tag-link-18").click();
    cy.url().should("eq", "https://skleptest.pl/tag/fashion/");
  });

  it("Zadanie 4 v2", () => {
    cy.visit("https://www.morele.net/");
    cy.get(".actions > .btn-primary").click();
    cy.get(".foot-menu > :nth-child(1) > ul > :nth-child(1) > a").click();
    cy.url().should("include", "https://lp.morele.net/gwarancje/");

    cy.visit("https://www.morele.net/");
    cy.get(".foot-menu > :nth-child(1) > ul > :nth-child(4) > a").click();
    cy.url().should("include", "https://www.morele.net/wiadomosci/");

    cy.visit("https://www.morele.net/");
    cy.get(".foot-menu > :nth-child(1) > ul > :nth-child(3) > a").click();
    cy.url().should("eq", "https://www.morele.net/komputery/uslugi/");
  });

  it("Zadanie 5", () => {
    cy.visit("https://skleptest.pl/my-account/");
    cy.get("#username").type("gruszka111@o2.pl");
    cy.get("#password").type("studia123@");
    cy.get(
      ".u-column1 > .woocommerce-form > :nth-child(2) > .password-input > .show-password-input"
    ).click();
    cy.get("#username").should("have.value", "gruszka111@o2.pl");
    cy.get("#password").should("have.value", "studia123@");
  });

  it("Zadanie 5 v2", () => {
    cy.visit("https://www.morele.net/login");
    cy.get(".actions > .btn-primary").click();
    cy.get('[data-target-id="register"]').click();
    cy.get("#user_userEmail").type("dsadasda@o2.pl");
    cy.get("#user_plainPassword").type("Ddsadfdsf@123");
    cy.get(
      "#register_form > #accept_regulation > .switch-container > .switch > .slider > .circle"
    ).click();
    cy.get(
      "#register_form > .nst-is-collapsed > .form-control-input > .switch-container > .switch > .slider"
    ).click();
    cy.get("#register_form > .btn-primary-2").click();
    cy.get("#register_form > .btn-primary-2").click();
    cy.get(".mn-body").should("be.visible");
  });
  it("Zadanie 6", () => {
    cy.visit("https://skleptest.pl/");
    cy.get(".tag-link-21").click();
    cy.url().should("eq", "https://skleptest.pl/tag/trends/");
  });

  it("Zadanie 6 v2", () => {
    cy.visit("https://www.morele.net/");
    cy.get(".actions > .btn-primary").click();
    cy.get(".foot-menu > :nth-child(3) > ul > :nth-child(5) > a").click();
    cy.url().should("eq", "https://www.morele.net/info/kariera/");
  });

  it("Zadanie 7", () => {
    cy.visit("https://skleptest.pl/my-account/");
    cy.get("#username").type("gruszka111@o2.pl");
    cy.get("#password").type("studia123@");
    cy.get(":nth-child(3) > .woocommerce-button").click();
    cy.get(".woocommerce-MyAccount-navigation-link--orders > a").click();
    cy.get(".woocommerce-orders-table__cell-order-number").should(
      "include",
      "8457"
    );
  });

  it.only("Zadanie 7 v2", () => {
    cy.visit("https://www.morele.net/login");
    cy.get(".actions > .btn-primary").click();
    cy.get("#username").type("gruszka111@tlen.pl");
    cy.get("#password-log").type("Studia123@");
    cy.get("#login_form > .btn-primary-2").click();
    cy.get(":nth-child(4) > .js-action-button").click();
    cy.get(":nth-child(4) > .js-action-button").click();
    cy.get(":nth-child(1) > .mUSER-pm-menu > :nth-child(1) > a").click();
    cy.get(".order-list-empty").should("be.visible");
  });

  it("Zadanie 8", () => {
    cy.visit("https://skleptest.pl/my-account/");
    cy.get("#username").type("gruszka111@o2.pl");
    cy.get("#password").type("studia123@");
    cy.get(":nth-child(3) > .woocommerce-button").click();
    cy.get(".woocommerce-MyAccount-navigation-link--orders > a").click();
    cy.get("#desktop-menu > #menu-item-142 > a").click();
    cy.get(".top-cart > a").click();
    cy.get(".checkout-button").click();
    cy.get("#billing_first_name").type("dasdasdsad");
    cy.get("#billing_last_name").type("dsadsa");
    cy.get("#billing_address_1").type("g1233");
    cy.get("#billing_postcode").type("46-100");
    cy.get("#billing_city").type("3123");
    cy.get("#place_order").type("3123"); //
  });

  it("Zadanie 8 v2", () => {
    cy.visit("https://www.morele.net/login");
    cy.get(".actions > .btn-primary").click();
    cy.get("#username").type("gruszka111@tlen.pl");
    cy.get("#password-log").type("Studia123@");
    cy.get("#login_form > .btn-primary-2").click();
    cy.get(
      ".slider-box-wr.slider-box-recommended > .slider-box-slider > .swiper-container > .swiper-wrapper > .swiper-slide-active"
    ).click();
    cy.get(".mobile-sticky-add-to-cart > :nth-child(2) > .btn").click();
    cy.get(".md-footer > .js_no-warrant-btn").click();
    cy.get(".product-box > .btn").click();
    cy.get(".confirm-button").click();
    cy.get(".modal-sticky-footer > .d-block").click();
    cy.get("#_name_1_2").type("Adrian");
    cy.get("#_name_2_2").type("Wojtek");
    cy.get("#_phone_0").type("997998997");
    cy.get("#_street_0").type("2");
    cy.get("#_zip_code_0").type("46-100");
    cy.get("#_city_0").type("Namysłów");
    cy.get(".confirm-button").click();
  });

  it("Zadanie 9", () => {
    cy.visit("https://skleptest.pl/my-account/");
    cy.get(".register > :nth-child(1) > label").type("dsadasda@o2.pl");
    cy.get(".register > :nth-child(2) > label").type("ddsadfdsf@123");
    cy.get(".woocommerce-FormRow > .woocommerce-Button").click();
    cy.get(".woocommerce-error > li").should("be.visible");
  });

  it("Zadanie 9 v2", () => {
    cy.visit("https://www.morele.net/login");
    cy.get(".actions > .btn-primary").click();
    cy.get('[data-target-id="register"]').click();
    cy.get("#user_userEmail").type("dsadasdaaa@o2.pl"); //podac inne dane przy kazdym razie
    cy.get("#user_plainPassword").type("Ddsadfdsf@123");
    cy.get(
      "#register_form > #accept_regulation > .switch-container > .switch > .slider > .circle"
    ).click();
    cy.get(
      "#register_form > .nst-is-collapsed > .form-control-input > .switch-container > .switch > .slider"
    ).click();
    cy.get("#register_form > .btn-primary-2").click();
    cy.get("#register_form > .btn-primary-2").click();
    cy.get(
      '[style="bottom: 86px;"] > .mn-body-wr > .mn-icon > .icon-popup-success'
    ).should("be.visible");
  });

  it("Zadanie 10", () => {
    cy.visit("https://skleptest.pl/my-account/");
    cy.get(".woocommerce-FormRow > .woocommerce-Button").click();
    cy.get(".woocommerce-error").should(
      "contain",
      "Please provide a valid email address."
    );
  });

  it("Zadanie 10 v2", () => {
    cy.visit("https://www.morele.net/login");
    cy.get(".actions > .btn-primary").click();
    cy.get('[data-target-id="register"]').click();
    cy.get("#register_form > .btn-primary-2").click();
    cy.get(":nth-child(2) > .form-control-error").should("be.visible");
  });

  it("Zadanie 11", () => {
    cy.visit("https://skleptest.pl/");
    // Przykład: Sprawdzenie widoczności elementu stopki
    cy.scrollTo("bottom"); // Przewinięcie do dołu strony
    cy.get("#text-2 > .widget-title").should("be.visible");

    cy.scrollTo(0, 500); // Przewinięcie w dół o 500 pikseli
    cy.get("#text-2 > .widget-title > span").should("be.visible");
  });

  it("Zadanie 11 v2", () => {
    cy.visit("https://www.morele.net/");
    cy.get(".actions > .btn-primary").click();
    cy.scrollTo("bottom"); // Przewinięcie do dołu strony
    cy.get(":nth-child(3) > ul > :nth-child(13) > a").should("be.visible");

    cy.scrollTo(0, 500); // Przewinięcie w dół o 500 pikseli
    cy.get(
      "#js_about_company-slider > .slider-box-wr > .slider-box-head > .slider-box-title"
    ).should("be.visible");
  });

  it("Zadanie 13", () => {
    cy.visit("https://skleptest.pl/my-account/");
    cy.get(".register > :nth-child(1) > label").type("ewqeqwe");
    cy.get(".register > :nth-child(2) > label").type("eee");
    cy.get(":nth-child(3) > .woocommerce-button").click();
    cy.get(".woocommerce-error > li").should(
      "contain",
      "Username is required."
    );
  });

  it("Zadanie 13 v2", () => {
    cy.visit("https://www.morele.net/login");
    cy.get(".actions > .btn-primary").click();
    cy.get("#username").type("gruszka1111@tlen.pl");
    cy.get("#password-log").type("Studia123@");
    cy.get("#login_form > .btn-primary-2").click();
    cy.get(".mn-body").should("contain", "nie są poprawne");
  });

  it("Zadanie 14", () => {
    const viewports = [
      { device: "iPhone 6", width: 375, height: 667 },
      { device: "iPad Mini", width: 768, height: 1024 },
      { device: "Laptop", width: 1366, height: 768 },
      { device: "4K Monitor", width: 3840, height: 2160 },
    ];

    cy.visit("https://skleptest.pl");
    viewports.forEach(({ device, width, height }) => {
      it(`Powinnno poprawnie wyświetlać się na urządzeniu: ${device}`, () => {
        cy.viewport(width, height);

        cy.get(".site-branding > .row").should("be.visible"); // Nagłówek strony
        cy.get("#colophon").should("be.visible"); // Stopka strony
      });
    });
  });

  it("Zadanie 14 v2", () => {
    const viewports = [
      { device: "iPhone 6", width: 375, height: 667 },
      { device: "iPad Mini", width: 768, height: 1024 },
      { device: "Laptop", width: 1366, height: 768 },
      { device: "4K Monitor", width: 3840, height: 2160 },
    ];

    cy.visit("https://www.morele.net/");
    cy.get(".actions > .btn-primary").click();
    viewports.forEach(({ device, width, height }) => {
      it(`Powinno poprawnie wyświetlać się na urządzeniu: ${device}`, () => {
        cy.viewport(width, height);

        cy.get(".h-quick-search > .h-quick-search-box > .btn").should(
          "be.visible"
        );
        cy.get(".foot-social").should("be.visible");
      });
    });
  });

  it("Zadanie 15", () => {
    cy.visit("https://skleptest.pl/");
    cy.get("#recent-posts-2 > ul > :nth-child(1) > a").click();
    cy.url().should("include", "/best-fabrics-dream-dress-dare-try");
  });

  it("Zadanie 15 v2", () => {
    cy.visit("https://www.morele.net/");
    cy.get(".actions > .btn-primary").click();
    cy.get(".foot-menu > :nth-child(3) > ul > :nth-child(3) > a").click();
    cy.url().should("eq", "https://lp.morele.net/newsletter/");
  });

  it("Zadanie 16", () => {
    const viewports = [
      { label: "iPhone 6", width: 375, height: 667 },
      { label: "iPad Mini", width: 768, height: 1024 },
      { label: "Laptop", width: 1366, height: 768 },
      { label: "4K Monitor", width: 3840, height: 2160 },
    ];

    cy.visit("https://skleptest.pl/");
    viewports.forEach(({ label, width, height }) => {
      // Zmień rozmiar okna
      cy.viewport(width, height);

      cy.get(".site-branding > .row").should("be.visible"); // Nagłówek strony
      cy.get("#colophon").should("be.visible"); // Stopka strony

      //Sprawdza, czy menu nawigacyjne zmienia się w zależności od rozdzielczości
      if (width <= 768) {
        cy.get(".top-email").should("be.visible");
        cy.get("#mobile-menu-trigger > .fa").should("be.visible");
      }
    });
  });

  it("Zadanie 16 v2", () => {
    const viewports = [
      { label: "iPhone 6", width: 375, height: 667 },
      { label: "iPad Mini", width: 768, height: 1024 },
      { label: "Laptop", width: 1366, height: 768 },
      { label: "4K Monitor", width: 3840, height: 2160 },
    ];

    cy.visit("https://www.morele.net/");
    cy.get(".actions > .btn-primary").click();
    viewports.forEach(({ label, width, height }) => {
      // Zmień rozmiar okna
      cy.viewport(width, height);

      cy.get(".foot-menu > :nth-child(3) > ul > :nth-child(8) > a").should(
        "be.visible"
      );
      cy.get('[rel="nofollow noopener noreferrer"]').should("be.visible"); // Stopka strony

      //  Sprawdza, czy menu nawigacyjne zmienia się w zależności od rozdzielczości
      if (width <= 768) {
        cy.get(".promotion-box > .btn-primary").should("be.visible");
        cy.get(".foot-menu > :nth-child(2) > ul > :nth-child(1) > a").should(
          "be.visible"
        );
      }
    });
  });

  it("Zadanie 17", () => {
    cy.visit("https://skleptest.pl/my-account/");
    cy.get(".woocommerce-LostPassword > a").click();
    cy.get("#user_login").type("gruszka111@o2.pl");
    cy.get(".woocommerce-Button").click();
    cy.get(".woocommerce-message").should(
      "contain",
      "Password reset email has been sent."
    );
  });

  it("Zadanie 17 v2", () => {
    cy.visit("https://www.morele.net/login");
    cy.get(".actions > .btn-primary").click();
    cy.get(".remember-me > a").click();
    cy.get("#reset_password_email").type("gruszka111@o2.pl");
    cy.get(":nth-child(6) > .btn").click();
    cy.get(".form-control-error").should("be.visible");
  });

  it("Zadanie 18", () => {
    cy.visit("https://www.ungm.org/");
    cy.get("#language-selector").select(2);
    cy.get(".-mx-3 > li > .inline-block > .flex > :nth-child(1)").should(
      "contain",
      "ayuda"
    );
  });

  it("Zadanie 18 v2", () => {
    cy.visit("https://www.coe.int/en/web/portal/home");
    cy.get("#ppms_cm_agree-to-all").click();
    cy.get(
      ".justify-content-between > .justify-content-around > .languages > .dropdown > .dropdown-toggle"
    ).click();
    cy.get(
      ".justify-content-between > .justify-content-around > .languages > .dropdown > .dropdown-menu > #p_p_id_com_liferay_site_navigation_language_web_portlet_SiteNavigationLanguagePortlet_INSTANCE_portlet_com_liferay_site_navigation_language_web_portlet_SiteNavigationLanguagePortlet_coe_2014_ > #portlet_com_liferay_site_navigation_language_web_portlet_SiteNavigationLanguagePortlet_INSTANCE_portlet_com_liferay_site_navigation_language_web_portlet_SiteNavigationLanguagePortlet_coe_2014 > .portlet-content > .portlet-content-container > .portlet-body > .de_DE > .language-entry"
    ).click();
    cy.get(".you-are-here").should("contain", "sind hier");
  });

  describe("Test aplikacji na różnych przeglądarkach", () => {
    const browsers = ["chrome", "firefox", "edge"]; // Lista przeglądarek

    browsers.forEach((browser) => {
      it(`Zadanie 19 - Test na przeglądarce: ${browser}`, () => {
        cy.visit("https://skleptest.pl");
        cy.viewport(1366, 768);

        // Sprawdzenie widoczności nagłówka na stronie
        cy.get("#recent-posts-2").should("be.visible"); // Nagłówek strony
      });
    });
  });

  describe("Test aplikacji na różnych przeglądarkach", () => {
    const browsers = ["chrome", "firefox", "edge"]; // Lista przeglądarek

    browsers.forEach((browser) => {
      it(`Zadanie 19  v2 - Test na przeglądarce: ${browser}`, () => {
        cy.visit("https://www.morele.net/login");
        cy.get(".actions > .btn-primary").click();
        cy.viewport(1366, 768);

        //Sprawdzenie widoczności nagłówka na stronie
        cy.get(".logo > a > img").should("be.visible"); // Nagłówek strony
      });
    });
  });

  it("Zadanie 20", () => {
    cy.visit("https://skleptest.pl/");
    //Nasłuchuj błędów w konsoli przeglądarki
    cy.window().then((window) => {
      //Przechwyć wszystkie błędy w konsoli
      const consoleErrorSpy = cy.spy(window.console, "error");
      cy.get("#desktop-menu > #menu-item-118 > a").click();
      cy.wrap(consoleErrorSpy).should("not.have.been.called");
    });
  });

  it("Zadanie 20 v2", () => {
    cy.visit("https://www.morele.net/");
    cy.get(".actions > .btn-primary").click();
    //Nasłuchuj błędów w konsoli przeglądarki
    cy.window().then((window) => {
      //Przechwyć wszystkie błędy w konsoli
      const consoleErrorSpy = cy.spy(window.console, "error");
      cy.get(".foot-menu > :nth-child(4) > ul > :nth-child(1) > a").click();
      cy.wrap(consoleErrorSpy).should("not.have.been.called");
    });
  });
});
