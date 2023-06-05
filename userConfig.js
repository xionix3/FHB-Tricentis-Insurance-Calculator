const userConfig = {
    localDevices: {
        androidEmulatorUdid: "emulator-5554"
    },
    cloudDevices: {
        androidDeviceUdid: "RF8N91W5LVX",
        iOSDeviceUdid: "",
        browser: {
            browserName: "chrome"
        }
    },
    headspinHostConfig: {
        protocol: "https",
        hostname : "appium-dev.headspin.io",
        port : 443,
        path : "/v0/9dbc808ebc7c4fcf91b1c32f56a68661/wd/hub",
    }
}

export default userConfig