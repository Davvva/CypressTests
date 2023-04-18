class Shopingcheck{
//Buywithoutlogin
Caruselgirlfoto(){
    return cy.get('.active > :nth-child(2) > .girl');
  }
  Testcasesbtn(){
    return cy.get('.active > :nth-child(1) > .test_cases_list > .btn');
  }
  Apilistforpractise(){
    return cy.get ('.active > :nth-child(1) > .apis_list > .btn');
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
    return cy.get ('#product-1 > .cart_delete > .cart_quantity_delete');
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
  Loginregistrationbtn(){
    return cy.get ('.modal-body > :nth-child(2) > a > u');
  }
  Loginhedearclick(){
    return cy.get ('.shop-menu > .nav > :nth-child(4) > a');
  }
  loginyouraccountemail(){
    return cy.get ('[data-qa="login-email"]');
  }
  Loginyouraccountpassword(){
    return cy.get ('[data-qa="login-password"]');
  }
  Loginbtnclick(){
    return cy.get ('[data-qa="login-button"]');
  }
  getSignupNewuserName(){
    return cy.get ('[data-qa="signup-name"]');
  }
  getSignupNewPassword(){
    return cy.get('[data-qa="signup-email"]');
  }
  getSignupLoginbutclick(){
    return cy.get ('[data-qa="signup-button"]');
  }
  getSigninEmailwrite(){
    return cy.get ('[data-qa="login-email"]');
  }
  getSigninpasswordwrite(){
    return cy.get ('[data-qa="login-password"]');
  }
 getEndregistrationclickcontinue(){
  return cy.get ('[data-qa="continue-button"]');
 }
 getAddcoment(){
  return cy.get ('.form-control');
 }
 getPlaceorderbtnclick(){
  return cy.get (':nth-child(7) > .btn');
 }
 Creditcardname(){
  return cy.get('[data-qa="name-on-card"]');
 }
 getCardnumber(){
  return cy.get ('[data-qa="card-number"]');
 }
 getCardcvc(){
  return cy.get('[data-qa="cvc"]');
 }
 getCardmonth(){
  return cy.get('[data-qa="expiry-month"]');
 }
 getCardyear(){
  return cy.get('[data-qa="expiry-year"]');
 }
 getPaybutton(){
  return cy.get('[data-qa="pay-button"]');
 }
 getDownloadinvoicebtn(){
  return cy.get(".col-sm-9 > .btn-default");
 }
 getClickcontinuebackhomepage(){
  return cy.get ('[data-qa="continue-button"]');
 }
 }

export const buyclothes = new Shopingcheck();