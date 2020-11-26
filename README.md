# Applitools Holiday Shopping Hackathon - Javascript

## Applitools UltraFast Grid - using WebdriverIO version 5 and Jasmine

In order to get this repo up and running you'll have to follow the steps outlined below

1. Open your terminal and navigate to your desktop. 
    ```
    cd ~

    cd Desktop
    ``` 
2. Now create a directory on your desktop and navigate to it
    ```
    mkdir applitoolsHackathonRepo

    cd applitoolsHackathonRepo
    ```
3. Now clone this repository
    ```
    git clone https://github.com/goveanick/applitoolsHackathon_WDIO5.git
    ```
4. Now navigate to the repo you just cloned
    ```
    cd applitoolsHackathon_WDIO5
    ```
5. You should now be in the repo's root directory, you now want to download all the packages necessary to get the repo set up, run the following command
    ```
    npm install
    ```
6. Once all the packages are done downloading, create a `.env` file at the root of the project
    ```
    touch .env
    ```
7. You'll need to add your `APPLITOOLS_KEY` to the .env so the spec files will be able to connect to the applitools api. Add this line inside your `.env` file. Replace this `[YOUR_PERSONAL_KEY]` with your own unique key.
    ```
    APPLITOOLS_KEY=[YOUR_PERSONAL_KEY]
    ```
8. Now that you have the repo all set up, the final thing to do is to download `selenium-standalone-sever`, the latest version at the time of writing this is `3.141.59`
    ```
    Go to this url to download the .jar file
    https://www.selenium.dev/downloads/
    ```
9. Once the `.jar` is finished downloading, open a NEW terminal window and navigate to your Downloads folder or wherever your downloaded files are saved, then run the java command below.
    ```
    cd ~
    cd Downloads

    java -jar selenium-server-standalone-3.141.59.jar
    ```
10. The java command will run Selenium on localhost and on port 4444

11. You are now ready to run the applitools spec files

12. Go back to the terminal where you have the repo open, you should be on the `main` branch in this terminal. You can then run any of the following commands to run any of the applitools tests
    ```
    npm run test-part1  // This command will run the first part of the hackathon
    npm run test-part2  // This command will run the second part of the hackathon
    npm run test-part3  // This command will run the third part of the hackathon
    npm run test-all-parts  // This command will run the all three parts of the hackathon
    ```