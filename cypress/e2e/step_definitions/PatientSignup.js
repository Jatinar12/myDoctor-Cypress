import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";

import PatientSignUpObject from "cypress/PageObject/Patientsignup";

const patientPage = new PatientSignUpObject();

When('User clicks on patient signup tab', () => {
    patientPage.getPatientTab()
})
When('User selects the {string} gender', () => {
    patientPage.getGendr()
})
When('User selects the {string} {string} {string} in date select field', (date, month, year) => {
    patientPage.getDate(date)
    patientPage.getMonth(month)
    patientPage.getYear(year)
})

Then('User should get the {string}', (Message) => {
    patientPage.getMessage(Message)
})


When('User entrs the {string} in email input field', (email) => {
    patientPage.getInavlidEmail(email)
})

Then('User should get the error message', (message) => {
    patientPage.getErrorMessage(message)
})

Then('User should get the error {string} message', (Message) => {
    patientPage.getErrorPassword(Message)
})
Then('User should get the error {string} messags', (Message) => {
    patientPage.getErrorPassword(Message)
})

When('User enters the {string} in number input field', (Mobile_Number) => {
    patientPage.getNumb(Mobile_Number)
})

Then('User should get the error {string} mssg', (Message) => {
    patientPage.getErrorMessage(Message)
})

When('User did not enters the {string} in name input field', (fullName) => {
    patientPage.getFullName(fullName)
})

Then('User should get the errors {string}', (Message) => {
    patientPage.getErrorField(Message)
})

