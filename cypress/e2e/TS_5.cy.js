describe("Homepage and Icons", () => {
    it("Loads the homepage and checks for icons", () => {
      cy.visit(Cypress.env('globalUrl'));
      cy.get(".shop-menu").click;
      cy.url().should('include','/')
      })
    });
  it("Loads the Products and check for icons", () => {
    cy.visit(Cypress.env('globalUrl')+'products');
    cy.get(".shop-menu > .nav > :nth-child(2)").click;
    cy.url().should('include','products')
    cy.get('.logo').find('img').should('have.attr', 'src').should('include','/static/images/home/logo.png')
  });
  it("Loads the Cart", () => {
    cy.visit("https://automationexercise.com");
    cy.get(".shop-menu > .nav > :nth-child(3) > a").click;
  });
  it('Load the Test Cases', () =>{
  cy.visit('https://automationexercise.com');
  cy.get(':nth-child(5) > a').click;
  })
  it('Load Contact us click', () =>{
     cy.visit('https://automationexercise.com');
     cy.get('.shop-menu > .nav > :nth-child(8) > a').click;
  })