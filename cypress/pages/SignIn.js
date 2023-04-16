class SignIn {

    visit(){

        return  cy.visit('https://parabank.parasoft.com/parabank/register.htm');
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
    getNumber(){
        return  cy.get('.input').eq(8);
    }
    getSSN(){
        return cy.get('.input').eq(9);
    }
    getUsername(){
        return cy.get('.input').eq(10);
    }
    getPassword(){
        return  cy.get('.input').eq(11);
    }
    getConfirm(){
        return  cy.get('.input').eq(12);
    }
    getREGISTER(){
        return  cy.get('[colspan="2"] > .button');
    }
   
    }



export const signIn=new SignIn();