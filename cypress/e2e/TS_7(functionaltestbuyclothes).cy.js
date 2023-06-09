import { buyclothes } from "../pages/autoExcersize/Shopingtestcheck.cy";
import {registration}from "../pages/autoExcersize/SignUp";
import { EXAMPLE } from "../utils/data";
describe("Shoping", () => {
    it("Check Testcasesbtn and Api list for practise btn", () => {
        cy.visit(Cypress.env("globalUrl"));
buyclothes.Testcasesbtn().should('have.css','background-color','rgb(92, 184, 92)');
buyclothes.Testcasesbtn().realHover().should('have.css','background-color', 'rgb(254, 152, 15)');
buyclothes.Apilistforpractise().should('have.css','background-color','rgb(92, 184, 92)');
buyclothes.Apilistforpractise().realHover().should('have.css','background-color', 'rgb(254, 152, 15)');
    });
    it('Buy Whithout log in', ()=>{
        cy.visit(Cypress.env('globalUrl'));
        buyclothes.Caruselgirlfoto().should('be.visible');
        buyclothes.BuyRS500().click();
        buyclothes.Continuebuyclick().click();
        buyclothes.BuyRS400().click();
        buyclothes.CLickreturncart().click();
        buyclothes.Imagecarthead().should('contain', "Item");
        buyclothes.Descriptioncarthead().should('contain', 'Description');
        buyclothes.Pricecarthead().should('contain', 'Price');
        buyclothes.Quantitycarthead().should('contain', 'Quantity');
        buyclothes.Totalcarthead().should('contain', 'Total');
        buyclothes.Itemincartwomanfoto().should('be.visible');
        buyclothes.Descriptionvalueincart().should('contain', 'Blue Top');
        buyclothes.Pricevalueincart().should('contain', 'Rs. 500');
        buyclothes.Quantityvalueincart().should('contain', '1');
        buyclothes.Totalvalueincart().should('contain', 'Rs. 500');
        buyclothes.Deleateclothesincart().click();
        buyclothes.Procesedtocheckoutbtn().click();
        buyclothes.Checkoutheadername().should('contain', 'Checkout'); 
        buyclothes.Loginorregistrationforcontinue().should('contain', 'Register / Login account to proceed on checkout.');
        buyclothes.Loginregistrationbtn().click();
    });
    it('Signin on random date', ()=>{
    cy.visit(Cypress.env("globalUrl"));
    buyclothes.Loginhedearclick().click();
    buyclothes.loginyouraccountemail().type(registration.generateRandomName(7,'@gmail.com'));
    buyclothes.Loginyouraccountpassword().type(registration.generateRandomName(10,''));
    buyclothes.Loginbtnclick().click();
});
it('Registration new user', ()=>{
    cy.visit(Cypress.env("globalUrl"));
    buyclothes.Loginhedearclick().click();
    buyclothes.getSignupNewuserName().type(registration.generateRandomName(6,''));
    buyclothes.getSignupNewPassword().type(registration.generateRandomName(7,'@gmail.com'));
    buyclothes.getSignupLoginbutclick().click();
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
   buyclothes.getEndregistrationclickcontinue().click();
});
it('Buy clothes with login on site and chrck info for buy ', ()=>{
   cy.visit(Cypress.env('globalUrl'));
   buyclothes.Loginhedearclick().click();
   buyclothes.getSignupNewuserName().type(registration.generateRandomName(6,''));
   buyclothes.getSignupNewPassword().type(registration.generateRandomName(7,'@gmail.com'));
   buyclothes.getSignupLoginbutclick().click();
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
   buyclothes.getEndregistrationclickcontinue().click();
    buyclothes.Caruselgirlfoto().should('be.visible');
    buyclothes.BuyRS500().click();
    buyclothes.Continuebuyclick().click();
    buyclothes.BuyRS400().click();
    buyclothes.CLickreturncart().click();
    buyclothes.Imagecarthead().should('contain', "Item");
    buyclothes.Descriptioncarthead().should('contain', 'Description');
    buyclothes.Pricecarthead().should('contain', 'Price');
    buyclothes.Quantitycarthead().should('contain', 'Quantity');
    buyclothes.Totalcarthead().should('contain', 'Total');
    buyclothes.Itemincartwomanfoto().should('be.visible');
    buyclothes.Descriptionvalueincart().should('contain', 'Blue Top');
    buyclothes.Pricevalueincart().should('contain', 'Rs. 500');
    buyclothes.Quantityvalueincart().should('contain', '1');
    buyclothes.Totalvalueincart().should('contain', 'Rs. 500');
    buyclothes.Deleateclothesincart().click();
    buyclothes.Procesedtocheckoutbtn().click();
    buyclothes.getAddcoment().type(EXAMPLE.comment);
    buyclothes.getPlaceorderbtnclick().click();
    buyclothes.Creditcardname().type(EXAMPLE.cardname);
    buyclothes.getCardnumber().type(EXAMPLE.cardnumber);
    buyclothes.getCardcvc().type(EXAMPLE.cardcvc);
    buyclothes.getCardmonth().type(EXAMPLE.cardmonth);
    buyclothes.getCardyear().type(EXAMPLE.cardyear);
    buyclothes.getPaybutton().click();
    buyclothes.getClickcontinuebackhomepage().click();
});
});
