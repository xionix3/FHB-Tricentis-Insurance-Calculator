export default class SecondaryNavigation {
    #browser;
    vehicleData;
    insurantData;
    productData;
    priceOption;
    quote;

    constructor(browser) {
        this.#browser = browser;
    }

    async init () {
        this.vehicleData = this.#browser.$("#entervehicledata");
        this.insurantData = this.#browser.$("#enterinsurantdata");
        this.productData = this.#browser.$("#enterproductdata");
        this.priceOption = this.#browser.$("#selectpriceoption");
        this.quote = this.#browser.$("#sendquote");
    }
}