import Makes from "../../../../../constants/makes.js";

export default class VehicleDataMakeOptionsPage {
    #driver;
    #makeOptionElements = {};

    constructor(driver) {
        this.#driver = driver;
    }

    async init () {
        for (const make in Makes) {
            const optionSelector = `new UiSelector().className("android.widget.CheckedTextView").text("${make}")`;
            this.#makeOptionElements[make] = await this.#driver.$(`android=${optionSelector}`);
        }
    }

    async selectMake (make) {
        await this.#makeOptionElements[make].click();
    }
}