/// <reference types="cypress" />
// ./node_modules/.bin/cypress open

context('biedronka', () => {
    beforeEach(() => {
        cy.visit('https://www.webdriveruniversity.com/', { timeout: 10000 })
    })


    // it('1. Odwiedzenie strony i sprawdzenie tytułu Odwiedź stronę główną aplikacji i sprawdź, czy tytuł strony jest poprawny.', () => {

    // });

    // it('2. Kliknięcie przycisku na stronie Odwiedź stronę i kliknij przycisk, aby przejść do innej sekcji. ', () => {

    // });

    it.only('3. Wypełnienie formularza i jego wysłanie Odwiedź stronę z formularzem, wypełnij go i wyślij. ', () => {
        // const testCases = [
        //     { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', message: 'Test message 1' },
        //     { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', message: 'Test message 2' },
        //     { firstName: 'Alice', lastName: 'Brown', email: 'alice.brown@example.com', message: 'Test message 3' }
        // ]


        // testCases.forEach(testCases => {
        //     // cy.get('#contact-us').click()
        //     cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        //     cy.get('input[name="first_name"]').type(testCases.firstName)
        //     cy.get('input[name="last_name"]').type(testCases.lastName)
        //     cy.get('input[name="email"]').type(testCases.email)
        //     cy.get('textarea.feedback-input').type(testCases.message)
        //     // cy.get('[type="submit"]').click()
        // })

        // cy.get('#contact-us').click()
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('Jon')
        cy.get('input[name="last_name"]').type('Kwiatkowski')
        cy.get('input[name="email"]').type('Kwiatkowski@gmail.com')
        cy.get('textarea.feedback-input').type('dsdsdsd')
        // cy.get('[type="submit"]').click()
    });

    // it('4. Wybór opcji z rozwijanego menu Odwiedź stronę z formularzem, wybierz opcję z rozwijanego menu i wyślij formularz. ', () => {

    // });

    // it('5. Sprawdzenie obecności elementu po kliknięciu Odwiedź stronę, kliknij przycisk i sprawdź, czy nowy element pojawia się na stronie.', () => {

    // });

    // it('6. Nawigacja do strony i sprawdzenie obecności tekstu Odwiedź stronę i sprawdź, czy określony tekst jest obecny. ', () => {

    // });

    // it('7.      Wybór wielu opcji z listy Odwiedź stronę z listą opcji, wybierz kilka z nich i sprawdź, czy są zaznaczone. ', () => {

    // });

    // it('8.      Wypełnienie formularza z walidacją Odwiedź stronę z formularzem, wypełnij go niepoprawnie, sprawdź komunikaty walidacyjne, a następnie popraw i wyślij. ', () => {

    // });

    // it('9.      Interakcja z elementem dynamicznym Odwiedź stronę, kliknij przycisk, aby załadować dynamiczny element, a następnie sprawdź jego zawartość. ', () => {

    // });


    // it('10.  Sprawdzenie przekierowania po zalogowaniu Odwiedź stronę logowania, zaloguj się i sprawdź, czy nastąpiło przekierowanie do strony głównej. ', () => {

    // });

})



