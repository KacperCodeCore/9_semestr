
/// <reference types="cypress" />
// / <reference types="cypress-xpath" / 
// ./node_modules/.bin/cypress open
// ./node_modules/.bin/cypress run --spec cypress/e2e/My/4/automationteststore.cy.js
//

context('automationteststore', () => {
    beforeEach(() => {
        cy.visit('https://automationteststore.com/')
    })


    it('1. Odwiedzenie strony i sprawdzenie tytułu Odwiedź stronę główną aplikacji i sprawdź, czy tytuł strony jest poprawny.', () => {
        cy.title()
            .should('equal', 'A place to practice your automation skills!')

    });

    it('2. Kliknięcie przycisku na stronie Odwiedź stronę i kliknij przycisk, aby przejść do innej sekcji. ', () => {

    });

    it('3. Wypełnienie formularza i jego wysłanie Odwiedź stronę z formularzem, wypełnij go i wyślij. ', () => {

        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('Jon')
        cy.get('input[name="last_name"]').type('Kwiatkowski')
        cy.get('input[name="email"]').type('Kwiatkowski@gmail.com')
        cy.get('textarea.feedback-input').type('dsdsdsd')

    })

    it('4. Wybór opcji z rozwijanego menu Odwiedź stronę z formularzem, wybierz opcję z rozwijanego menu i wyślij formularz. ', () => {
        cy.get('#categorymenu')
            .contains('Apparel & accessories')
            .realHover()
        cy.get('#categorymenu')
            .contains('Apparel & accessories')
            .get('li')
            .contains('T-shirts')
            .should('be.visible')
            .click()
    })

    it('5. Sprawdzenie obecności elementu po kliknięciu Odwiedź stronę, kliknij przycisk i sprawdź, czy nowy element pojawia się na stronie.', () => {
        cy.get('#block_frame_bestsellers_1771 .thumbnail')
            .first()
            .find('img')
            .click()
        cy.get('.cart').click()
        cy.reload()
        cy.get('.product-list > .table > tbody > tr')
            .should('have.length.greaterThan', 1);
    })


    it('6. Nawigacja do strony i sprawdzenie obecności tekstu Odwiedź stronę i sprawdź, czy określony tekst jest obecny. ', () => {
        cy.get('span.maintext')
            .should('include.text', 'Scrolling')
    })

    it('7.      Wybór wielu opcji z listy Odwiedź stronę z listą opcji, wybierz kilka z nich i sprawdź, czy są zaznaczone. ', () => {
        cy.get('#block_frame_bestsellers_1771 .thumbnail')
    })

    it('8. Wypełnienie formularza z walidacją Odwiedź stronę z formularzem, wypełnij go niepoprawnie, sprawdź komunikaty walidacyjne, a następnie popraw i wyślij. ', () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')
        cy.get('#ContactUsFrm_first_name')
            .type('Alicja')
        cy.get('#ContactUsFrm_email')
            .type('sdasdasdasd')
        cy.get('#ContactUsFrm_enquiry')
            .type('text')

        cy.get('button[type="submit"].btn.btn-primary.lock-on-click[title="Submit"]')
            .click();

        cy.get('div.element_error.has-error').then(($error) => {
            if ($error.is(':visible')) {
                cy.get('#ContactUsFrm_email')
                    .type('ContactUsFrm_email@gmai.com')
                cy.get('button[type="submit"].btn.btn-primary.lock-on-click[title="Submit"]')
                    .click();
            }
        })
    })

    it('9. Interakcja z elementem dynamicznym Odwiedź stronę, kliknij przycisk, aby załadować dynamiczny element, a następnie sprawdź jego zawartość. ', () => {

    });


    it('10.  Sprawdzenie przekierowania po zalogowaniu Odwiedź stronę logowania, zaloguj się i sprawdź, czy nastąpiło przekierowanie do strony głównej. ', () => {
        cy.get('#customer_menu_top > li > a')
            .click()
        cy.get('#loginFrm_loginname')
            .type('kkkkkksdfsfsedc')
        cy.get('#loginFrm_password')
            .type('%#TGSDfsdzbsfd')
        cy.get('#loginFrm > fieldset > .btn')
            .click()
    });

})



