import PrimaryNavigation from "../pages/mobile/ios/navigation.js";
import HomePage from "../pages/mobile/ios/home.js";
import VehicleDataPage from "../pages/mobile/ios/vehicleData.js";
import SinglePickerWheel from "../pages/mobile/ios/controls/singlePickerWheel.js";
import { expect } from "expect-webdriverio";
import Makes from "../constants/makes.js";
import DatePickerWheel from "../pages/mobile/ios/controls/datePickerWheel.js";
import PersonDataPage from "../pages/mobile/ios/personData.js";
import ProductDetailsPage from "../pages/mobile/ios/productDetails.js";

describe("Insurance Calculator iOS: End to End", () => {
    let primaryNavigation;

    before(async () => {
        // Initialize primary navigation
        primaryNavigation = new PrimaryNavigation(driver);
        await primaryNavigation.init();
    });

    it("Navigate to vehicle data section", async() => {

        // Initialize home page and click on car navigation button
        const homePage = new HomePage(driver);
        await homePage.init();
        await homePage.carNavButton.click();

    });

    it("Insert Vehicle Data", async() => {

        // Initialize vehicle data page
        const vehicleDataPage = new VehicleDataPage(driver);
        await vehicleDataPage.init();

        // TODO - Insert vehicle Data

    });

    it("Insert Person Data", async() => {

        // Navigate to person data page
        primaryNavigation.personDataNavButton.click();

        // Insert values in person data page
        const personDataPage = new PersonDataPage(driver);
        await personDataPage.init();

        // TODO - Insert person data

    });


    it("Insert Product Details Data", async() => {

        // Navigate to product details page
        await primaryNavigation.productDetailNavButton.click();

        // Insert values in product details page
        const productDetailsPage = new ProductDetailsPage(driver);
        await productDetailsPage.init();

        // TODO - Insert product details


    });
});