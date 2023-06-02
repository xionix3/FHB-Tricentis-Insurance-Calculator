export default class PrimaryNavigation {
    #driver;
    homeNavButton;
    vehicleDataNavButton;
    personDataNavButton;
    productDetailNavButton;
    quoteNavButton;

    constructor(driver) {
        this.#driver = driver;
    }

    async init () {
        const homeNavButtonSelector = 'new UiSelector().className("android.widget.TextView").text("Home")';
        const vehicleNavButtonSelector = 'new UiSelector().className("android.widget.TextView").text("Vehicle")';
        const personNavButtonSelector = 'new UiSelector().className("android.widget.TextView").text("Person")';
        const productDetailsNavButtonSelector = 'new UiSelector().className("android.widget.TextView").text("Product Details")';
        const quoteNavButtonSelector = 'new UiSelector().className("android.widget.TextView").text("Quote")';

        this.homeNavButton = await this.#driver.$(`android=${homeNavButtonSelector}`);
        this.vehicleDataNavButton = await this.#driver.$(`android=${vehicleNavButtonSelector}`);
        this.personDataNavButton = await this.#driver.$(`android=${personNavButtonSelector}`);
        this.productDetailNavButton = await this.#driver.$(`android=${productDetailsNavButtonSelector}`);
        this.quoteNavButton = await this.#driver.$(`android=${quoteNavButtonSelector}`);
    }
}