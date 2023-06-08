import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";
import AppointmentObject from "cypress/PageObject/DoctorAppointmentObject";

const Appointment = new AppointmentObject;

Given('User logs in with {string} credentails', (Role) => {
    Appointment.visit(Role)
})

When('User click on the {string}', (PageType) => {
    Appointment.clickAppointment(PageType)
})

Then('corresponding page appears with {string}', (Item) => {
    Appointment.appointmentField(Item)
})

Then('Cancel button should be visible to user', () => {
    Appointment.cancelButton()
})

When('User clicks on Appointment filter field', () => {
    Appointment.appointmentFilter()
})
When('User clicks on Number', () => {
    Appointment.fieldNumber()
})
Then('User can view all list of appointment', () => {
    Appointment.appointmentList()
})
When('User clicks on {string} "pagination page"', (page) => {
    Appointment.pagination(page)
})
Then('User is on {string} "pagination page"', (Value) => {
    Appointment.PaginationPage(Value)
})