import Helpers from "cypress/helpers/genericHelpers";
import DashBoard from "@pages/DashBoardPage";

const dashBoard = new DashBoard;
const helpers = new Helpers;

class DashBoardObject {
    visit() {
        cy.get(dashBoard.getVisit())
    }
    getService() {
        helpers.type(dashBoard.getService(), 'Clinical Nutrition & Dietetics')
        helpers.type(dashBoard.getService(), '{downarrow}')
        helpers.type(dashBoard.getService(), '{enter}')
    }
    searchlogo() {
        helpers.click(dashBoard.getLogo())
    }
    getSpecialistCard() {
        helpers.click(dashBoard.getSpecialitiesCard())
    }
    getDoctor() {
        helpers.shouldBeVisible(dashBoard.getDoctor())
    }
    getDoctorField() {
        helpers.type(dashBoard.getDoctor(), 'Dr. Dusty Huel', '{downarrow}', '{enter}')
    }
    getDoctorCard() {
        helpers.click(dashBoard.getDoctorCard())
    }
    getSpecialist() {
        helpers.shouldBeVisible(dashBoard.getCard())
    }
    getButton() {
        helpers.click(dashBoard.getSpecialitiesButton())
    }
    getDoctorAll() {
        helpers.shouldBeVisible(dashBoard.getDoctorAll())
    }
    getDoctorInfo() {
        helpers.shouldBeVisible(dashBoard.getDoctorInfo())
    }
    visible() {
        helpers.shouldBeVisible(dashBoard.getFlutterCheck())
    }
    navigate() {
        helpers.click(dashBoard.getFlutter())
    }
    visible() {
        helpers.shouldBeVisible(dashBoard.getHeading())
    }
    getCard(Card) {
        helpers.getText(dashBoard.getCard(Card))
    }
}
export default DashBoardObject;
