import { Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";
import PatientSignUpObject from "cypress/PageObject/Patientsignup";
import DoctorSignupObject from "cypress/PageObject/DoctorSignup";
import loginPageObject from "cypress/PageObject/login";
import Urls from "../../urls/Urls.json"

const login = new loginPageObject();
const doctorPage = new DoctorSignupObject;
const patientPage = new PatientSignUpObject();

Given('User is on {string} page', (url) => {
    cy.visit(Urls[url]);
})

When('User clicks on login Button',() => {
    login.getLoginButton()
  })
  When('User enters the {string} in name input field', (fullName) => {
    patientPage.getFullName(fullName)
})
When('User enters the mobile number in number input field', (mobile_Number) => {
    patientPage.getNumber(mobile_Number)
})
When('User entrs the email in email input field', (email) => {
    patientPage.getEmail(email)
})
When('User enters the {string} in password field', (password) => {
    patientPage.getPassword(password)
})
When('User enters the {string} in confirm password field', (confirm_Password) => {
    patientPage.getre_enter(confirm_Password)
})
When('User clicks on register buttton', () => {
    patientPage.getRegister()
})