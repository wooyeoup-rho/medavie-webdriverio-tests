import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/home.page';
import ContactPage from '../pageobjects/contact.page';

// Stores selected language across steps in this scenario
let currentLanguage: 'en' | 'fr';

Given(/^I am on the (en|fr) home page$/, async (language: string) => {
    currentLanguage = language;
    await HomePage.open(language);
});

When('I navigate to the contact page', async () => {
    await HomePage.goToContact(currentLanguage);
});

Then(/^I should see a header displaying (.+)$/, async (expectedHeader: string) => {
    await expect(ContactPage.contactHeader).toBeDisplayed();
    await expect(ContactPage.contactHeader).toHaveText(expectedHeader);
});

Then('I should see the following contact information:', async (table) => {
    const expectedContactInfo = table.raw()[0];
    const actualContactInfo = await ContactPage.getContactInfo();

    await expect(actualContactInfo).toHaveLength(expectedContactInfo.length);
    await expect(actualContactInfo).toEqual(expectedContactInfo);
});

