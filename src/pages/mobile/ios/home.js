export default class HomePage {
    #driver;
    carNavButton;
    motorbikeNavButton;
    truckNavButton;

    constructor(driver) {
        this.#driver = driver;
    }

    async init () {
        this.carNavButton = await this.#driver.$('-ios class chain:**/XCUIElementTypeButton[`label == "Car"`]');
        this.motorbikeNavButton = await this.#driver.$('-ios class chain:**/XCUIElementTypeButton[`label == "Motorbike"`]');
        this.truckNavButton = await this.#driver.$('-ios class chain:**/XCUIElementTypeButton[`label == "Truck"`]');
    }
}