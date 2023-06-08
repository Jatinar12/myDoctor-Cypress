import Helpers from "cypress/helpers/genericHelpers";
import PatientSignup from "@pages/PatientPage";

const registerPage = new PatientSignup;
const helpers = new Helpers();

class PatientSignUpObject {
    getVisit() {
        cy.get(registerPage.visit())
    }

    getLoginButton() {
        helpers.click(registerPage.getLoginButton())
    }

    getPatientTab() {
        helpers.click(registerPage.getPatientTab())
    }

    getFullName(fullName) {
        helpers.type(registerPage.getFullName(), fullName)
    }

    getGendr() {
        helpers.click(registerPage.getGender())
    }

    getDate(date) {
        helpers.select(registerPage.getDate(), date)
    }

    getMonth(month) {
        helpers.select(registerPage.getMonth(), month)
    }

    getYear(year) {
        helpers.select(registerPage.getYear(), year)
    }

    getNumber() {
        let mobileNumber = helpers.getNumber(10);
        helpers.type(registerPage.getMobileNumber(), mobileNumber)
    }

    getEmail() {
        let email = helpers.getMail()
        helpers.type(registerPage.getEmail(), email)
    }

    getPassword(password) {
        helpers.type(registerPage.getPassword(), password)
    }

    getre_enter(confirm_Password) {
        helpers.type(registerPage.getConfirmPassword(), confirm_Password)
    }

    getRegister() {
        helpers.click(registerPage.getRegister())
    }

    getMessage(message) {
        helpers.shouldBeVisible(registerPage.getMessage(), message)
    }

    getInavlidEmail(email) {
        helpers.type(registerPage.getInvaidEmail(), email)
    }

    getErrorMessage() {
        helpers.shouldBeVisible(registerPage.getErrorField())
    }

    getErrorPassword(Message) {
        helpers.shouldBeVisible(registerPage.getErrorPassword(), Message)
    }

    getErrorField() {
        helpers.shouldBeVisible(registerPage.getErrorField())
    }
    getNumb(Message) {
        helpers.type(registerPage.getErrorNum(), Message)
    }
    getMessage() {
        helpers.shouldBeVisible(registerPage.getMessage)
    }
}
export default PatientSignUpObject;