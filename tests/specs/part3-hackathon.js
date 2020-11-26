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
  ScreenOrientation,
  IosDeviceName
} = require('@applitools/eyes-selenium');
require('dotenv').config();


const local_viewport_width = 1200;
const local_viewport_height = 600;

const eyes = new Eyes(new VisualGridRunner(3));
eyes.setLogHandler(new FileLogHandler(true));

const configuration = new Configuration();
configuration.setBatch('Holiday Shopping');
configuration.setAppName('AppliFashion');

// //Add browsers with two different viewports
configuration.addBrowser(1200, 800, BrowserType.CHROME);
configuration.addBrowser(1200, 800, BrowserType.FIREFOX)
configuration.addBrowser(1200, 800, BrowserType.SAFARI)
configuration.addBrowser(1200, 800, BrowserType.EDGE_CHROMIUM)
configuration.addBrowser({iosDeviceInfo: {deviceName:IosDeviceName.iPhone_X, screenOrientation:ScreenOrientation.LANDSCAPE}})

configuration.setApiKey(process.env.APPLITOOLS_KEY);
configuration.setViewportSize( new RectangleSize(local_viewport_width, local_viewport_height));

describe('Part 3', () => {

    beforeEach(() => {
        browser.url('https://demo.applitools.com/tlcHackathonMasterV2.html');
    })

    it('Main Page', () => {
        configuration.setTestName('Test 1');
        browser.call(() =>  eyes.setConfiguration(configuration));

        driver = browser.call(() => eyes.open(browser));
        browser.call(() =>  eyes.check("main page", Target.window().fully()));

    
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

    it('Product Details', () => {
        configuration.setTestName('Test 3');
        browser.call(() =>  eyes.setConfiguration(configuration));
    
        driver = browser.call(() => eyes.open(browser));

        $('img[alt="Appli Air x Night"]').click();
        $('h1[id="shoe_name"]').waitForDisplayed({ timeout:30000, timeoutMsg: 'Shoe heading was not displayed'});
    
        browser.call(() =>  eyes.check("product details", Target.window().fully()));
    
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
        const results = browser.call(() =>  eyes.getRunner().getAllTestResults());
        console.log(results);
        console.log(results.getAllResults());
        browser.call(() =>  eyes.abortIfNotClosed());
    })
})
