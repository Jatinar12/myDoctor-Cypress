const { doesFeatureMatch } = require("@badeball/cypress-cucumber-preprocessor")

const loginButton = 'div a button'
const tab = 'div .MuiTab-wrapper:eq(1)'
const fullName = 'div #full_name'
const gender = 'div .MuiTypography-root:eq(2)'
const date = 'div #dropdown-day select'
const month = 'div #dropdown-month select'
const year = 'div #dropdown-year select'
const mobileNumber = '#mobile_number'
const email = 'div #email_address'
const password = 'div #password'
const confirmPassword = 'div #confirm_password'
const register = 'div .MuiButtonBase-root .MuiButton-label:eq(1)'
const message = 'div .MuiAlert-message'
const error = "span small"
const errorMessage = "div p"  //


class PatientSignup {
    visit() {
        return cy.visit('/')
    }

    getLoginButton() {
        return cy.get(loginButton)
    }

    getPatientTab() {
        return cy.get(tab)
    }

    getFullName() {
        return cy.get(fullName)
    }

    getGender() {
        return cy.get(gender)
    }

    getDate() {
        return cy.get(date)
    }

    getMonth() {
        return cy.get(month)
    }

    getYear() {
        return cy.get(year)
    }

    getMobileNumber() {
        return cy.get(mobileNumber)
    }

    getEmail() {
        return cy.get(email)
    }

    getPassword() {
        return cy.get(password)
    }

    getConfirmPassword() {
        return cy.get(confirmPassword)
    }

    getRegister() {
        return cy.get(register)
    }

    getMessage() {
        return cy.get(message)
    }
    // ----------------------------------------
    getInvaidEmail() {
        return cy.get(email)
    }

    getErrormMssg() {
        return cy.get(errorMessage)
    }

    getErrorPassword() {
        return cy.get(error)
    }

    getErrorNum() {
        return cy.get(mobileNumber)
    }

    getErrorField() {
        return cy.get(errorMessage)
    }
   
    getRepeatNumber() {
        return cy.get(errorMessage)
    }
}
export default PatientSignup;