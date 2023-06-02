export default class PriceOptionDataPage {
    #browser;
    silverPrice;
    goldPrice;
    platinumPrice;
    ultimatePrice;
    selectSilver;
    selectGold;
    selectPlatinum;
    selectUltimate;

    constructor(browser) {
        this.#browser = browser;
    }

    async init () {
        this.silverPrice = this.#browser.$("#selectsilver_price");
        this.goldPrice = this.#browser.$("#selectgold_price");
        this.platinumPrice = this.#browser.$("#selectplatinum_price");
        this.ultimatePrice = this.#browser.$("#selectultimate_price");
        this.selectSilver = this.#browser.$("#selectsilver").nextElement();
        this.selectGold = this.#browser.$("#selectgold").nextElement();
        this.selectPlatinum = this.#browser.$("#selectplatinum").nextElement();
        this.selectUltimate = this.#browser.$("#selectultimate").nextElement();
    }
}