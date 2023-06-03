import PrimaryNavigation from "../pages/mobile/android/navigation.js";
import HomePage from "../pages/mobile/android/home.js";
import VehicleDataPage from "../pages/mobile/android/vehicleData/vehicleData.js";
import VehicleDataMakeDialogPage from "../pages/mobile/android/vehicleData/make/vehicleDataMakeDialog.js";
import VehicleDataMakeOptionsPage from "../pages/mobile/android/vehicleData/make/vehicleDataMakeOptions.js";
import Makes from "../constants/makes.js";
import PersonDataPage from "../pages/mobile/android/personData.js";
import ProductDetailsPage from "../pages/mobile/android/productDetails.js";
import QuotePage from "../pages/mobile/android/quote.js";
import { expect } from "expect-webdriverio";

describe("Insurance Calculator Android: End to End", () => {
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

        // Initialize vehicle data page and click on make
        const vehicleDataPage = new VehicleDataPage(driver);
        await vehicleDataPage.init();
        await vehicleDataPage.make.click();

        // Initialize make dialog and open options
        const vehicleDataMakeDialogPage = new VehicleDataMakeDialogPage(driver);
        await vehicleDataMakeDialogPage.init();
        await vehicleDataMakeDialogPage.makeSelectionCombobox.click();

        // Initialize make options and select make
        const vehicleDataMakeOptionsPage = new VehicleDataMakeOptionsPage(driver);
        await vehicleDataMakeOptionsPage.init();
        await vehicleDataMakeOptionsPage.selectMake(Makes.BMW);

        // Close make dialog
        await vehicleDataMakeDialogPage.makeSelectionDoneButton.click();

        // Insert remaining values in vehicle data page
        await vehicleDataPage.yearOfConstruction.setValue("2014");
        await vehicleDataPage.listPrice.setValue("40000");
        await vehicleDataPage.mileagePerYear.setValue("20000");
        await vehicleDataPage.performance.setValue("150");
        await vehicleDataPage.fuel.setValue("Petrol");
        await vehicleDataPage.usage.setValue("Private");

    });

    it("Insert Person Data", async() => {

        // TODO - Insert values in person data page

        // Navigate to person data page
        primaryNavigation.personDataNavButton.click();
        const personDataPage = new PersonDataPage(driver);
        await personDataPage.init();

        await personDataPage.firstName.setValue("Patrick");
        await personDataPage.lastName.setValue("Schlögl");
        await personDataPage.dateOfBirth.setValue("06.12.1986");
        await personDataPage.genderMale.click();

    });


    it("Insert Product Details Data", async() => {

        // Navigate to product details page
        await primaryNavigation.productDetailNavButton.click();

        // Insert values in product details page
        const productDetailsPage = new ProductDetailsPage(driver);
        await productDetailsPage.init();
        await productDetailsPage.preferredStartDate.setValue("21.05.2023");
        await productDetailsPage.paymentOption.setValue("Yearly");
        await productDetailsPage.euroProtection.click();
        await productDetailsPage.legalProtection.click();
        await productDetailsPage.insuranceSum.setValue(17965570);
        await productDetailsPage.damageInsurance.setValue("No Coverage");

    });

    it("Check quote information", async() => {

        // Navigate to quote page
        await primaryNavigation.quoteNavButton.click();

        // Initialize quote page and validate data
        const quotePage = new QuotePage(driver);
        await quotePage.init();

        // Validate quote
        await expect(quotePage.automobileLiability).toHaveText("319.66");

        // TODO - Add validation for premiumTax and offer Summary

    });
});