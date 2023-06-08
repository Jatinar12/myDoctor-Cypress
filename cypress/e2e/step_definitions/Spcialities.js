import { Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";
import specialitiesObject from "cypress/PageObject/Specialities";

const doctorSpecification = new specialitiesObject;

When('User clicks on Specialities tab', () => {
    doctorSpecification.getspecialities()
})

Then('User should navigate to all specialist page', () => {
    doctorSpecification.getHeading()  //specaloty
})

When('User clicks on {string} card', (Specialities) => {
    doctorSpecification.getAllCards()
})

Then('corresponding doctors should be visible to the user', () => {
    doctorSpecification.getHeading()
})

When('User clicks on doctor card', () => {
    doctorSpecification.getDoctorCard()
})
Then('corresponding page appears with doctor specifications', () => {
    doctorSpecification.getDoctorInfo()
})

Then('User is on doctor specification page', () => {
    doctorSpecification.getDoctorInfo()
})

When('User selects the date tab', () => {
    doctorSpecification.getDateTab()
})

Then('corresponding available slots should display', () => {
    doctorSpecification.getSlots()
})

When('User clicks on available slots', () => {
    doctorSpecification.getSlotClick()
})

Then('User should able to Register', () => {
    doctorSpecification.getSignIn()
})

When('User clicks on {string}', (Element) => {
    doctorSpecification.getSpeciality(Element)
})

Then('doctor speciality should display', () => {
     doctorSpecification.getSpecialitys()
})

When('User clicks on Qualification', () => {
    doctorSpecification.getQualification()
})

Then('doctor qualification should display', () => {
    doctorSpecification.getSpecialitys()
})

When('User clicks on experience', () => {
    doctorSpecification.getExperience()
})

Then('doctor experience should display', () => {
    doctorSpecification.getSpecialitys()
})

When('User clicks on write a review', () => {
    doctorSpecification.getReview()
})

Then('Available fields shoud be display', () => {
    doctorSpecification.getFields()
})

When('User selects rating', () => {
    doctorSpecification.getRating()
})

When('User writes a review in review field', () => {
    doctorSpecification.getReviews()
})

When('User enters the submit button', () => {
    doctorSpecification.getSubmit()
})

Then('doctor specification page will be re-loaded', () => {
    doctorSpecification.getDoctorInfo()
})

Then('User should get {string}', (Message) => {
    doctorSpecification.getSignIn(Message)
})

When('User clicks on signIn link', () => {
    doctorSpecification.getSignInLink()
})