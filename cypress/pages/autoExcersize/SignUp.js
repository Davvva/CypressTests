class SignUp {
  visit(endpoint) {
    cy.visit(Cypress.env('globalUrl')+endpoint);
  }

 getUsername() {
    return cy.get('[data-qa="signup-name"]');
  }

  getPassword() {
    return cy.get('[data-qa="signup-email"]');
  }

  submit() {
    return cy.get('[data-qa="signup-button"]');
  }
  
  generateRandomName(length,email=''){
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return `test${result}${email}`;

  }
  ClickMr(){
    return cy.get ('#id_gender1');
}
Password(){
  return cy.get ('[data-qa="password"]');
}
Bithday(){
  return cy.get ('#days');
}
Bithmonth(){
  return cy.get ('#months');
}
Bithyear(){
  return cy.get ('#years');
}
Newslater() {
  return cy.get ('#newsletter');
}
Recieve(){
  return cy.get  ('#optin');
}
Partners() {
  return cy.get (':nth-child(8) > label');
}
Firstname(){
  return cy.get ('[data-qa="first_name"]');
}
Lastname(){
  return cy.get ('[data-qa="last_name"]');
}
Company(){
  return cy.get ('[data-qa="company"]');
}
Adress(){
  return cy.get ('[data-qa="address"]');
}
Country(){
  return cy.get ('[data-qa="country"]');
}
State(){
  return cy.get ('[data-qa="state"]');
}
City(){
  return cy.get ('[data-qa="city"]');
}
Zipcode(){
  return cy.get ('[data-qa="zipcode"]');
}
Mobilenumber(){
  return cy.get ('[data-qa="mobile_number"]');
}
Createaccount(){
  return cy.get ('[data-qa="create-account"]');
}
ClickMsr(){
  return cy.get ('#id_gender2');
}
}

export const registration = new SignUp();
