import Page from './page';

class ContactPage extends Page {
    // Uses a layout-specific selector; Should try and update to a more robust selector
    private get contactInfoItems() {
        return $$('div.border ul li strong');
    }

    public get contactHeader() {
        return $('h1');
    }

    public async getContactInfo(): Promise<string[]> {
        const items = await this.contactInfoItems;
        await items[0].waitForDisplayed({ timeout: 5000 });
        const itemsArray = Array.from(items);

        const texts = await Promise.all(
            itemsArray.map(item => item.getText())
        );

        return texts;
    }
}

export default new ContactPage();
