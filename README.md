Automated testing of the product and addon purchase flow on the cPanel Store using Playwright and TypeScript.

👤 Author
Leonid Ksenchuk

📋 Project Description

This project automates the following user actions:

Navigate to a product page

Enter an IP address

Add an addon to the product

Proceed to checkout

Verify pricing, product name, and IP address

Ensure the checkout form and all required sections are visible

✅ Uses:

Page Object Model

Fixtures

ESLint with TypeScript plugin

🛠️ Setup Instructions
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/leoxench/cpanel-playwright.git
cd cpanel-playwright
2. Install dependencies
bash
Copy
Edit
npm install
npx playwright install
🚀 Running Tests
Run all tests (headless by default):
bash
Copy
Edit
npx playwright test
Run tests with UI (headed mode):
bash
Copy
Edit
npx playwright test --headed
Run a specific test:
bash
Copy
Edit
npx playwright test tests/cart.spec.ts
🔧 Project Structure
lua
Copy
Edit
cpanel-playwright/
├── pages/                # Page Object files
│   ├── HomePage.ts
│   ├── ProductPage.ts
│   └── CheckoutPage.ts
├── tests/                # Test files
│   ├── cart.spec.ts
│   └── playwright.config.ts
├── .gitignore
├── package.json
├── package-lock.json
├── eslint.config.mjs     # ESLint config
└── README.md

📦 ESLint
Project uses ESLint for code quality:
bash
Copy
Edit
npx eslint . --ext .ts

✅ What the Test Verifies
Product and addon are correctly added to the cart

Prices, names, and IP address are correct

Checkout form sections are visible

“Complete Order” button is visible but disabled

🧾 Notes

Compatible with CI environments

Designed for clear readability and modular structure

