export default class InsurantDataPage {
    #browser;
    firstName;
    lastName;
    dateOfBirth;
    genderMale;
    genderFemale;
    streetAddress;
    country;
    zipCode;
    city;
    occupation;


    constructor(browser) {
        this.#browser = browser;
    }

    async init () {
        // TODO - Add locators
        /*
        this.firstName = this.#browser.$("");
        this.lastName = this.#browser.$("");
        this.dateOfBirth = this.#browser.$("");
        this.genderMale = this.#browser.$("");
        this.genderFemale = this.#browser.$("");
        this.streetAddress = this.#browser.$("");
        this.country = this.#browser.$("");
        this.zipCode = this.#browser.$("");
        this.city = this.#browser.$("");
        this.occupation = this.#browser.$("");
        this.hobbiesSpeeding = this.#browser.$("");
        */
    }
}