import { registration } from "../pages/autoExcersize/SignUp";

describe("Carusel", () => {
  it("Loads the homepage and checks for icons", () => {
    cy.visit(Cypress.env("globalUrl"));
    cy.get(".item").then(($elem) => {
      expect($elem).to.contain('Automation')
      expect($elem).to.contain('Full-Fledged practice website for Automation Engineers')
      expect($elem).to.contain('All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.')
    });
    cy.get('.active > :nth-child(1) > .test_cases_list > .btn').should('be.visible').and('contain','Test Cases');
    cy.get('.active > :nth-child(1) > .test_cases_list > .btn').should('have.css','background-color','rgb(92, 184, 92)');
    // cy.get('.active > :nth-child(1) > .test_cases_list > .btn').trigger('mouseover').then(($elem)=>{
    //     cy.wait(3000);
    //   expect($elem).to.have.css('background-color','rgb(254, 152, 15)');
    // })
     cy.get('.active > :nth-child(1) > .test_cases_list > .btn').trigger('mouseover')
     cy.wait(1000);
     registration.Testcasesbtn().should('have.css','background-color','rgb(92, 184, 92)');
     registration.Testcasesbtn().realHover().should('have.css','background-color', 'rgb(254, 152, 15)');
     cy.wait(1000)
     cy.get(".item").should('have.class','active');
  });
  it('Buy clothes on site without login', () =>{
    cy.visit(Cypress.env('globalUrl'));
    registration.Caruselgirlfoto().should('be.visible');
    registration.BuyRS500().click();
    registration.Continuebuyclick().click();
    registration.BuyRS400().click();
    registration.CLickreturncart().click();
    registration.Imagecarthead().should('contain', "Item");
    registration.Descriptioncarthead().should('contain', 'Description');
    registration.Pricecarthead().should('contain', 'Price');
    registration.Quantitycarthead().should('contain', 'Quantity');
    registration.Totalcarthead().should('contain', 'Total');
    registration.Itemincartwomanfoto().should('be.visible');
    registration.Descriptionvalueincart().should('contain', 'Blue Top');
    registration.Pricevalueincart().should('contain', 'Rs. 500');
    registration.Quantityvalueincart().should('contain', '1');
    registration.Totalvalueincart().should('contain', 'Rs. 500');
    registration.Deleateclothesincart().click();
    registration.Procesedtocheckoutbtn().click();
    registration.Checkoutheadername().should('contain', 'Checkout'); 
    registration.Loginorregistrationforcontinue().should('contain', 'Register / Login account to proceed on checkout.');


    

    
});
});