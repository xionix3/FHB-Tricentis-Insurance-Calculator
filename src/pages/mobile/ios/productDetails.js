export default class ProductDetailsPage {
    #driver;
    preferredStartDate;
    paymentOption;
    euroProtection;
    legalProtection;
    insuranceSum;
    damageInsurance;

    constructor(driver) {
        this.#driver = driver;
    }

    async init () {
        // TODO - Add locators
        /*
        this.preferredStartDate = await this.#driver.$('');
        this.paymentOption = await this.#driver.$('');
        this.euroProtection = await this.#driver.$('');
        this.legalProtection = await this.#driver.$('');
        this.insuranceSum = await this.#driver.$('');
        this.damageInsurance = await this.#driver.$('');
        */
    }
}