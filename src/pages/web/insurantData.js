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
    hobbiesSpeeding;


    constructor(browser) {
        this.#browser = browser;
    }

    async init () {
        
        this.firstName = this.#browser.$("#firstname");
        this.lastName = this.#browser.$("#lastname");
        this.dateOfBirth = this.#browser.$("#birthdate");
        this.genderMale = this.#browser.$("#gendermale").nextElement();
        this.genderFemale = this.#browser.$("#genderfemale").nextElement();
        this.streetAddress = this.#browser.$("#streetaddress");
        this.country = this.#browser.$("#country");
        this.zipCode = this.#browser.$("#zipcode");
        this.city = this.#browser.$("#city");
        this.occupation = this.#browser.$("#occupation");
        this.hobbiesSpeeding = this.#browser.$("#speeding").nextElement();
        
    }
}