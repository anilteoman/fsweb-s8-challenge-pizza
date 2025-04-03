describe('template spec', () => {
  it('input alanına bir metin girip , malzeme seçimi yap', () => {
    cy.visit('http://localhost:5173/SiparisSayfa')


    //İsim input alanına yanlis giriş
    cy.get('[data-cy="isimInput"]').type('a  a ');
    cy.contains("Ad Soyad en az 3 karakter içermelidir.").should('be.visible')
    cy.get('[data-cy="submitBtn"]').should('be.disabled')

//İsim input alanına doğru giriş
    cy.get('[data-cy="isimInput"]').clear().type('Anıl');
    cy.contains("Ad Soyad en az 3 karakter içermelidir.").should('not.exist')

    //3 malzeme seçimi durumunda hata mesajı
    cy.get('[data-cy="malzemeInput"]').eq(1).check();
    cy.get('[data-cy="malzemeInput"]').eq(2).check();
    cy.get('[data-cy="malzemeInput"]').eq(3).check();
    
    cy.contains("En az 4 en fazla 10 malzeme seçmelisiniz.").should('be.visible')
    cy.get('[data-cy="submitBtn"]').should('be.disabled')
    //5 malzeme seçiminde hata mesajı
    cy.get('[data-cy="malzemeInput"]').eq(4).check();
    cy.get('[data-cy="malzemeInput"]').eq(5).check();
    cy.contains("En az 4 en fazla 10 malzeme seçmelisiniz.").should('not.exist')


    //5 malzeme ve doğru isim inputunda button enabled
    cy.get('[data-cy="submitBtn"]').should('be.enabled')
  })
})