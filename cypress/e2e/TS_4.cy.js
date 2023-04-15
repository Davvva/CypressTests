import { registration } from "../pages/autoExercise/SignUp";

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
      expect($val).to.include(userName)
    })
  });
});