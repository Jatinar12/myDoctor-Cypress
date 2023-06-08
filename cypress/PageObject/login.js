import Helpers from "cypress/helpers/genericHelpers";
import loginPage from "@pages/LoginPage";


const login = new loginPage();
const helpers = new Helpers();

class loginPageObject {
    visit() {
        cy.get(login.visit())
    }
    getLoginButton() {
        helpers.click(login.getLoginButton())
    }
    getEmail(email) {
        cy.fixture('example').then((userdata) => {
            helpers.type(login.getEmail(), (atob(userdata[email])))
        })
    }
    getPassword(password) {
        cy.fixture('example').then((userdata) => {
            helpers.type(login.getPassword(), (atob(userdata[password])))
        })
    }
    getSubmitButton() {
        helpers.click(login.getSubmitButton())
    }
    errorMessage() {
        helpers.shouldBeVisible(login.getErrorMessage())
    }
}
export default loginPageObject;
