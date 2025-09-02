/**
 * Використання цього патерну для створення сторінок не є доцільним в Playwright, але як приклад самого патерну ок
 */

import { Page } from "@playwright/test";

abstract class BasePage {
  constructor(protected page: Page) {}

  abstract getUrl(): string;
  abstract isLoaded(): Promise<boolean>;
}

class LoginPage extends BasePage {
  getUrl() {
    return "/login";
  }

  async isLoaded() {
    return await this.page.locator('[data-testid="login-form"]').isVisible();
  }

  async login(email: string, password: string) {
    await this.page.fill('[data-testid="email"]', email);
    await this.page.fill('[data-testid="password"]', password);
    await this.page.click('[data-testid="login-button"]');
  }
}

class ProductPage extends BasePage {
  constructor(page: Page, private productName: string) {
    super(page);
  }

  getUrl() {
    return `/product/${this.productName.toLowerCase()}`;
  }

  async isLoaded() {
    return await this.page.locator('[data-testid="product-title"]').isVisible();
  }

  async addToCart() {
    await this.page.click('[data-testid="add-to-cart"]');
  }
}

class CartPage extends BasePage {
  getUrl() {
    return "/cart";
  }

  async isLoaded() {
    return await this.page.locator('[data-testid="cart-items"]').isVisible();
  }

  async getItemsCount() {
    return await this.page.locator('[data-testid="cart-item"]').count();
  }
}

class PageFactory {
  constructor(private page: Page) {}

  createLoginPage(): LoginPage {
    return new LoginPage(this.page);
  }

  createProductPage(productName: string): ProductPage {
    return new ProductPage(this.page, productName);
  }

  createCartPage(): CartPage {
    return new CartPage(this.page);
  }

  // Фабричний метод з параметром типу
  createPage(pageType: "login" | "cart", ...args: any[]): BasePage {
    switch (pageType) {
      case "login":
        return new LoginPage(this.page);
      case "cart":
        return new CartPage(this.page);
      default:
        throw new Error(`Unknown page type: ${pageType}`);
    }
  }
}
