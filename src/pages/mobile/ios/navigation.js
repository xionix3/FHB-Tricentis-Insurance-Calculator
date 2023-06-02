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
        this.homeNavButton = await this.#driver.$('-ios class chain:**/XCUIElementTypeButton[`label == "Home"`]');
        this.vehicleDataNavButton = await this.#driver.$('-ios class chain:**/XCUIElementTypeButton[`label == "Vehicle"`]');
        this.personDataNavButton = await this.#driver.$('-ios class chain:**/XCUIElementTypeButton[`label == "Person"`]');
        this.productDetailNavButton = await this.#driver.$('-ios class chain:**/XCUIElementTypeButton[`label == "Product Details"`]');
        this.quoteNavButton = await this.#driver.$('-ios class chain:**/XCUIElementTypeButton[`label == "Quote"`]');
    }
}