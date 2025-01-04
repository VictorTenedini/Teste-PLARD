import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import ProductPage from '../pages/ProductPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';

describe('Advantage Online Shopping Test', () => {
  const homePage = new HomePage();
  const searchPage = new SearchPage();
  const productPage = new ProductPage();
  const shoppingCartPage = new ShoppingCartPage();
  
  const productName = 'Bose Soundlink Bluetooth Speaker III';
  
  it('should search for a product, add it to the cart, and verify in the shopping cart', () => {
    homePage.visit();
    homePage.searchForProduct(productName);

    searchPage.verifySearchResult(productName);
    searchPage.selectProduct();

    productPage.verifyProductDescription(productName);
    productPage.addToCart();
    productPage.gotoShoppingCart();
    
    shoppingCartPage.verifyProductInCart(productName);
    shoppingCartPage.verifyProductPrice();
  });
});
