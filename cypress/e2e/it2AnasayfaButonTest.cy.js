describe('it2 anasayfa buton test', () => {
    it('it2 anasayfa buton test', () => {
      cy.visit('http://localhost:5173')
        
      //sayfadaki herhangi bir sipariş ver butonu SiparisForm sayfasına yönlendiriyor
      cy.get('[data-cy="anasayfa-siparisbuton"]').first().click();
      cy.url().should('eq', 'http://localhost:5173/SiparisSayfa');

      cy.go('back');
      cy.url().should('eq', 'http://localhost:5173/');

      cy.get('[data-cy="anasayfa-siparisbuton"]').eq(1).click();
      cy.url().should('eq', 'http://localhost:5173/SiparisSayfa');
    })
  })