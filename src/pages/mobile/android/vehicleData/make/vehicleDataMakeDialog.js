export default class VehicleDataMakeDialogPage {
    #driver;
    makeSelectionCombobox;
    makeSelectionDoneButton;

    constructor(driver) {
        this.#driver = driver;
    }

    async init () {
        const doneButtonSelector = 'new UiSelector().className("android.widget.Button").text("Done")';
        
        this.makeSelectionCombobox = await this.#driver.$('id=com.tricentis.insuranceCalculatorApp:id/Picker');
        this.makeSelectionDoneButton = await this.#driver.$(`android=${doneButtonSelector}`);
    }
}