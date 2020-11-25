"use strict";

const {
  By,
  Eyes,
  Target,
  VisualGridRunner,
  FileLogHandler,
  RectangleSize
} = require('@applitools/eyes-webdriverio');
const {
  BrowserType,
  Configuration,
  DeviceName,
  ScreenOrientation
} = require('@applitools/eyes-selenium');

const local_viewport_width = 1200;
const local_viewport_height = 600;

const eyes = new Eyes(new VisualGridRunner(3));
eyes.setLogHandler(new FileLogHandler(true));



const configuration = new Configuration();
configuration.setBatch('Holiday Shopping');
configuration.setAppName('AppliFashion');
// //Add Chrome browser with two different viewports
configuration.addBrowser(1200, 800, BrowserType.CHROME);
// configuration.addBrowser(viewport_width, viewport_height, BrowserType.CHROME)
// configuration.addBrowser(viewport_width, viewport_height, BrowserType.CHROME_ONE_VERSION_BACK)
// configuration.addBrowser(viewport_width, viewport_height, BrowserType.CHROME_TWO_VERSIONS_BACK)
// configuration.addBrowser(viewport_width, viewport_height, BrowserType.FIREFOX)
// configuration.addBrowser(viewport_width, viewport_height, BrowserType.SAFARI)
// configuration.addBrowser(viewport_width, viewport_height, BrowserType.IE_10)
// configuration.addBrowser(viewport_width, viewport_height, BrowserType.IE_11)
// configuration.addBrowser(viewport_width, viewport_height, BrowserType.EDGE_CHROMIUM)
// configuration.addBrowser(viewport_width, viewport_height, BrowserType.EDGE_LEGACY)
// configuration.addBrowser({iosDeviceInfo: {deviceIosDeviceName.iPhone_X, screenOrientation:ScreenOrientation.LANDSCAPE}})
// configuration.addBrowser({chromeEmulationInfo:{ deviceName : DeviceName.Galaxy_S5, screenOrientation:ScreenOrientation.PORTRAIT}})

// //Add iPhone 4 with Portrait mode
// configuration.addDeviceEmulation(DeviceName.iPhone_4, ScreenOrientation.PORTRAIT);
configuration.setApiKey("wR99MqHjUrJ45kFAkfSpsgpyMugYthC97iCcAanWEAuSg110");
configuration.setViewportSize( new RectangleSize(local_viewport_width, local_viewport_height));



describe('Part 1', () => {

    beforeEach(() => {
        browser.url('http://demo.applitools.com/tlcHackathonMasterV1.html');

    })

    it('Main Page', () => {
        configuration.setTestName('Test 1');
        browser.call(() =>  eyes.setConfiguration(configuration));

        driver = browser.call(() => eyes.open(browser));
        browser.call(() =>  eyes.check("main page", Target.window()));

    
        console.log(
            `Please wait, we are now..
            1. Uploading the app's resources (html, css, images)
            2. Rendering them in different browsers, emulators
            3. Analyzing them using our A.I. 
    
            ...you should see the result within 15 - 60 seconds depending on your internet speed, # combinations and how heavy your app is.
        `
        );
        browser.call(() =>  eyes.closeAsync());
    });

    it('Filtered Product Grid', () => {
        configuration.setTestName('Test 2');
        browser.call(() =>  eyes.setConfiguration(configuration));
    
        driver = browser.call(() => eyes.open(browser));

        $('input[id*="Black"]').click();
        $('button[id="filterBtn"]').click();

    
        browser.call(() => eyes.check("filter by color", Target.region(By.id("product_grid"))));
    
        console.log(
            `Please wait, we are now..
            1. Uploading the app's resources (html, css, images)
            2. Rendering them in different browsers, emulators
            3. Analyzing them using our A.I. 
    
            ...you should see the result within 15 - 60 seconds depending on your internet speed, # combinations and how heavy your app is.
        `
        );
        browser.call(() =>  eyes.closeAsync());
    })

    afterAll(() => {
        // browser.call(() =>  eyes.closeAsync());
        // const results = await eyes.close(); // will return only first TestResults, but as we have two browsers, we need more results
        const results = browser.call(() =>  eyes.getRunner().getAllTestResults());
        console.log(results);
        console.log(results.getAllResults());
        browser.call(() =>  eyes.abortIfNotClosed());


    })
})
