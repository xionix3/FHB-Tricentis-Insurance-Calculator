export default class VehicleDataPage {
    #browser;
    makeSelector;
    enginePerformance;
    dateOfManufacture;
    numberOfSeats;
    fuelType;
    listPrice;
    annualMileage;
    payload;
    totalweight;
    

    constructor(browser) {
        this.#browser = browser;
    }

    async init () {
        this.makeSelector = this.#browser.$("#make");
        this.enginePerformance = this.#browser.$("#engineperformance");
        this.dateOfManufacture = this.#browser.$("#dateofmanufacture");
        this.numberOfSeats = this.#browser.$("#numberofseats");
        this.fuelType = this.#browser.$("#fuel");
        this.payload = this.#browser.$("#payload");
        this.totalweight = this.#browser.$("#totalweight");
        this.listPrice = this.#browser.$("#listprice");
        this.annualMileage = this.#browser.$("#annualmileage");  

    }
}