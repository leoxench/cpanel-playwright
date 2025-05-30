import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://store.cpanel.net/store/cpanel-licenses');
  }

  async clickOrderNow() {
    await this.page.locator('#product3-order-button').click();
  }
}
