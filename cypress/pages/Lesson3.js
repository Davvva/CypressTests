class Lesson3 {

    visit(){

        return  cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    }
    getForgotpassword(){
        return ('#loginPanel > :nth-child(2) > a');
    }
    getFirstname(){
       return cy.get('.input').eq(2);
    }
    getLastname(){
        return cy.get('.input').eq(3);
    }
    getAdress(){
        return y.get('.input').eq(4);
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
    getClickhome(){
        return   cy.get('#footerPanel > :nth-child(1) > :nth-child(1) > a');
    }
    getClickaboutus(){
        return  cy.get('#footerPanel > :nth-child(1) > :nth-child(2) > a');
    }
    getClickservices(){
        return  cy.get('#footerPanel > :nth-child(1) > :nth-child(3) > a');
    }
    getClickproducts(){
        return  cy.get('#footerPanel > :nth-child(1) > :nth-child(4) > a');
    }
    getServicesfoto(){
        return  cy.get('services').find('img').should('have.attr', 'src');
    }
    getLatestnewsfoto(){
        return  cy.get('#footermainPanel').find('img').should('have.attr', 'src');
    }
    }



export const lesson3=new Lesson3();