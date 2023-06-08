import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";
import DoctorSignupObject from "cypress/PageObject/DoctorSignup";

const doctorPage = new DoctorSignupObject;

When('User clicks on Doctor signUp tab', () => {
    doctorPage.getDoctorTab()
})



