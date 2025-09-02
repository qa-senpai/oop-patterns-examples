import { BasePage } from "../Base/BasePage";
import { LoginPageLocators } from "./LoginPageLocators";

// назва елементу (label, placeholder, name) + тип елементу (input, button, anchor, checkbox)

// FACADE + ADAPTER = PAGE OBJECT

// IS A - успадкування
// HAS A - композиція
export class LoginPage extends BasePage {
  readonly locators: LoginPageLocators = new LoginPageLocators(
    this.page.locator('[data-test="login-container"]')
  );

  async fillUsername(username: string) {
    await this.locators.usernameInputLocator.fill(username);
  }

  async fillPassword(password: string) {
    await this.locators.passwordInputLocator.fill(password);
  }

  async clickLogin() {
    await this.locators.loginButtonLocator.click();
  }
}
