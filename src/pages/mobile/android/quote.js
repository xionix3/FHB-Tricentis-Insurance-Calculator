export default class QuotePage {
    #driver;
    automobileLiability;
    premiumTax;
    offerSummary;
    
    constructor(driver) {
        this.#driver = driver;
    }

    async init () {
        this.automobileLiability = await this.#driver.$('id=com.tricentis.insuranceCalculatorApp:id/automobileLiabilityValueLabel');

        // TODO - Add locators for premium tax and offerSummary
        /*
        this.premiumTax = await this.#driver.$('');
        this.offerSummary = await this.#driver.$('');
        */
    }
}