"use strict";

const chromedriver = require('chromedriver');
const {remote} = require('webdriverio');
const {
  By,
  Eyes,
  Target,
  VisualGridRunner,
  FileLogHandler
} = require('@applitools/eyes-webdriverio');
const {
  BrowserType,
  Configuration,
  DeviceName,
  ScreenOrientation
} = require('@applitools/eyes-selenium');

const viewport_width = 1200;
const viewport_height = 600;


describe('The Hello World Page',  function () {
    it('looks visiually perfect', async function () {
        browser.url('http://demo.applitools.com/tlcHackathonMasterV1.html');

        // Initialize the eyes SDK with 3 concurrent runners
        const eyes = new Eyes(new VisualGridRunner(3));

        eyes.setLogHandler(new FileLogHandler(true));

        try {
            const configuration = new Configuration();
            configuration.setAppName('Demo app');
            configuration.setTestName('Hopefully this is it - WebdriverIO Visual Grid test!');
        
            // //Add Chrome browser with two different viewports
            // configuration.addBrowser(800, 600, BrowserType.CHROME);
            // configuration.addBrowser(700, 500, BrowserType.CHROME);
        
            // //Add Firefox browser with two different viewports
            // configuration.addBrowser(1200, 800, BrowserType.FIREFOX);
            // configuration.addBrowser(1600, 1200, BrowserType.FIREFOX);


            configuration.addBrowser(viewport_width, viewport_height, BrowserType.CHROME)
            configuration.addBrowser(viewport_width, viewport_height, BrowserType.CHROME_ONE_VERSION_BACK)
            configuration.addBrowser(viewport_width, viewport_height, BrowserType.CHROME_TWO_VERSIONS_BACK)
            configuration.addBrowser(viewport_width, viewport_height, BrowserType.FIREFOX)
            configuration.addBrowser(viewport_width, viewport_height, BrowserType.SAFARI)
            configuration.addBrowser(viewport_width, viewport_height, BrowserType.IE_10)
            configuration.addBrowser(viewport_width, viewport_height, BrowserType.IE_11)
            configuration.addBrowser(viewport_width, viewport_height, BrowserType.EDGE_CHROMIUM)
            configuration.addBrowser(viewport_width, viewport_height, BrowserType.EDGE_LEGACY)
            // configuration.addBrowser({iosDeviceInfo: {deviceIosDeviceName.iPhone_X, screenOrientation:ScreenOrientation.LANDSCAPE}})
            // configuration.addBrowser({chromeEmulationInfo:{ deviceName : DeviceName.Galaxy_S5, screenOrientation:ScreenOrientation.PORTRAIT}})
        
            // //Add iPhone 4 with Portrait mode
            // configuration.addDeviceEmulation(DeviceName.iPhone_4, ScreenOrientation.PORTRAIT);
        
            // Set your private API key here or in the "APPLITOOLS_API_KEY" environment variable
            configuration.setApiKey("wR99MqHjUrJ45kFAkfSpsgpyMugYthC97iCcAanWEAuSg110");
            eyes.setConfiguration(configuration);
        
            driver = await eyes.open(browser);
        
            // Navigate the browser to the "hello world!" web-site.
            await driver.url("http://demo.applitools.com/tlcHackathonMasterV1.html");
        
            //⭐️To see visual bugs, change the above URL to:
            //  https://demo.applitools.com/index_v2.html and run the test again
        
            // Visual checkpoint #1.
            await eyes.check("Login Page", Target.window());
        
            // // Click the "Log in" button.
            // const el = await driver.findElement(By.id('log-in'));
            // await el.click();
        
            // // Visual checkpoint #2.
            // await eyes.check("App page", Target.window());
        
            console.log(
              `Please wait, we are now..
              1. Uploading the app's resources (html, css, images)
              2. Rendering them in different browsers, emulators
              3. Analyzing them using our A.I. 
        
              ...you should see the result within 15 - 60 seconds depending on your internet speed, # combinations and how heavy your app is.
            `
            );
        
        
            await eyes.closeAsync();
            // End the test.
            // const results = await eyes.close(); // will return only first TestResults, but as we have two browsers, we need more results
            const results = await eyes.getRunner().getAllTestResults(false);
            console.log(results);
            console.log(results.getAllResults());
          } finally {
            // Close the browser.
            // If the test was aborted before eyes.close was called ends the test as aborted.
            await eyes.abortIfNotClosed();
          }
    })
})
