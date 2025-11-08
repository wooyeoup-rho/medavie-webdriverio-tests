export default class Page {
    public open(path: string): Promise<void> {
        return browser.url(path);
    }
}
