import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Check order with addon', async ({ page }) => {
  const home = new HomePage(page);
  const product = new ProductPage(page);
  const checkout = new CheckoutPage(page);

  const ip = '255.22.45.12'; //for example can be random in range from 0 till 255
  const productName = 'cPanel Solo® Cloud (1 Account)';
  const addonName = 'Monthly KernelCare License';
  const dueTodayPrice = '$1.93 USD'; // <- new price will be here

  await home.goto();
  await home.clickOrderNow();
  await product.enterIpAddress(ip);
  await product.selectAddonByLabel(addonName);
  await product.continueToCheckout();
  await product.proceedToFinalCheckout();

  await checkout.verifyProductDetails(ip);
  await checkout.verifyProductSummary(productName, addonName, dueTodayPrice);
  await checkout.verifyCheckoutFormSections();
});
