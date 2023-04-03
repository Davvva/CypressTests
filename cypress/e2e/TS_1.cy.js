describe('SignIn', () => {
  it('Verify login functionally with valid credentials', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standart_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  })
  it.only('passes', () =>{
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('header > a > img').should('be.exist');
  })
})