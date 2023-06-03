export default class PersonDataPage {
    #driver;
    firstName;
    lastName;
    dateOfBirth;
    genderMale;
    genderFemale;
    

    constructor(driver) {
        this.#driver = driver;
    }

    async init () {
        // TODO Add locators for person data page elements
        
        this.firstName = await this.#driver.$('id=com.tricentis.insuranceCalculatorApp:id/firstnameTextfield');
        this.lastName = await this.#driver.$('id=com.tricentis.insuranceCalculatorApp:id/lastnameTextfield');
        this.dateOfBirth = await this.#driver.$('id=com.tricentis.insuranceCalculatorApp:id/dobTextfield');
        this.genderMale = await this.#driver.$('id=com.tricentis.insuranceCalculatorApp:id/gender_male');
        this.genderFemale = await this.#driver.$('id=com.tricentis.insuranceCalculatorApp:id/gender_female');
    }
}