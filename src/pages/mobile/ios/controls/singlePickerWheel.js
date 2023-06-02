export default class SinglePickerWheel {
    #driver;

    constructor(driver) {
        this.#driver = driver;
    }

    async init () {
        this.pickerWheel = await this.#driver.$('-ios class chain:**/XCUIElementTypePickerWheel[1]');
        this.cancelButton = await this.#driver.$('-ios class chain:**/XCUIElementTypeButton[`label == "Cancel"`]');
        this.doneButton = await this.#driver.$('-ios class chain:**/XCUIElementTypeButton[`label == "Done"`]');
    }
}