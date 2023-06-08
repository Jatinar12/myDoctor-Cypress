import Helpers from "cypress/helpers/genericHelpers";
import doctorAppointment from "@pages/Appointment";

const doctor = new doctorAppointment
const helpers = new Helpers;

class AppointmentObject {
    visit(){
        cy.Login()
    }
    clickAppointment() {
        helpers.click(doctor.clickAppointment())
    }
    appointmentField() {
        helpers.shouldBeVisible(doctor.appointmentField())
    }
    cancelButton() {
        helpers.shouldBeVisible(doctor.cancelButton())
    }
    appointmentFilter() {
        helpers.click(doctor.appointmentFilter())
    }
    fieldNumber() {
        helpers.click(doctor.fieldNumber())
    }
    appointmentList() {
        helpers.shouldBeVisible(doctor.appointmentList())
    }
    pagination() {
        helpers.click(doctor.pagination())
    }
    PaginationPage() {
        helpers.shouldBeVisible(doctor.PaginationPage())
    }
}
export default AppointmentObject;