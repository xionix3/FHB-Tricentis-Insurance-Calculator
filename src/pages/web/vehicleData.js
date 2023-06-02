export default class VehicleDataPage {
    #browser;
    makeSelector;
    enginePerformance;
    dateOfManufacture;
    numberOfSeats;
    fuelType;
    listPrice;
    licensePlateNumber;
    annualMileage;
    nextButton;

    constructor(browser) {
        this.#browser = browser;
    }

    async init () {
        this.makeSelector = this.#browser.$("#make");
        this.enginePerformance = this.#browser.$("#engineperformance");
        this.dateOfManufacture = this.#browser.$("#dateofmanufacture");
        this.numberOfSeats = this.#browser.$("#numberofseats");
        this.fuelType = this.#browser.$("#fuel");
        this.listPrice = this.#browser.$("#listprice");
        this.licensePlateNumber = this.#browser.$("#licenseplatenumber");
        this.annualMileage = this.#browser.$("#annualmileage");
    }
}