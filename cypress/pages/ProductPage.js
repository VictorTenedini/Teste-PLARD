class ProductPage {
    verifyProductDescription(productName) {
      cy.get('#Description > .roboto-regular').invoke('text').then((text) => {
        const normalizedText = text.replace(/\s+/g, '').trim().toLowerCase();
        const expectedText = productName.replace(/\s+/g, '').trim().toLowerCase();
        expect(normalizedText).to.include(expectedText);
      });
    }
  
    addToCart() {
      cy.get('button[name="save_to_cart"]').click();
      cy.get('#checkOutPopUp').should('be.visible');
    }

    gotoShoppingCart() {
        cy.get('#shoppingCartLink').click();
    }
  }
  
  export default ProductPage;
  