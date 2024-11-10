
/// <reference types="cypress" />
// / <reference types="cypress-xpath" /
// ./node_modules/.bin/cypress open
// ./node_modules/.bin/cypress run --spec cypress/e2e/My/4/Morele.cy.js

context('Morele', () => {
    beforeEach(() => {
        cy.viewport(1920, 720);
        cy.visit('https://www.morele.net/')
        cy.get('.actions > .btn-primary').click()
    })


    it('1. Odwiedzenie strony i sprawdzenie tytułu Odwiedź stronę główną aplikacji i sprawdź, czy tytuł strony jest poprawny.', () => {
        cy.title()
            .should('equal', 'Morele - zakupy online to pestka')
    });

    it('2. Kliknięcie przycisku na stronie Odwiedź stronę i kliknij przycisk, aby przejść do innej sekcji. ', () => {
        cy.viewport(1920, 720);
        cy.get('div.cn-heading').contains('KATEGORIE').realHover()

    });

    // it('3. Wypełnienie formularza i jego wysłanie Odwiedź stronę z formularzem, wypełnij go i wyślij. ', () => {

    //     cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('input[name="first_name"]').type('Jon')
    //     cy.get('input[name="last_name"]').type('Kwiatkowski')
    //     cy.get('input[name="email"]').type('Kwiatkowski@gmail.com')
    //     cy.get('textarea.feedback-input').type('dsdsdsd')

    // })

    // it('4. Wybór opcji z rozwijanego menu Odwiedź stronę z formularzem, wybierz opcję z rozwijanego menu i wyślij formularz. ', () => {
    //     cy.get('#categorymenu')
    //         .contains('Apparel & accessories')
    //         .realHover()
    //     cy.get('#categorymenu')
    //         .contains('Apparel & accessories')
    //         .get('li')
    //         .contains('T-shirts')
    //         .should('be.visible')
    //         .click()
    // })

    // it('5. Sprawdzenie obecności elementu po kliknięciu Odwiedź stronę, kliknij przycisk i sprawdź, czy nowy element pojawia się na stronie.', () => {
    //     cy.get('#block_frame_bestsellers_1771 .thumbnail')
    //         .first()
    //         .find('img')
    //         .click()
    //     cy.get('.cart').click()
    //     cy.reload()
    //     cy.get('.product-list > .table > tbody > tr')
    //         .should('have.length.greaterThan', 1);
    // })


    // it('6. Nawigacja do strony i sprawdzenie obecności tekstu Odwiedź stronę i sprawdź, czy określony tekst jest obecny. ', () => {
    //     cy.get('span.maintext')
    //         .should('include.text', 'Scrolling')
    // })

    // it('7.      Wybór wielu opcji z listy Odwiedź stronę z listą opcji, wybierz kilka z nich i sprawdź, czy są zaznaczone. ', () => {
    //     cy.get('#block_frame_bestsellers_1771 .thumbnail')
    // })

    // it('8. Wypełnienie formularza z walidacją Odwiedź stronę z formularzem, wypełnij go niepoprawnie, sprawdź komunikaty walidacyjne, a następnie popraw i wyślij. ', () => {
    //     cy.visit('https://automationteststore.com/index.php?rt=content/contact')
    //     cy.get('#ContactUsFrm_first_name')
    //         .type('Alicja')
    //     cy.get('#ContactUsFrm_email')
    //         .type('sdasdasdasd')
    //     cy.get('#ContactUsFrm_enquiry')
    //         .type('text')

    //     cy.get('button[type="submit"].btn.btn-primary.lock-on-click[title="Submit"]')
    //         .click();

    //     cy.get('div.element_error.has-error').then(($error) => {
    //         if ($error.is(':visible')) {
    //             cy.get('#ContactUsFrm_email')
    //                 .type('ContactUsFrm_email@gmai.com')
    //             cy.get('button[type="submit"].btn.btn-primary.lock-on-click[title="Submit"]')
    //                 .click();
    //         }
    //     })
    // })

    // it('9. Interakcja z elementem dynamicznym Odwiedź stronę, kliknij przycisk, aby załadować dynamiczny element, a następnie sprawdź jego zawartość. ', () => {

    // });


    // it('10.  Sprawdzenie przekierowania po zalogowaniu Odwiedź stronę logowania, zaloguj się i sprawdź, czy nastąpiło przekierowanie do strony głównej. ', () => {
    //     cy.get('#customer_menu_top > li > a')
    //         .click()
    //     cy.get('#loginFrm_loginname')
    //         .type('kkkkkksdfsfsedc')
    //     cy.get('#loginFrm_password')
    //         .type('%#TGSDfsdzbsfd')
    //     cy.get('#loginFrm > fieldset > .btn')
    //         .click()
    // });

    it('Super test', () => {
        cy.visit('https://www.morele.net/kategoria/laptopy-31/')


        cy.get('.f-values.fv-brand')
            .find('a[href="https://www.morele.net/kategoria/laptopy-31/,,,,,511,,,0,,,,18753O!1686/1/"]') // Select the <a> by its href
            .click(); // Click on the link




        // cy.get('.f-values.fv-brand')
        //     .find('.f-value.checkbox-container',)
        //     .first()
        //     .find('.checkbox')
        //     .should('be.visible')
        //     .should('not.be.disabled')
        //     .scrollIntoView({ block: 'center' })
        //     .wait(1000)
        //     .click({ force: true })
        //     .click({ force: true })
        //     .click({ force: true })
    })


    // it.only('Zadanie7', () => {
    //     cy.viewport('macbook-15'); // Set the viewport to simulate a desktop screen size

    //     cy.visit('https://www.morele.net/kategoria/czytniki-e-book-542/');

    //     // Remove the mobile-specific buttons like '.btn-show-mobile-filters'

    //     // Interact with the desktop filter for "Ekran"
    //     cy.get('.mp-content-body > .filters-wrapper > .filters-list > .filter-item-items-collapsed > [data-fhead-name="Ekran"] > .f-head')
    //         .click();

    //     // Select the checkboxes in the desktop version
    //     cy.get('.show-values > .f-values-wr > .f-values > [data-fvalue-id="1780625"] > .checkbox').click();
    //     cy.get('.show-values > .f-values-wr > .f-values > [data-fvalue-id="585999"] > .checkbox').click();

    //     // Assert that the second checkbox is checked
    //     cy.get('.show-values > .f-values-wr > .f-values > [data-fvalue-id="585999"] > .checkbox > .input-span')
    //         .should('have.class', 'checked');
    // });

    it.only('Zadanie7', () => {
        cy.viewport('macbook-15'); // Set the viewport to simulate a desktop screen size

        cy.visit('https://www.morele.net/kategoria/czytniki-e-book-542/');

        // Remove the mobile-specific buttons like '.btn-show-mobile-filters'

        // Interact with the desktop filter for "Ekran"
        cy.get('.mp-content-body > .filters-wrapper > .filters-list > .filter-item-items-collapsed > [data-fhead-name="Ekran"] > .f-head')
            .click();

        // Select the checkboxes in the desktop version
        cy.get('.show-values > .f-values-wr > .f-values > [data-fvalue-id="1780625"] > .checkbox').click();
        cy.get('.show-values > .f-values-wr > .f-values > [data-fvalue-id="585999"] > .checkbox').click();

        // Assert that the second checkbox is checked
        cy.get('.show-values > .f-values-wr > .f-values > [data-fvalue-id="585999"] > .checkbox > .input-span')
            .should('have.class', 'checked');
    });

})



