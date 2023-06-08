import Helpers from "cypress/helpers/genericHelpers";
import Specialities from "@pages/Specialities";

const Specialist = new Specialities;
const helpers = new Helpers()

class specialitiesObject {
    getspecialities() {
        helpers.click(Specialist.getSpecialities())
    }

    getCard() {
        helpers.shouldBeVisible(Specialist.getCard())
    }
    getAllCards() {
        helpers.click(Specialist.getAllCards())
    }
    getHeading() {
        helpers.shouldBeVisible(Specialist.getHeading())
    }
    getDoctorCard() {
        helpers.click(Specialist.getDoctorCard())
    }
    getDoctorInfo() {
        helpers.shouldBeVisible(Specialist.getDoctorInfo())
    }
    getDateTab() {
        helpers.shouldBeVisible(Specialist.getDate())
    }
    getSlots() {
        helpers.shouldBeVisible(Specialist.getSlots())
    }
    getSlotClick() {
        helpers.click(Specialist.getSlots())
    }
    getSignIn() {
        helpers.shouldBeVisible(Specialist.getSignIn())
    }
    getSpeciality() {
        helpers.click(Specialist.getSpeciality())
    }
    getSpecialitys() {
        helpers.shouldBeVisible(Specialist.getSpecialitys())
    }
    getQualification() {
        helpers.click(Specialist.getQualification())
    }
    getExperience() {
        helpers.click(Specialist.getExperience())
    }
    getReview() {
        helpers.click(Specialist.getReview())
    }
    getFields() {
        helpers.shouldBeVisible(Specialist.getFields())
    }
    getRating() {
        helpers.click(Specialist.getRating())
    }
    getReviews() {
        helpers.type(Specialist.getReviews(), 'Awesome')
    }
    getSubmit() {
        helpers.click(Specialist.getSubmit())
    }
    getSignInLink() {
        helpers.click(Specialist.getSignInLink())
    }
}
export default specialitiesObject;