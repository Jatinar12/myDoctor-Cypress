import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";
import DashBoardObject from "cypress/PageObject/DashBoard";

const dashBoard = new DashBoardObject;

Given('User navigate to {string} page', (PageType) => {
    dashBoard.visit(PageType)
})
When('User enters the {string} in service search field', (service) => {
    dashBoard.getService(service)
})

When('User clicks on Specialities card', (Card) => {
    dashBoard.getCard(Card)
})

Then('corresponding page appears with expected {string} doctors', (Item) => {
    dashBoard.getSpecialistCard(Item)
})
When('User clicks on search logo', () => {
    dashBoard.searchlogo()
})
Then('Doctors matching the search should display', () => {
})
When('User enters the doctor name in doctor search field', () => {
    dashBoard.getDoctorField()
})
Then('Doctor matching the search should display', () => {
    dashBoard.getDoctorCard()
})
When('User clicks on view all specialities', () => {
    dashBoard.getButton()
})
Then('corresponding page appears with expected {string}', (Item) => {
    dashBoard.getSpecialist(Item)
})
Given('corresponding page appears with the expected {string}', (element) => {
    let name = element.toString();
    let doctorName = name.split(",")

    for (let count = 0; count < doctorName.length; count++) {
    
        cy.xpath(`//*[text()="${doctorName[count]}"] `);
    }
})
When('User clicks on pagination button', () => {
    dashBoard.navigate()
})
Then('User is on {string} pagination page', (Value) => {
    dashBoard.visible()
})
