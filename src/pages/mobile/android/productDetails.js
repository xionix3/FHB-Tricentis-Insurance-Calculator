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
        this.preferredStartDate = await this.#driver.$('id=com.tricentis.insuranceCalculatorApp:id/psdTextfield');
        this.paymentOption = await this.#driver.$('id=com.tricentis.insuranceCalculatorApp:id/paymentoptionTextfield');
        this.euroProtection = await this.#driver.$('id=com.tricentis.insuranceCalculatorApp:id/europrotectionSwitch');
        this.legalProtection = await this.#driver.$('id=com.tricentis.insuranceCalculatorApp:id/legalprotectionSwitch');
        this.insuranceSum = await this.#driver.$('id=com.tricentis.insuranceCalculatorApp:id/insuranceSumSlider');
        this.damageInsurance = await this.#driver.$('id=com.tricentis.insuranceCalculatorApp:id/damageinsuranceTextfield');
    }
}