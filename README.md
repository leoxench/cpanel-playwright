cPanel Store Checkout Automation
Automated end-to-end testing of the product and addon purchase flow on the cPanel Store using Playwright and TypeScript.

👤 Author
Leonid Ksenchuk

📘 Project Overview
This test suite automates and validates the following user actions:

Navigate to a product page

Enter a valid IP address

Select and add an addon

Proceed to checkout

Verify:

Product name

Addon name

IP address

Prorated and total prices

Visibility of the checkout form and sections

“Complete Order” button is present but disabled

✅ Features

💡 Page Object Model (POM) for modular structure

⚙️ Fixtures for reusable test setup

✨ ESLint with TypeScript support

💻 Designed to run locally and in CI environments

🛠 Setup Instructions

1. Clone the repository

git clone https://github.com/leoxench/cpanel-playwright.git
cd cpanel-playwright

2. Install dependencies

npm install
npx playwright install

🚀 Running Tests

Run all tests (headless):
npx playwright test
Run tests with UI (headed mode):
npx playwright test --headed
Run a specific test:
npx playwright test tests/cart.spec.ts


📁 Project Structure

cpanel-playwright/
├── pages/                # Page Object Model (POM)
│   ├── HomePage.ts
│   ├── ProductPage.ts
│   └── CheckoutPage.ts
├── tests/                # Test specs & config
│   ├── cart.spec.ts
│   └── playwright.config.ts
├── .gitignore
├── eslint.config.mjs     # ESLint rules
├── package.json
├── package-lock.json
└── README.md

🧹 Linting
Project uses ESLint for maintaining code quality and standards:
npx eslint . --ext .ts

🔍 What the Test Verifies

✅ Product and addon are added to the cart

✅ IP address is captured correctly

✅ Prices are accurate (including prorated totals)

✅ Checkout UI sections are rendered correctly

✅ “Complete Order” button is visible but disabled

🧾 Notes
Compatible with most CI environments (GitHub Actions, GitLab CI, etc.)

Readable and maintainable code

Modular architecture using best practices
