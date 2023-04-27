  import{signIn} from "../pages/SignIn"
  import {DATA} from "../utils/data"
  import {negative} from "../pages/Negative";
  import { data } from "../utils/data";


  describe('Registration', () => {
    it('Register on sait with correct data', () => {
      signIn.visit();
      signIn.getFirstname().type(DATA.firstname);
      signIn.getLastname().type(DATA.lastname);
      signIn.getAdress().type(DATA.adress);
      signIn.getCity().type(DATA.city);
      signIn.getState().type(DATA.state);
      signIn.getZipcode().type(DATA.zipcode);
      signIn.getNumber().type(DATA.number);
      signIn.getSSN().type(DATA.ssn);
      signIn.getUsername().type(DATA.username);
      signIn.getPassword().type(DATA.password);
      signIn.getConfirm().type(DATA.confirm);
      signIn.getREGISTER().click();

      it('Register on site with incorrect data', () => {
        signIn.visit();
        signIn.getFirstname().type(data.firstname);
        signIn.getLastname().type(data.lastname);
        signIn.getAdress().type(data.adress);
        signIn.getCity().type(data.city);
        signIn.getState().type(data.state);
        signIn.getZipcode().type(data.zipcode);
        signIn.getNumber().type(data.number);
        signIn.getSSN().type(data.ssn);
        signIn.getUsername().type(data.username);
        signIn.getConfirm().type(data.confirm);
        signIn.getREGISTER().click();
  
      })
      
    })})