describe('Testowanie strony głównej', () => {

    it('Zadanie 1', () => {
      // Odwiedzenie strony głównej i sprawdzenie tytułu
      cy.visit('https://www.morele.net/komputery/', { failOnStatusCode: false });
      cy.title().should('eq', 'Komputery w Morele.net');
    })

    it('Zadanie 1', () => {
      // Odwiedzenie strony głównej i sprawdzenie tytułu
      cy.visit('https://skleptest.pl/')
      cy.title().should('eq', 'Generic Shop – Just another web shop');
    })

  
    it('Zadanie 2', () => {
        // Odwiedzenie strony i kliknięcie przycisku
        cy.visit('https://skleptest.pl/')
        cy.get('.tag-link-16').click();
        cy.url().should('include', '/tag/autumn/');
      });
    
      it('Zadanie 2', () => {
        // Odwiedzenie strony i kliknięcie przycisku
        cy.visit('https://www.morele.net/')
        cy.get(':nth-child(3) > .js-action-button').click();
      });

      
    it('Zadanie 3', () => {
        // Odwiedzenie strony z formularzem
        cy.visit('https://skleptest.pl/my-account/') 
        cy.get('.register > :nth-child(1) > label').type('dsadasda@o2.pl') 
        cy.get('.register > :nth-child(2) > label').type('ddsadfdsf@123') 
        cy.get('.woocommerce-FormRow > .woocommerce-Button').click()
    })

    it('Zadanie 3', () => {
        // Odwiedzenie strony z formularzem
        cy.visit('https://www.morele.net/login') 
        cy.get('.actions > .btn-primary').click()
        cy.get('#register-tab').click()
        cy.get('#user_userEmail').type('dsadasda@o2.pl') 
        cy.get('#user_plainPassword').type('Ddsadfdsf@123') 
        cy.get('#accept_regulation > .switch-container > .switch > .slider').click()
        cy.get('.nst-is-collapsed > .form-control-input > .switch-container > .switch > .slider').click()
        cy.get('#register_form > .btn-primary-2').click()
    })


    it('Zadanie 4', () => {
        // Odwiedzenie strony z formularzem
        cy.visit('https://way2automation.com/way2auto_jquery/index.php') 
        cy.get('#load_box > #load_form > :nth-child(5) > input').type('Jacek') 
        cy.get('#load_box > #load_form > :nth-child(6) > input').type('997998995') 
        cy.get(':nth-child(7) > input').type('dsadasda@o2.pl') 
        cy.get('select').select(4); 
        cy.get(':nth-child(9) > input').type('Opole') 
        cy.get(':nth-child(10) > input').type('ddsadfdsf') 
        cy.get(':nth-child(11) > input').type('haslo123') 
        cy.get(':nth-child(12) > .span_1_of_4 > .button').click()
    
      })

    it('Zadanie 4', () => {
        // Odwiedzenie strony z formularzem
        cy.wait(5000)
        cy.visit('https://www.morele.net/');
        cy.get('.actions > .btn-primary').click();
        cy.get(':nth-child(2) > .js-action-button').click();
        cy.get(':nth-child(1) > .cn-departments-name').click();
        cy.get('.show-menu > .cn-shop-window > .cn-rows > :nth-child(1) > :nth-child(1) > ul > :nth-child(2) > .cn-link').click();
      })


    it('Zadanie 5', () => {
          cy.visit('https://skleptest.pl/');
          cy.get('#tyche_products-1 > .row > .col-sm-9 > .owl-carousel > .owl-stage-outer > .owl-stage > :nth-child(2) > .item > .tyche-product > .tyche-product-body > .ajax_add_to_cart').click();
          cy.get('.added_to_cart').should('be.visible');
        })

    it('Zadanie 5', () => {
          cy.visit('https://www.morele.net/kategoria/karty-pamieci-626/');
          cy.get('.actions > .btn-primary').click();
          cy.get('.btn-show-mobile-filters').click();
          cy.get('.mp-content-body > .filters-wrapper > .filters-list > .filter-item-items-collapsed > [data-fhead-name="Sprzedawcy"] > .f-head > .icon-arrow-down').click();
          cy.get('.show-values > .f-values-wr > :nth-child(1) > .f-value > .checkbox > .input').click();
          cy.get('.mobile-popup-footer > .btn').click();
          cy.get('.cat-active-filters-mobile > .swiper-wrapper > .swiper-slide').should('be.visible');
        })

    it('Zadanie 6', () => {
          cy.visit('https://skleptest.pl/');
          cy.contains('OUR LOCATION').should('be.visible');
        })

    it('Zadanie 6', () => {
          cy.visit('https://www.morele.net/');
          cy.get('.actions > .btn-primary').click();
          cy.contains('Pomoc').should('be.visible');
        })

    it('Zadanie 7', () => {
          cy.visit('https://lp.morele.net/newsletter/');
          cy.get('input#filterCheckbox-category-1323').click({ force: true });
          cy.get('input#filterCheckbox-category-1323').should('be.checked');
        })


    it('Zadanie 7', () => {
          cy.visit('https://www.rylko.com/kobieta/buty-damskie/buty-sportowe');
          cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
          cy.get('.plain-link > span').click();
          cy.get(':nth-child(2) > .list-unstyled > :nth-child(1) > .form-field > .form-field__checkbox > .form__checkbox-label').click();
          cy.get(':nth-child(2) > .list-unstyled > :nth-child(2) > .form-field > .form-field__checkbox > .form__checkbox-label').click();
          cy.get(':nth-child(2) > .list-unstyled > :nth-child(3) > .form-field > .form-field__checkbox > .form__checkbox-label').click();
          cy.get(':nth-child(2) > .list-unstyled > :nth-child(1) > .form-field > .form-field__checkbox > input[type="checkbox"]').should('be.checked');
          cy.get(':nth-child(2) > .list-unstyled > :nth-child(2) > .form-field > .form-field__checkbox > input[type="checkbox"]').should('be.checked');
          cy.get(':nth-child(2) > .list-unstyled > :nth-child(3) > .form-field > .form-field__checkbox > input[type="checkbox"]').should('be.checked');
      });


    it('Zadanie 8', () => {
          cy.visit('https://skleptest.pl/my-account/'); 
          cy.get('.register > :nth-child(1) > label').type('dsadasda') 
          cy.get('.register > :nth-child(2) > label').type('11') 
          cy.get('.woocommerce-password-strength').should('contain', 'Very weak - Please enter a stronger password.'); 
          cy.get('.register > :nth-child(1) > label').type('dsadasda@o2.pl') 
          cy.get('.register > :nth-child(2) > label').type('studia12345#9a') 
          cy.get('.woocommerce-FormRow > .woocommerce-Button').click()
        })

    it('Zadanie 8', () => {
        cy.visit('https://www.morele.net/login') 
        cy.get('.actions > .btn-primary').click()
        cy.get('#register-tab').click()
        cy.get('#user_userEmail').type('dsadasda@o2.pl') 
        cy.get('#user_plainPassword').type('Ddsadfdsf') 
        cy.get('#accept_regulation > .switch-container > .switch > .slider').click()
        cy.get('.nst-is-collapsed > .form-control-input > .switch-container > .switch > .slider').click()
        cy.get('.password-info-text > span').should('contain', 'Hasło musi mieć jedną wielką literę, jedną małą literę, jedną cyfrę, znak specjalny, minimum 8 znaków'); 
        cy.get('#user_plainPassword').type('Ddsadfdsf22#')
        cy.get('#register_form > .btn-primary-2').click()
        })


    it('Zadanie 9', () => {
          cy.visit('https://skleptest.pl/');
          cy.get('#tyche_products-1 > .row > .col-sm-9 > .owl-carousel > .owl-stage-outer > .owl-stage > :nth-child(2) > .item > .tyche-product > .tyche-product-body > .ajax_add_to_cart').click();
          cy.get('.added_to_cart').should('be.visible');
          cy.get('.added_to_cart').should('contain.text', 'View cart'); 
      })

    it('Zadanie 9', () => {
          cy.visit('https://www.morele.net/kategoria/telewizory-412/,,,,,,,,0,,,,23217O761261/1/');
          cy.get('.actions > .btn-primary').click()
          cy.get('.btn-show-mobile-filters').click()
          cy.get('.mp-content-body > .filters-wrapper > .filters-list > .filter-item-items-collapsed > .cat-helplinks-filter > .f-head > .icon-arrow-down').click();
          cy.get('.mp-content-body > .filters-wrapper > .filters-list > .filter-item-items-collapsed > .cat-helplinks-filter > .f-values-wr > .f-values > [data-fvalue-id="1"] > .checkbox > .input').click()
          cy.get('.mobile-popup-footer > .btn').click();
          cy.get('.swiper-slide-next').should('contain.text', 'Szybka dostawa'); 
    })

    it('Zadanie 10', () => {
          cy.visit('https://skleptest.pl/my-account/'); 
          cy.get('#username').type('gruszka111@o2.pl'); 
          cy.get('#password').type('studia123@'); 
          cy.get(':nth-child(3) > .woocommerce-button').click(); 
          cy.url().should('eq', 'https://skleptest.pl/my-account/'); 
        })

    it('Zadanie 10', () => {
          cy.visit('https://www.morele.net/login'); 
          cy.get('.actions > .btn-primary').click()
          cy.get('#username').type('gruszka111@o2.pl'); 
          cy.get('#password-log').type('Kupa123@1'); 
          cy.get('#login_form > .btn-primary-2').click(); 
          cy.url().should('eq', 'https://www.morele.net/'); 
        })

      });