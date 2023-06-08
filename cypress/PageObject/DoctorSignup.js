import Helpers from "cypress/helpers/genericHelpers";
import DoctorSignup from "@pages/DoctorPage";

const doctorPage = new DoctorSignup;
const helpers = new Helpers;

class DoctorSignupObject {

    getDoctorTab() {
        helpers.click(doctorPage.getTab())
    }
}
export default DoctorSignupObject;
