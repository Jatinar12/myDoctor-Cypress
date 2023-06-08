
const tab = 'div .MuiTab-wrapper:eq(2)'

class DoctorSignup {

  getTab() {
    return cy.get(tab)
  }
}
export default DoctorSignup;