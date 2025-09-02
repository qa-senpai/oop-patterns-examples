import { test, expect } from "@playwright/test";
import {
  LoginPage,
  ProductsPage,
} from "../pageObject-pattern-example/pages/index";

// https://www.saucedemo.com/
test("login as standard_user - should be logged", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto("https://www.saucedemo.com/");
  await loginPage.fillUsername("standard_user");
  await loginPage.fillPassword("secret_sauce");
  await loginPage.clickLogin();

  // де робити перевірки?
  expect(loginPage.locators.passwordInputLocator).toBeVisible();
});

test("add to cart", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductsPage(page);

  await page.goto("https://www.saucedemo.com/");
  await loginPage.fillUsername("standard_user");
  await loginPage.fillPassword("secret_sauce");
  await loginPage.clickLogin();

  await productPage.getProductCard("Sauce Labs Backpack").clickAddToCart();
});
