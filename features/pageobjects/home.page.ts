import Page from './page';

class HomePage extends Page {
    private get hamburgerButton() {
        return $('.hamburger');
    }

    // Desktop
    private get desktopContactLinkEn() {
        return $('#desktop-navigation a[href$="/en/contact/"]');
    }

    private get desktopContactLinkFr() {
        return $('#desktop-navigation a[href$="/fr/coordonnees/"]');
    }

    // Mobile
    private get mobileContactLinkEn() {
        return $('#mobile-navigation a[href$="/en/contact/"]');
    }

    private get mobileContactLinkFr() {
        return $('#mobile-navigation a[href$="/fr/coordonnees/"]');
    }

    public open(language: string): Promise<void> {
        return super.open(`https://www.medavie.ca/${language}`);
    }

    public async goToContact(language: 'en' | 'fr'): Promise<void> {
        const isMobile = await this.hamburgerButton.isDisplayed();

        const link =
            isMobile
                ? (language === 'en'
                    ? this.mobileContactLinkEn
                    : this.mobileContactLinkFr)
                : (language === 'en'
                    ? this.desktopContactLinkEn
                    : this.desktopContactLinkFr);

        if (isMobile) {
            await this.hamburgerButton.waitForClickable({ timeout: 5000 });
            await this.hamburgerButton.click();
        }

        await link.waitForClickable({ timeout: 5000 });
        await link.click();
    }
}

export default new HomePage();
