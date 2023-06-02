# FHB-Tricentis-Insurance-Calculator

## Description

This is an example project automating the Tricentis Insurance Calculator app. Is uses [WebdriverIO](https://webdriver.io/) to automate the Tricentis insurance calculator app on the following platforms:
* Android
* iOS
* Web

For Android and iOS Appium is used for automation. For web Selenium is used.

## Prerequisites

To get started with the project you need to install the following components:
* Installation JDK
    * https://www.oracle.com/java/technologies/downloads/
    * JDK 20 and JDK 17 (LTS) are ok and can both be used
* Installation VS Code
    * https://code.visualstudio.com/download
* Installation Android Studio
    * https://developer.android.com/studio
*Installation Git
    * https://git-scm.com/downloads
* Installation node.js
    * https://nodejs.org/en/download
    * LTS or Latest are ok and can both be used
* Installation Appium Inspector
    * https://github.com/appium/appium-inspector/releases 

## Configuration

### Environment Variables

After the installation of Android Studio you have to set the environment variable ANDROID_HOME, which should point to your Android SDK installation folder. 
Additionally, extend the Path environment variable with the path to your installed Android platform tools. We need this configuration to call adb directly.

Example commands for Mac/Linux (Gnu Bash or Zsh):

```bash
export ANDROID_HOME=~/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools
```

Example commands for Windows
```cmd
set ANDROID_HOME=C:\Users\<username>\AppData\Local\Android\Sdk
set PATH=%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools;%PATH%
```

### Create a new Android Emulator with Android Studio

How you can create a new Android Emulator is described here:
* https://developer.android.com/studio/run/managing-avds

### Install Tricentis Insurance Calculator App on your emulator

How you can install an app on an Android Emulator is described here:
* https://developer.android.com/studio/run/emulator-install-add-files#:~:text=To%20install%20an%20APK%20file,file%20onto%20the%20emulator%20screen.

You will be able to find the APK of the Insurance Calculator app on the Moodle Course page.

### Get the udid of your Android emulator

Once the environment variable for adb is set, you should be able to run the following command:

```bash
adb devices
```

The command returns a response that is structured like this:

```
List of devices attached
emulator-5554	device
```

In this example, "emulator-5554" is the udid of the Android emulator. You will need to id to configure your automation project.

### Install Appium

#### Install Appium Server
To install Appium, use the following command:

```bash
npm i -g appium@next   
```
This will install Appium globally for you.

#### Install UiAutomator2 driver

To automate apps with Appium, you will need to use a driver. We will use UiAutomator2. To install the driver, run the following command:

```bash
appium driver install uiautomator2   
```
#### Test your Appium Installation

You can start appium with the following command:

```bash
appium   
```
After Appium is started, make sure that your Android emulator is running. Then you can test your Appium configuration with Appium inspector.
Start Appium Inspector and add the following configuration:
<img width="1112" alt="image" src="https://github.com/horvathkevin/FHB-Tricentis-Insurance-Calculator/assets/30588277/5a01718d-9078-48c3-8f14-d0a8df68f366">

After adding the configuration you can click on "Start Session". If everything is configured properly, the session should be created successfully and your screen should look like this:
<img width="1192" alt="image" src="https://github.com/horvathkevin/FHB-Tricentis-Insurance-Calculator/assets/30588277/3e7b91c0-a816-4b93-b11f-ff92df975631">

## Getting started with automation

### Clone this project

Run the following command to clone the project

```bash
git clone https://github.com/horvathkevin/FHB-Tricentis-Insurance-Calculator.git   
```

### Make sure that your Android Emulator and Appium is running

Start your emulator with Android studio and run the following command to start your Appium Server:

```bash
appium   
```

### Open the project in VS Code

After cloning the project open it in VS Code. 

### User configuration of the project

Create a file called "userConfig.js" in the root directory of the project with the following content:

```js
const userConfig = {
    localDevices: {
        androidEmulatorUdid: "emulator-5554"
    },
    cloudDevices: {
        androidDeviceUdid: "<Select the udid of a headspin Android device>",
        iOSDeviceUdid: "<Select the udid of a headspin iOS device>",
        browser: {
            browserName: "chrome"
        }
    },
    headspinHostConfig: {
        protocol: "https",
        hostname : "appium-dev.headspin.io",
        port : 443,
        path : "/v0/<your api token>/wd/hub",
    }
}

export default userConfig
```

To automate on devices running on Headspin, you need to configure the API token. You can find your individual API token within the user settings section of the platform.

### Run the debug configurations

In the project you can find multiple launch configurations that you can use for debugging.
Those are available in the debug section of VS Code:

<img width="670" alt="Screenshot 2023-06-02 at 16 38 55" src="https://github.com/horvathkevin/FHB-Tricentis-Insurance-Calculator/assets/30588277/1457274c-3f98-4527-80e2-4815c56ab44c">

Run the debug configurations "Local: Debug Android tests" and "Local: Debug Web tests"

You should get successful runs for both.

## Helpful links for the automation excercise

* https://appium.io/docs/en/2.0/guides/caps/
* https://appium.github.io/appium-xcuitest-driver/4.16/capabilities/
* https://webdriver.io/docs/selectors/
* https://w3c.github.io/webdriver/#capabilities







