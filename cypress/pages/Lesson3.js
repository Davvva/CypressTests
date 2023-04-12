class Lesson3 {

    visit(){

        return  cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    }
    getFogotpassword(){
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



export const lesson3=new Lesson3();