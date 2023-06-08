const Appointment =" .MuiListItemText-root > .MuiTypography-root:eq(2)"
const appointmentField = '.MuiTypography-root:eq(8)'
const cancelButton = '.MuiButton-label'
const appointmentFilter = '#per-page-options'
const fieldDisplay = '[data-value="5"]'
const appointmentList = '.MuiTypography-root:last()'
const pagination = '.MuiButtonBase-root:eq(8)'

class doctorAppointment {
    clickAppointment() {
        return cy.get(Appointment)
    }

    appointmentField() {
        return cy.get(appointmentField)
    }
    cancelButton() {
        return cy.get(cancelButton)
    }
    appointmentFilter() {
        return cy.get(appointmentFilter)
    }
    fieldNumber() {
        return cy.get(fieldDisplay)
    }
    appointmentList() {
        return cy.get(appointmentList)
    }
    pagination() {
        return cy.get(pagination)
    }
    PaginationPage() {
        return cy.get(pagination)
    }
}
export default doctorAppointment;