export default class HomePage {
    #driver;
    carNavButton;
    motorbikeNavButton;
    truckNavButton;

    constructor(driver) {
        this.#driver = driver;
    }

    async init () {
        this.carNavButton = await this.#driver.$('[id="com.tricentis.insuranceCalculatorApp:id/Car"]');
        this.motorbikeNavButton = await this.#driver.$('[id="com.tricentis.insuranceCalculatorApp:id/Motorbike"]');
        this.truckNavButton = await this.#driver.$('[id="com.tricentis.insuranceCalculatorApp:id/Truck"]');
    }
}