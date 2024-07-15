const { Given, When, Then } = require('cucumber');
const Selector = require('testcafe').Selector;
const loginPage = require('../support/pages/login-page');
const securePage = require('../support/pages/secure-page')


Given('I open the log in page', async function () {
   await testController.navigateTo(loginPage.login.url())
});

When('I enter the username {string}', async function (username) {
    await testController.typeText(loginPage.login.inputUsername(),username)
});

When('I enter the password {string}', async function (password) {
    await testController.typeText(loginPage.login.inputPassword(),password)
});

When('I click on the log in button', async function () {
    await testController.click(loginPage.login.buttonClick())
});

Then('A succesful message is displayed', async function () {
    await testController.expect(loginPage.login.messageSuccess().innerText).contains('You logged into a secure area!')
});

// Logout
When('that I clicked the logout button', async function () {
    await testController.click(securePage.secure.buttonLogout())
 });

Then('the logout successful message is displayed', async function () {
    await testController.expect(loginPage.login.messageLoggedOutSuccess().innerText).contains('You logged out of the secure area!')
});

