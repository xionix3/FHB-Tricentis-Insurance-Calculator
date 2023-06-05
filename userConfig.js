const userConfig = {
    localDevices: {
        androidEmulatorUdid: "emulator-5554"
    },
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
}

export default userConfig