const specialitiesButton = ' .MuiList-root .MuiLink-root .MuiButtonBase-root:eq(1)'
const allCards = '.MuiTypography-root:eq(15)'
const heading = '.MuiTypography-h6'
const doctorCard = '.MuiCardContent-root:eq(0)'
const doctorInfo = '.MuiGrid-container .MuiPaper-root:eq(0)'
const date = '.MuiTabs-root'
const slots = '.MuiChip-label'
const signInMessage = 'div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6 div:contains("Please")'
const speciality = ' .MuiAccordionSummary-content .MuiTypography-root:eq(0)'
const qualification = '.MuiAccordionSummary-content .MuiTypography-root:eq(1)'
const experience = '.MuiAccordionSummary-content .MuiTypography-root:eq(2)'
const review = '.MuiAccordionSummary-content .MuiTypography-root:eq(5)'
const doctorSpecialitys = '.MuiAccordionDetails-root .MuiTypography-root'
const fields = '.MuiTypography-root:eq(20)'
const rating = 'div .MuiRating-root .MuiRating-label:eq(2)'
const writeReview = 'div [name="review"]'
const submit = '#button'
const link = 'div [style="color: red;"] [href="/auth/login"]'


class Specialities {
    getSpecialities() {
        return cy.get(specialitiesButton)
    }

    getAllCards() {
        return cy.get(allCards)
    }
    getHeading() {
        return cy.get(heading)
    }
    getDoctorCard() {
        return cy.get(doctorCard)
    }
    getDoctorInfo() {
        return cy.get(doctorInfo)
    }
    getDate() {
        return cy.get(date)
    }
    getSlots() {
        return cy.get(slots)
    }
    getSignIn() {
        return cy.get(signInMessage)
    }
    getSpeciality() {
        return cy.get(speciality)
    }
    getSpecialitys() {
        return cy.get(doctorSpecialitys)
    }
    getQualification() {
        return cy.get(qualification)
    }
    getExperience() {
        return cy.get(experience)
    }
    getReview() {
        return cy.get(review)
    }
    getFields() {
        return cy.get(fields)
    }
    getRating() {
        return cy.get(rating)
    }
    getReviews() {
        return cy.get(writeReview)
    }
    getSubmit() {
        return cy.get(submit)
    }
    getSignInLink() {
        return cy.get(link)
    }
}
export default Specialities;

