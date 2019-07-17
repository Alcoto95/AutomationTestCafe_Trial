# Todoist Automated UI and API Tests for Todoist

This is a Test Automation Framework for the Todoist Application. It covers Functional Tests and API integration tests.

## Tools to Automate

* TestCafe
* Postman + Newman

### Prerequisites

* Nodejs
* NPM

### Setting up

Clone the repo and run the following command in order to install the dependencies:

```
npm install
```

## Running the tests

### For TestCafe:
Go to the `package.json` and search for the testcafe scripts (i.e. testcafe:chrome). In order to run them you can use npm as follows:

```
npm run testcafe:chrome
```

TestCafe will be automatically executed using your local chrome version installed in your machine and will perform all the tests specified in the command.

Note: If no specific tests are specified, it will run all the tests inside the folder selected in the script.

### For API Test:
Go to the `package.json` and search for the api/newman scripts (i.e. api:test). In order to run them you can use npm as follows:

```
npm run api:test
```

You will see the postman/newman execution in the console showing a result of the tests passing or failing and; a log error message in case of failing and the passing tests as well.

### Break down into end to end tests

TestCafe is a Seleniumless or Non-Selenium tool to automate E2E web testing.
It has the integration with browserstack (https://github.com/DevExpress/testcafe-browser-provider-browserstack). Allowing you to perform your tests in different Browsers, OS and their different versions, as well as use different devices for web tests.

Postman and Newman are for performing API Testing by doing direct calls to the server using endpoints, getting a response and different parameters that will define if the call was successful or not, providing different information to you in order to test.

Tests inside Postman uses JavaScript for scripting and chai for assertions.

## Built With

* [TestCafe](https://devexpress.github.io/testcafe/) - The Functional Automation used for Web/FE
* [Postman](https://www.getpostman.com/) - API Testing Tool
* [PostmanBDD](https://www.npmjs.com/package/postman-bdd) - Assertions for Postman
* [Newman](https://www.npmjs.com/package/newman) - Postman CLI for Automation Testing
