export default class DatePickerWheel {
    #driver;

    constructor(driver) {
        this.#driver = driver;
    }

    async init () {
        this.monthPickerWheel = await this.#driver.$('-ios class chain:**/XCUIElementTypePickerWheel[1]');
        this.dayPickerWheel = await this.#driver.$('-ios class chain:**/XCUIElementTypePickerWheel[2]');
        this.yearPickerWheel = await this.#driver.$('-ios class chain:**/XCUIElementTypePickerWheel[3]');
        this.cancelButton = await this.#driver.$('-ios class chain:**/XCUIElementTypeButton[`label == "Cancel"`]');
        this.doneButton = await this.#driver.$('-ios class chain:**/XCUIElementTypeButton[`label == "Done"`]');
    }
}