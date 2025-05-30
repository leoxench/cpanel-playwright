import { Page, expect } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async enterIpAddress(ip: string) {
    const ipInput = this.page.getByRole('textbox', { name: /ip address/i });
    await ipInput.waitFor({ state: 'visible' });
    await ipInput.fill(ip);

    const loader = this.page.locator('#orderSummaryLoader');
    if (await loader.isVisible()) {
      await loader.waitFor({ state: 'hidden', timeout: 10000 });
    }

    await this.page.screenshot({ path: 'after-ip.png', fullPage: true });
  }

  async selectAddonByLabel(label: string) {
    const addon = this.page.locator(`label:has-text("${label}")`);
    await addon.waitFor({ state: 'visible' });
    await addon.click();

    // Очікуємо точне повідомлення "Added to Cart (Remove)"
    const confirmation = this.page.getByText('Added to Cart (Remove)', { exact: true });
    await expect(confirmation).toBeVisible({ timeout: 5000 });
  }

  async continueToCheckout() {
    const continueBtn = this.page.getByRole('button', { name: /continue/i });
    await continueBtn.waitFor({ state: 'visible' });

    await this.page.screenshot({ path: 'before-continue-click.png', fullPage: true });

    await expect(continueBtn).toBeEnabled({ timeout: 10000 });

    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
      continueBtn.click()
    ]);
  }

  async proceedToFinalCheckout() {
    const checkoutBtn = this.page.getByRole('link', { name: /checkout/i });
    await checkoutBtn.waitFor({ state: 'visible' });
    await checkoutBtn.click();
  }
}
