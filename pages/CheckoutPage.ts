import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async verifyProductDetails(expectedIp: string) {
    const table = this.page.locator('table');
    await expect(table).toContainText(expectedIp);
  }

  async verifyProductSummary(expectedProduct: string, expectedAddon: string, expectedPrice: string) {
    const table = this.page.locator('table');
    await expect(table).toContainText(expectedProduct);
    await expect(table).toContainText(expectedAddon);
    await expect(table).toContainText(expectedPrice);
  }

  async verifyCheckoutFormSections() {
    const sections = [
      'Personal Information', //info for order
      'Billing Address',
      'Account Security',
      'Terms & Conditions',
      'Payment Details'
    ];

    for (const section of sections) {
      await expect(this.page.getByText(section)).toBeVisible();
    }

    const completeOrderBtn = this.page.getByRole('button', { name: /complete order/i });
    await expect(completeOrderBtn).toBeVisible();
    await expect(completeOrderBtn).toBeDisabled();
  }
}
