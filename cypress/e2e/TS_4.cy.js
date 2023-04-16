import { registration } from "../pages/autoExcersize/SignUp";
import { DATA, EXAMPLE, data } from "../utils/data";
let userName,secondUserName
describe("SignIn", () => {
  beforeEach(() => {});
  it("Verify login functionality with valid credentials", () => {
    registration.visit("login");
    registration.getUsername().type(registration.generateRandomName(5, ""));
    registration
      .getUsername()
      .invoke("val")
      .then((val) => {
        userName = val;
        cy.log(userName);
      });
    registration
      .getPassword()
      .type(registration.generateRandomName(5, "@gmail.com"));
    registration.submit().click();
    cy.get('[data-qa="name"]')
      .invoke("val")
      .then((text) => {
        secondUserName=text;
        cy.log(secondUserName);
      });
    cy.get('[data-qa="name"]').then(($val)=>{
      expect(secondUserName).to.include(userName)
    })
    it('Registration on site Mr');
   registration.ClickMr().click();
   registration.Password().type(EXAMPLE.Password);
   registration.Bithday().select('13').should('have.value', '13');
   registration.Bithmonth().select('2').should('have.value', '2');
   registration.Bithyear().select('1998').should('have.value', '1998');
   registration.Newslater().click();
   registration.Recieve().click();
   registration.Firstname().type(registration.generateRandomName(7,''));
   registration.Lastname().type(registration.generateRandomName(8,''));
   registration.Company().type(registration.generateRandomName(7,''));
   registration.Adress().type(registration.generateRandomName(10,''));
   registration.Country().select('United States').should('have.value', 'United States');
   registration.State().type(registration.generateRandomName(6,''));
   registration.City().type(registration.generateRandomName(8,''));
   registration.Zipcode().type(registration.generateRandomName(5,''));
   registration.Mobilenumber().type(registration.generateRandomName(10, ''));
   registration.Createaccount().click();
  });
  it("Verify login functionality with valid credentials", () => {
    registration.visit("login");
    registration.getUsername().type(registration.generateRandomName(5, ""));
    registration
      .getUsername()
      .invoke("val")
      .then((val) => {
        userName = val;
        cy.log(userName);
      });
    registration
      .getPassword()
      .type(registration.generateRandomName(5, "@gmail.com"));
    registration.submit().click();
    cy.get('[data-qa="name"]')
      .invoke("val")
      .then((text) => {
        secondUserName=text;
        cy.log(secondUserName);
      });
    cy.get('[data-qa="name"]').then(($val)=>{
      expect(secondUserName).to.include(userName)
    })
    it('Registration on site Msr');
   registration.ClickMsr().click();
   registration.Password().type(EXAMPLE.Password);
   registration.Bithday().select('13').should('have.value', '13');
   registration.Bithmonth().select('2').should('have.value', '2');
   registration.Bithyear().select('1998').should('have.value', '1998');
   registration.Newslater().click();
   registration.Recieve().click();
   registration.Firstname().type(registration.generateRandomName(7,''));
   registration.Lastname().type(registration.generateRandomName(8,''));
   registration.Company().type(registration.generateRandomName(7,''));
   registration.Adress().type(registration.generateRandomName(10,''));
   registration.Country().select('United States').should('have.value', 'United States');
   registration.State().type(registration.generateRandomName(6,''));
   registration.City().type(registration.generateRandomName(8,''));
   registration.Zipcode().type(registration.generateRandomName(5,''));
   registration.Mobilenumber().type(registration.generateRandomName(10, ''));
   registration.Createaccount().click();
})
})

