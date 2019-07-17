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

Explain what these tests test and why

```
Give an example
```

## Built With

* [TestCafe](https://devexpress.github.io/testcafe/) - The Functional Automation used for Web/FE
* [Postman](https://www.getpostman.com/) - API Testing Tool
* [Newman](https://www.npmjs.com/package/newman) - Postman CLI for Automation Testing
