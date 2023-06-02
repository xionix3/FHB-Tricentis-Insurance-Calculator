export default class VehicleDataPage {
    #driver;
    make;
    yearOfConstruction;
    listPrice;
    mileagePerYear;
    performance;
    fuel;
    usage;

    constructor(driver) {
        this.#driver = driver;
    }

    async init () {
        // TODO - Add locators
        /*
        this.make = await this.#driver.$('');
        this.makeLabel = await this.#driver.$('');
        this.yearOfConstruction = await this.#driver.$('');
        this.listPrice = await this.#driver.$('');
        this.mileagePerYear = await this.#driver.$('');
        this.performance = await this.#driver.$('');
        this.fuel = await this.#driver.$('');
        this.usage = await this.#driver.$('');
        */
    }

    async hideNumpad () {
        await this.makeLabel.click();
    }
}