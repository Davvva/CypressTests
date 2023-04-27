class Lesson3 {

    visit(){

        return  cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    }
    getFogot(){
        return cy.get('#loginPanel > :nth-child(2) > a');
    }
    getFirstname(){
       return cy.get('.input').eq(2);
    }
    getLastname(){
        return cy.get('.input').eq(3);
    }
    getAdress(){
        return cy.get('.input').eq(4);
    }
    getCity(){
        return cy.get('.input').eq(5);
    }   
    getState(){
        return  cy.get('.input').eq(6);
    }
    getZipcode(){
        return  cy.get('.input').eq(7);
    }
    getSSN(){
        return cy.get('.input').eq(8);
    }
    getFindlogin(){
        return cy.get('[colspan="2"] > .button');
    }
    getHome(){
        return cy.get('#footerPanel > :nth-child(1) > :nth-child(1) > a');
    }
    getAboutus(){
        return cy.get('#footerPanel > :nth-child(1) > :nth-child(2) > a');
    }
    getServices(){
        return cy.get('#footerPanel > :nth-child(1) > :nth-child(3) > a');
    }
    getProducts(){
        return cy.get('#footerPanel > :nth-child(1) > :nth-child(4) > a');
    }
    getHomefoto(){
        return cy.get('span.services');
    }
    getLatestnews(){
        return cy.get('h4');
    }
    getHomeup(){
        return cy.get(".home > a");
    }
    getAboutusup() {
        return cy.get('.aboutus > a');
    }
    getContactup(){
        return cy.get('.contact > a');
    }
}
    



export const lesson3=new Lesson3();