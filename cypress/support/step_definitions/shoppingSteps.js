import HomePage from "../../pages/HomePage";
import SearchPage from "../../pages/SearchPage";
import ProductPage from "../../pages/ProductPage";
import ShoppingCartPage from "../../pages/ShoppingCartPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const homePage = new HomePage();
const searchPage = new SearchPage();
const productPage = new ProductPage();
const shoppingCartPage = new ShoppingCartPage();

const productName = "Bose Soundlink Bluetooth Speaker III";
const productPrice = "$269.99";


Given("que estou na página inicial", () => {
  homePage.visit();
});

When("eu busco pelo produto", () => {
  homePage.searchForProduct(productName);
});

Then("o produto deve aparecer nos resultados da busca", () => {
  searchPage.verifySearchResult(productName);
});

Given("que busquei pelo produto", () => {
  homePage.visit();
  homePage.searchForProduct(productName);
  searchPage.verifySearchResult(productName);
});

When("eu seleciono o produto nos resultados", () => {
  searchPage.selectProduct();
});

When("adiciono o produto ao carrinho", () => {
  productPage.addToCart();
});

Then("o produto deve estar no carrinho", () => {
  productPage.gotoShoppingCart();
  shoppingCartPage.verifyProductInCart(productName);
});


Given("que adicionei o produto ao carrinho", () => {
  homePage.visit();
  homePage.searchForProduct(productName);
  searchPage.verifySearchResult(productName);
  searchPage.selectProduct();
  productPage.addToCart();
  
  
  
});

When("eu navego para o carrinho de compras", () => {
  productPage.gotoShoppingCart();
  
});

Then("devo ver o produto no resumo do pedido", () => {
  shoppingCartPage.verifyProductInCart(productName);
});

Then("o valor total deve ser o correto", () => {
  shoppingCartPage.verifyProductPrice(productPrice);
});
