export default class ProductDataPage {
    #browser;
    startDate;
    insuranceSum;
    meritRating;
    damageInsurance;
    euroProtection;
    legalDefenseInsurance;
    courtesyCar;

    constructor(browser) {
        this.#browser = browser;
    }

    async init () {
        this.startDate = this.#browser.$("#startdate");
        this.insuranceSum = this.#browser.$("#insurancesum");
        this.meritRating = this.#browser.$("#meritrating");
        this.damageInsurance = this.#browser.$("#damageinsurance")
        this.euroProtection = this.#browser.$("#EuroProtection").nextElement();
        this.legalDefenseInsurance = this.#browser.$("#LegalDefenseInsurance").nextElement();;
        this.courtesyCar = this.#browser.$("#courtesycar");
    }
}