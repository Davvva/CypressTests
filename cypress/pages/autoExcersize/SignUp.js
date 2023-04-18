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
  //Exercize registration 
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
//Buy clothes on site without log in 
Caruselgirlfoto(){
  return cy.get('.active > :nth-child(2) > .girl');
}
Testcasesbtn(){
  return cy.get('.active > :nth-child(1) > .test_cases_list > .btn');
}
BuyRS500(){
  return cy.get ('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn');
}
Continuebuyclick(){
  return cy.get ('.modal-footer > .btn');
}
BuyRS400(){
  return cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn');
}
CLickreturncart(){
  return cy.get ('u');
}
Imagecarthead(){
  return cy.get('.image');
}
Descriptioncarthead(){
  return cy.get ('.description');
}
Pricecarthead(){
  return cy.get ('.price');
}
Quantitycarthead(){
  return cy.get ('.quantity');
}
Totalcarthead(){
  return cy.get ('.total');
}
Itemincartwomanfoto(){
  return cy.get ('#product-1 > .cart_product > a > .product_image');
}
Descriptionvalueincart(){
  return cy.get ('#product-1 > .cart_description > h4 > a');
}
Pricevalueincart(){
  return cy.get('#product-1 > .cart_price > p');
}
Quantityvalueincart(){
  return cy.get ('#product-1 > .cart_quantity > .disabled');
}
Totalvalueincart(){
  return cy.get ('#product-1 > .cart_total > .cart_total_price');
}
Deleateclothesincart(){
  return cy.get ('#product-1 > .cart_delete > .cart_quantity_delete > .fa');
}
Procesedtocheckoutbtn(){
  return cy.get ('.col-sm-6 > .btn');
}
Checkoutheadername(){
  return cy.get ('.modal-title');
}
Loginorregistrationforcontinue(){
  return cy.get ('.modal-body > :nth-child(1)');
}
}

export const registration = new SignUp();
