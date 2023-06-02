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
        this.make = await this.#driver.$('id=com.tricentis.insuranceCalculatorApp:id/Make');
        this.yearOfConstruction = await this.#driver.$('id=com.tricentis.insuranceCalculatorApp:id/YearOfConstruction');
        this.listPrice = await this.#driver.$('id=com.tricentis.insuranceCalculatorApp:id/List_Price');
        this.mileagePerYear = await this.#driver.$('id=com.tricentis.insuranceCalculatorApp:id/Mileage_per_year');
        this.performance = await this.#driver.$('id=com.tricentis.insuranceCalculatorApp:id/Performance');
        this.fuel = await this.#driver.$('id=com.tricentis.insuranceCalculatorApp:id/Fuel');
        this.usage = await this.#driver.$('id=com.tricentis.insuranceCalculatorApp:id/Usage');
    }
}