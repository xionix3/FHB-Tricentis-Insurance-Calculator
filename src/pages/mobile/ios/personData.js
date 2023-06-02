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
        // TODO - Add locators for person data
        /*
        this.firstName = await this.#driver.$('');
        this.lastName = await this.#driver.$('');
        this.dateOfBirth = await this.#driver.$('');
        this.genderMale = await this.#driver.$('');
        this.genderFemale = await this.#driver.$('');
        */
    }
}