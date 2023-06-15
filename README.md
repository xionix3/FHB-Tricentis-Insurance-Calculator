# Dokumentation (High Level)
FH-Burgenland 2023

Umsetzung und Dokumentation (High Level) der Projektumsetzung (Inklusive Zugriff zum Source Code; entweder ein öffentliches Repo oder Einladung ins private Repo)

## Folgende Anforderungen müssen erfüllt werden..
Projekt-Autoren:
**[Sebastian Loidolt](2210781008@fh-burgenland.at), [Dominik Mucha](2210781015@fh-burgenland.at), [Patrick Schlögl](2210781013@fh-burgenland.at), [Daniel Radl](2210781010@fh-burgenland.at)**

All rights -> [HERE](Tricentis-Tutorial.md)

### Konfigurationsschritte  

#### Web UI Tests entwickeln  

Im ersten Schritt wurden der entsprechenden Test zum Testen der Landing Page hinzugefügt dazu wurden folgende Codeteile hinzugefügt:  
[primaryNavigation.js](/src/pages/web/primaryNavigation.js):  
````ruby
this.branding_Logo = await this.#browser.$("#branding");
````  
[web.spec.js](/src/specs/web.spec.js):  
````ruby
it("Testlanding page", async() => {
    await primaryNavigation.branding_Logo.click();
}); 
````  
Danach wurden die folgenden Dateien vervollständigt bzw. implementiert:  
[insurantData.js](/src/pages/web/insurantData.js)    
[productData.js](/src/pages/web/productData.js)  

und die folgenden Dateien für durchführung des Trucks angepasst:  
[vehicleData.js](/src/pages/web/vehicleData.js)  

Außerdem musste noch die Navigation entsprechend angepasst werden um im Test auf die Truckseite nagivieren zu können:  
[web.spec.js](/src/specs/web.spec.js)  
````ruby
it("Navigate to vehicle data section", async() => {
    await primaryNavigation.truckNavButton.click();

    secondaryNavigation = new SecondaryNavigation(browser);
    await secondaryNavigation.init();
});
````  
    
#### Web UI Tests lokal ausführen  
Um die Tests lokal ausführen zu können muss entsprechend ein Device angesteckt und freigegeben oder im Android Studio,
ein entsprechendes Gerät emuliert werden.  
Für den Zugriff auf das Gerät muss die Datei [userConfig.js](/userConfig.js) der folgende Bereich entsprechend der Konfiguration angepasst werden:  
````ruby
localDevices: {
        androidEmulatorUdid: "emulator-5554"
    },
````   
Danach kann der lokale Test erfolgreich durchgeführt werden.  
  
#### Web UI Tests in der Cloud auf headspin.io ausführen  
Für die durchführung der Tests in der Cloud muss ebenfalls die [userConfig.js](/userConfig.js) entsprechend dem Device, welches wir auf der Website   [headspin.io](https://www.headspin.io) provisionieren, eingetragen werden:  
````ruby
 cloudDevices: {
        androidDeviceUdid: "RF8N91W5LVX",
        iOSDeviceUdid: "e3c5ebfc1e2945b0e5c1e253c87b70c5704792eb",
        browser: {
            browserName: "chrome"
        }
    },
    headspinHostConfig: {
        protocol: "https",
        hostname : "appium-dev.headspin.io",
        port : 443,
        path : "/v0/9614adc7ebd54456bd5ed099b40e63b0/wd/hub",
    }
````  
Wichtig ist hierbei vorallem auch die Angabe des api-Key welchen wir ebenfalls von [headspin.io](http://www.headspin.io) erhalten.    
![headspin_device](/pictures/headspin_device.png) 
  
Weiters musste die datei [package.json](/package.json) entsprechend angepasst werden:
````ruby
{
  "name": "insurancecalculatorappium",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "npx @wdio/cli run src/config/cloud/wdio.web.conf.js --suite web"
  },
  "author": "",
  "license": "ISC",
  "type": "module",
  "dependencies": {
    "@wdio/allure-reporter": "^8.10.7",
    "@wdio/appium-service": "^8.10.5",
    "@wdio/cli": "^8.10.5",
    "@wdio/dot-reporter": "^8.10.4",
    "@wdio/local-runner": "^8.10.4",
    "@wdio/mocha-framework": "^8.10.4",
    "@wdio/selenium-standalone-service": "^8.10.4",
    "@wdio/spec-reporter": "^8.10.4",
    "appium": "^1.22.3",
    "expect-webdriverio": "^4.2.3",
    "mocha-steps": "^1.3.0",
    "webdriverio": "^8.10.4"
  }
}
````  
  
Den Code für die notwendige Ausführung des Tests, haben wir dem lokalem build entnommen und entsprechend entsprechend angepasst:  
````ruby
    "test": "npx @wdio/cli run src/config/cloud/wdio.web.conf.js --suite web"
````  
  
#### Eine Pipeline mit github actions bauen die, die Tests manuell oder automatisch auf headspin.io durchführt  
Abschließend wurde um ein automatisierte build und test mittels github-actions durchgeführt wird, folgende Datei im Verzeichnis [.github\workflows] erstellt:  
[test.yml]  
````ruby
name: Test-Headspin

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Setup Node.js environment
        uses: actions/setup-node@v3
        with:
          node-version: '16'
      - name: Install dependencies
        run: npm ci
      - name: Run Web tests on HeadSpin
        run: npm test
````  
Hierbei stießen wir anfangs auf das Problem, dass die dependencies mit der node-version: '14' nicht mehr installiert werden konnten, weshalb wir auf die Version 16 hochgegangen sind.   
  
Durch diese Anpassungen, war es uns möglich die geforderte Aufgabe vollständig zu lösen, da sowohl manuell via github als auch via push des Codes die Tests automatisch getriegert werden können.
<!--Generete PDF from README.md => pip install grip, grip README.md-->