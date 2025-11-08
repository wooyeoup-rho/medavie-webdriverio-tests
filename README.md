# Medavie Contact Page – WebdriverIO E2E Tests

![Tests](https://github.com/wooyeoup-rho/medavie-webdriverio-tests/actions/workflows/e2e.yaml/badge.svg)

Automated end-to-end tests for the Medavie website contact page, implemented as part of a technical assessment.

The suite verifies that, for both English and French sites:

- The user can navigate from the home page to the **Contact / Coordonnées** page.
- The correct contact heading is displayed.
- The expected Medavie Blue Cross / Croix Bleue Medavie contact numbers are shown.

## Prerequisites
1. Node.js
2. npm

## Installation
```bash
# Clone the repository
git clone https://github.com/wooyeoup-rho/medavie-webdriverio-tests.git

# Navigate to the cloned directory
cd medavie-webdriverio-tests

# Install node modules
npm install
```

## Running the tests
```bash
# Default run (Chrome, desktop + mobile)
npm test

# Firefox (Firefox, desktop + mobile)
npm run test:firefox

# Edge (Edge, desktop + mobile)
npm run test:edge

# Desktop-only (Chrome, desktop)
npm run test:desktop

# Mobile-only (Chrome, mobile)
npm run test:mobile
```

## Scenarios

**Feature:** Medavie contact information

For both `en` and `fr`:

1. Open the Medavie home page.
2. Navigate to the Contact / Coordonnées page (supports desktop and mobile navigation).
3. Assert:
    - Correct page header:
        - `Contact` (EN)
        - `Coordonnées` (FR)
    - Correct phone numbers for:
        - Atlantic Region / Région de l’Atlantique
        - Quebec / Québec
        - Ontario
        - Elsewhere in Canada / Ailleurs au Canada

The test is implemented as a **Scenario Outline** with examples for both languages to keep it data-driven and easy to extend.

## Project Structure

```text
.
├─ features
│  ├─ contact.feature              # Gherkin scenarios (EN + FR via Scenario Outline)
│  ├─ step-definitions
│  │  └─ steps.ts                  # Step definitions mapping Gherkin to page objects
│  └─ pageobjects
│     ├─ page.ts                   # Base page object
│     ├─ home.page.ts              # Home page: open site + navigate to contact
│     └─ contact.page.ts           # Contact page: header + contact number getters
├─ wdio.conf.ts                    # WebdriverIO configuration
├─ package.json
└─ package-lock.json
```

## Notes
1. **Layout specific selectors**
    - `home.page.ts`:
      - I used four selectors for the contact header, for desktop and mobile, and English and French for each.
      
   - `contact.page.ts`:
     - Used a very specific locator to retrieve the list of contact information: `$$('div.border ul li strong');`
     - I considered using an XPath and anchoring it to the text, but since it'll depend on the `h3` text, and that element itself doesn't have any strong locators, I opted against it.
   - If I were moving forward, I would likely request a more robust attribute be added to these elements - like `id` or `data-testid`
2. **Scenario outline**
    - I opted to use a Scenario Outline for the English and French routes since the steps themselves don't differ. It also allows for the possibility to extend the test for other languages.
3. **Page Object Model**
   - Used POM to allow for easier extension in to other tests, and much easier debugging.