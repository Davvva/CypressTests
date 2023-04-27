import { lesson3 } from "../pages/Lesson3";
import { LESSON3 } from "../utils/Lesson3";

describe('Proverka vkladok saita', () => {
it("Proverka vkladok saita polzovatelem", () => {
   lesson3.visit();
   lesson3.getFogot().click();   
   lesson3.getFirstname().type(LESSON3.firstname);
   lesson3.getLastname().type(LESSON3.lastname);
   lesson3.getAdress().type(LESSON3.adress);
   lesson3.getCity().type(LESSON3.city);
   lesson3.getState().type(LESSON3.state);
   lesson3.getZipcode().type(LESSON3.zipcode);
   lesson3.getSSN().type(LESSON3.ssn);
   lesson3.getFindlogin().click();
   lesson3.getHome().click();
   lesson3.getHomefoto().should(LESSON3.bevisible);
   lesson3.getLatestnews().should(LESSON3.bevisible);
   lesson3.getHomeup().should(LESSON3.bevisible);
   lesson3.getAboutusup().should(LESSON3.bevisible);
   lesson3.getContactup().should(LESSON3.bevisible);
   lesson3.getAboutus().click();
   lesson3.getServices().click();   
})
})