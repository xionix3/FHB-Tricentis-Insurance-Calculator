import InsurantDataPage from "../pages/web/insurantData.js";
import PriceOptionDataPage from "../pages/web/priceOption.js";
import PrimaryNavigation from "../pages/web/primaryNavigation.js";
import ProductDataPage from "../pages/web/productData.js";
import SecondaryNavigation from "../pages/web/secondaryNavigation.js";
import VehicleDataPage from "../pages/web/vehicleData.js";

describe("Insurance Calculator Web: End to End", () => {
    let primaryNavigation;
    let secondaryNavigation;

    before(async () => {
        // Initialize primary navigation
        await browser.setWindowSize(1920, 1080)
        await browser.url("http://sampleapp.tricentis.com");


        primaryNavigation = new PrimaryNavigation(browser);
        await primaryNavigation.init();
    });

    it("Navigate to vehicle data section", async() => {
        await primaryNavigation.automobileNavButton.click();

        secondaryNavigation = new SecondaryNavigation(browser);
        await secondaryNavigation.init();
    });

    it("Enter Vehicle Data", async() => {
        const vehicleDataPage = new VehicleDataPage(browser);
        await vehicleDataPage.init();

        await vehicleDataPage.makeSelector.selectByAttribute("value", "BMW");
        await vehicleDataPage.enginePerformance.setValue("115");
        await vehicleDataPage.dateOfManufacture.setValue("04/01/2015");
        await vehicleDataPage.numberOfSeats.selectByAttribute("value", "5");
        await vehicleDataPage.fuelType.selectByAttribute("value", "Diesel");
        await vehicleDataPage.listPrice.setValue("40000");
        await vehicleDataPage.licensePlateNumber.setValue("W-24681R");
        await vehicleDataPage.annualMileage.setValue("20000"); 
    });

    it("Enter Insurant Data", async() => {
        await secondaryNavigation.insurantData.click();

        const insurantDataPage = new InsurantDataPage(browser);
        await insurantDataPage.init();

        // TODO - Add insurant data
    });

    it("Enter Product Data", async() => {
        await secondaryNavigation.productData.click();

        const productDataPage = new ProductDataPage(browser);
        await productDataPage.init();

        await productDataPage.startDate.setValue("10/01/2023");
        await productDataPage.insuranceSum.selectByAttribute("value", "5000000");
        await productDataPage.meritRating.selectByAttribute("value", "Bonus 1");
        await productDataPage.damageInsurance.selectByAttribute("value", "Partial Coverage");
        await productDataPage.euroProtection.click();
        await productDataPage.legalDefenseInsurance.click();
        await productDataPage.courtesyCar.selectByAttribute("value", "Yes");
    });

    it("Select Price Option and validate Price", async() => {
        // Steps here will only work once the insurance details have been added
        
        /*
        
        await secondaryNavigation.priceOption.click();

        const priceOptionPage = new PriceOptionDataPage(browser);
        await priceOptionPage.init();

        await priceOptionPage.selectGold.click();
        await expect(priceOptionPage.goldPrice).toHaveText("481.00");

        */
        // TODO - Add validation for silver price
    });
});