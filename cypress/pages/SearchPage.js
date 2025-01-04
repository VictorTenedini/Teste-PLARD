class SearchPage {
    verifySearchResult(productName) {
      cy.get('#searchResultLabel').invoke('text').then((text) => {
        const normalizedText = text.replace(/\s+/g, '').trim().toLowerCase();
        const expectedText = productName.replace(/\s+/g, '').trim().toLowerCase();
        expect(normalizedText).to.include(expectedText);
      });
    }
  
    selectProduct() {
      cy.get('.productName')
        .should('have.text', 'Bose Soundlink Bluetooth Speaker III')
        .click();
    }
  }
  
  export default SearchPage;
  