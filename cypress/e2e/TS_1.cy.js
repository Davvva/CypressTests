import{signIn} from "../pages/SignIn"
import {DATA} from "../utils/data"
import { negative } from "../pages/Negative";
import { EROR } from "../utils/eror";


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
    })
  }  )

  it('Register on site with incorrect dara', () =>{
  crypto.getRandomValue();
  })

  it('Register on sait with incorrect data', () => {
    negative.visit();
    negative.getFirstname().type(EROR.firstname);
    negative.getLastname().type(EROR.lastname);
    negative.getAdress().type(EROR.adress);
    negative.getCity().type(EROR.city);
    negative.getState().type(EROR.state);
    negative.getZipcode().type(EROR.zipcode);
    negative.getNumber().type(EROR.number);
    negative.getSSN().type(EROR.ssn);
    negative.getUsername().type(EROR.username);
    negative.getPassword().type(EROR.password);
    negative.getConfirm().type(EROR.confirm);
    negative.getREGISTER().click();
    })
 
  
  