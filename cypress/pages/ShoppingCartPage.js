class ShoppingCartPage {
    verifyProductInCart(productName) {
      cy.get('tr.ng-scope > :nth-child(2) > .roboto-regular').invoke('text').then((text) => {
        const normalizedText = text.replace(/\s+/g, '').trim().toLowerCase();
        const expectedText = productName.replace(/\s+/g, '').trim().toLowerCase();
        expect(normalizedText).to.include(expectedText);
      });
    }
  
    verifyProductPrice() {
      cy.get(':nth-child(6) > .price').invoke('text').then((text) => {
        const normalizedText = text.replace(/\s+/g, '').trim();
        expect(normalizedText).to.equal('$269.99');
      });
    }
  }
  
  export default ShoppingCartPage;
  