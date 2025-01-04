class HomePage {
    visit() {
      cy.visit('https://advantageonlineshopping.com/#/');
    }
  
    searchForProduct(productName) {
      cy.get('#search').click();
      cy.get('#autoComplete').type(productName);
      cy.get('[title="SEARCH"]').click();
    }
  }
  
  export default HomePage;
  