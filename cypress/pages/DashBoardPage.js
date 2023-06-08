const serviceField = 'div .MuiInputBase-input:eq(0)'
const doctorField = 'div .MuiInputBase-input:eq(1)'
const logo = "div .MuiPaper-root .MuiButtonBase-root:eq(0)"
const specialistCard = 'div .MuiGrid-container .MuiPaper-root:eq(0)'
const specialistButton = 'div #specialities div a:eq(8)'
const doctorCard = 'div .MuiCardContent-root:eq(0)'
const doctorAll = 'div .MuiCardContent-root'
const doctorInfo = '.MuiCardHeader-title'
const flutter = '.MuiPagination-ul .MuiButtonBase-root'
const flutterCheck = '.MuiPagination-ul .MuiButtonBase-root:eq(2)'
const heading = 'div #specialities .jss1'
const specialist = '.MuiTypography-root:eq(9)'

class DashBoard {
    getVisit() {
        return cy.visit('/')
    }
    getService() {
        return cy.get(serviceField)
    }
    getDoctor() {
        return cy.get(doctorField)
    }
    getLogo() {
        return cy.get(logo)
    }
    getCard() {
        return cy.get(specialistCard)
    }
    getSpecialitiesButton() {
        return cy.get(specialistButton)
    }
    getDoctorCard() {
        return cy.get(doctorCard)
    }
    getFlutterCheck() {
        return cy.get(flutter)
    }
    getFlutter() {
        return cy.get(flutterCheck)
    }
    getDoctorAll() {
        return cy.get(doctorAll)
    }
    getDoctorInfo() {
        return cy.get(doctorInfo)
    }
    getHeading() {
        return cy.get(heading)
    }
    getSpecialitiesCard() {
        return cy.get(specialist)
    }
}
export default DashBoard;