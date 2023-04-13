import { lesson3 } from "../pages/Lesson3";
import { LESSON3 } from "../utils/Lesson3";

describe('Proverka vkladok saita', () => {
it("Proverka vkladok saita polzovatelem", () => {
   lesson3.visit();
   lesson3.getForgotpassword().click();   
   lesson3.getFirstname().type(LESSON3.firstname);
   lesson3.getLastname().type(LESSON3.lastname);
   lesson3.getAdress().type(LESSON3.adress);
   lesson3.getCity().type(LESSON3.city);
   lesson3.getState().type(LESSON3.state);
   lesson3.getZipcode().type(LESSON3.zipcode);
   lesson3.getSSN().type(LESSON3.ssn);
   lesson3.getFindlogin().click();
   lesson3.getClickhome().click();
   lesson3.getServicesfoto().should(LESSON3.servisecfoto);
   lesson3.getLatestnewsfoto().should(LESSON3.latestnewsfoto);
   lesson3.getClickaboutus().click();
   lesson3.getClickservices().click();
   lesson3.getClickproducts().click();
})

})