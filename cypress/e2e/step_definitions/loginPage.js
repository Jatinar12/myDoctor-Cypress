import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";
import loginPageObject from "../../PageObject/login";

const login = new loginPageObject();

When('User enters the {string} in email input field', (email) => {
  login.getEmail(email)
})

When('User enters the {string} in password input field', (password) => {
  login.getPassword(password)
})

When('User clicks on submit button', () => {
  login.getSubmitButton()
})

Then('User should navigate to homepage', () => {
  cy.url().should('include', '/');
})

Then('User should get the error {string}', (message) => {
  login.errorMessage(message)
})
