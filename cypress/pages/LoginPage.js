const loginButton = 'div a button'
const emailField = 'div #emailOrMobile'
const passwordField = 'div #password'
const submitButton = 'div .MuiButtonBase-root:eq(5)'
const errorMessage = 'div #login .MuiPaper-root'

class LoginPage {
  visit() {
    return cy.visit('/')
  }
  getLoginButton() {
    return cy.get(loginButton)
  }
  getEmail() {
    return cy.get(emailField)
  }
  getPassword() {
    return cy.get(passwordField)
  }
  getSubmitButton() {
    return cy.get(submitButton)
  }
  getErrorMessage() {
    return cy.get(errorMessage)
  }
}
export default LoginPage;