import { clothesrangecheck } from "../pages/autoExcersize/Clothesproduct.cy";
import { buyclothes } from "../pages/autoExcersize/Shopingtestcheck.cy";
import { registration } from "../pages/autoExcersize/SignUp";
import { EXAMPLE } from "../utils/data";
let numberCountClothes, number;
describe("Shoping", () => {
  it("Check clothes category", () => {
    cy.visit(Cypress.env("globalUrl"));
    clothesrangecheck.getCheckCategorywordwrite().should("contain", "Category");
    clothesrangecheck.getCategorywomengender().should("contain", "Women");
    clothesrangecheck.getCategorymengender().should("contain", "Men");
    clothesrangecheck.getCategorykidsgender().should("contain", "Kids");
    clothesrangecheck.getWomencategorybuttnclick().click();
    clothesrangecheck.getWomandresswordcheck().should("contain", "Dress");
    clothesrangecheck.getWomantopswordcheck().should("contain", "Tops");
    clothesrangecheck.getWomansareewordcheck().should("contain", "Saree");
    clothesrangecheck.getWomandresswordcheck().click();
    clothesrangecheck
      .getWomandresstitle()
      .should("contain", "Women - Dress Products");
    clothesrangecheck.getWomencategorybuttnclick().click();
    clothesrangecheck.getWomantopswordcheck().click();
    clothesrangecheck
      .getWomantopstitle()
      .should("contain", "Women - Tops Products");
    clothesrangecheck.getWomencategorybuttnclick().click();
    clothesrangecheck.getWomansareewordcheck().click();
    clothesrangecheck
      .getWomansareetitle()
      .should("contain", "Women - Saree Products");
    clothesrangecheck.getCategorymengender().click();
    clothesrangecheck.getMantshirtswordcheck().should("contain", "Tshirts");
    clothesrangecheck.getManjeanswordcheck().should("contain", "Jeans");
    clothesrangecheck.getMantshirtswordcheck().click();
    clothesrangecheck
      .getMantshirtstitle()
      .should("contain", "Men - Tshirts Products");
    clothesrangecheck.getCategorymengender().click();
    clothesrangecheck.getManjeanswordcheck().click();
    clothesrangecheck
      .getManjeanstitle()
      .should("contain", "Men - Jeans Products");
    clothesrangecheck.getCategorykidsgender().click();
    clothesrangecheck.getKidsdressswordcheck().should("contain", "Dress");
    clothesrangecheck
      .getKidstopsandshirtswordcheck()
      .should("contain", "Tops & Shirts");
    clothesrangecheck.getKidsdressswordcheck().click();
    clothesrangecheck
      .getKidsdresstitle()
      .should("contain", "Kids - Dress Products");
    clothesrangecheck.getCategorykidsgender().click();
    clothesrangecheck.getKidstopsandshirtswordcheck().click();
    clothesrangecheck
      .getKidsdresstitle()
      .should("contain", "Kids - Tops & Shirts");
  });
  it("Check clothes brandsname", () => {
    cy.visit(Cypress.env("globalUrl"));
    clothesrangecheck.getCheckbrandswordwrite().should("contain", "Brands");
    clothesrangecheck.getCheckPolobrandname().should("contain", "Polo");
    clothesrangecheck.getCheckhandmbrandname().should("contain", "H&M");
    clothesrangecheck.getCheckmadamebrandname().should("contain", "Madame");
    clothesrangecheck
      .getCheckmastandharbourbrandname()
      .should("contain", "Mast & Harbour");
    clothesrangecheck.getCheckbabyhugbrandname().should("contain", "Babyhug");
    clothesrangecheck
      .getCheckallensollyjuniorbrandname()
      .should("contain", "Allen Solly Junior");
    clothesrangecheck
      .getCheckkookiekidsbrandname()
      .should("contain", "Kookie Kids");
    clothesrangecheck.getCheckbibabarandname().should("contain", "Biba");
    clothesrangecheck.getCheckPolobrandname().click();
    clothesrangecheck.getCheckhandmbrandname().click();
    clothesrangecheck.getCheckmadamebrandname().click();
    clothesrangecheck.getCheckmastandharbourbrandname().click();
    clothesrangecheck.getCheckbabyhugbrandname().click();
    clothesrangecheck.getCheckallensollyjuniorbrandname().click();
    clothesrangecheck.getCheckkookiekidsbrandname().click();
    clothesrangecheck.getCheckbibabarandname().click();
  });
  it("Check search string in product page", () => {
    cy.visit(Cypress.env("globalUrl"));
    clothesrangecheck.getOpenproductspage().click();
    clothesrangecheck.getBigsalelogocheck().should("be.visible");
    clothesrangecheck.getSearchpolo().type("Polo");
    clothesrangecheck.getSearchbtnclick().click();
    clothesrangecheck.getSearchpolo().clear();
    clothesrangecheck.getSearchpolo().type("Tops");
    clothesrangecheck.getSearchbtnclick().click();
    clothesrangecheck.getSearchpolo().clear();
    clothesrangecheck.getSearchpolo().type("Rs.900");
    clothesrangecheck.getSearchbtnclick().click();
    clothesrangecheck.getSearchpolo().clear();
    clothesrangecheck.getSearchpolo().type("Dres");
    clothesrangecheck.getSearchbtnclick().click();
    clothesrangecheck.getSearchpolo().clear();
    clothesrangecheck.getSearchpolo().type("Woman");
    clothesrangecheck.getSearchbtnclick().click();
    clothesrangecheck.getSearchpolo().clear();
    clothesrangecheck.getSearchpolo().type("H&M");
    clothesrangecheck.getSearchbtnclick().click();
    clothesrangecheck.getSearchpolo().clear();
    clothesrangecheck.getSearchpolo().type("Madame");
    clothesrangecheck.getSearchbtnclick().click();
    clothesrangecheck.getSearchpolo().clear();
    clothesrangecheck.getSearchpolo().type("POLO");
    clothesrangecheck.getSearchbtnclick().click();
    clothesrangecheck.getSearchpolo().clear();
    clothesrangecheck.getSearchpolo().type("Polo");
    clothesrangecheck.getSearchbtnclick().click();
    clothesrangecheck.getSearchpolo().clear();
    clothesrangecheck.getSearchpolo().type("BIbliBabliBo");
    clothesrangecheck.getSearchbtnclick().click();
  });
  it("View information for a specific product and buy it", () => {
    cy.visit(Cypress.env("globalUrl"));
    buyclothes.Loginhedearclick().click();
    buyclothes
      .getSignupNewuserName()
      .type(registration.generateRandomName(6, ""));
    buyclothes
      .getSignupNewPassword()
      .type(registration.generateRandomName(7, "@gmail.com"));
    buyclothes.getSignupLoginbutclick().click();
    registration.ClickMr().click();
    registration.Password().type(EXAMPLE.Password);
    registration.Bithday().select("13").should("have.value", "13");
    registration.Bithmonth().select("2").should("have.value", "2");
    registration.Bithyear().select("1998").should("have.value", "1998");
    registration.Newslater().click();
    registration.Recieve().click();
    registration.Firstname().type(registration.generateRandomName(7, ""));
    registration.Lastname().type(registration.generateRandomName(8, ""));
    registration.Company().type(registration.generateRandomName(7, ""));
    registration.Adress().type(registration.generateRandomName(10, ""));
    registration
      .Country()
      .select("United States")
      .should("have.value", "United States");
    registration.State().type(registration.generateRandomName(6, ""));
    registration.City().type(registration.generateRandomName(8, ""));
    registration.Zipcode().type(registration.generateRandomName(5, ""));
    registration.Mobilenumber().type(registration.generateRandomName(10, ""));
    registration.Createaccount().click();
    buyclothes.getEndregistrationclickcontinue().click();
    clothesrangecheck.getOpenproductspage().click();
    clothesrangecheck.getClickvievproductbtn().click();
    clothesrangecheck.getProdctgirlfoto().should("be.visible");
    clothesrangecheck
      .getCheckproductinformation()
      .should("contain", "Blue Top");
    clothesrangecheck
      .getCheckbluetopclothescategory()
      .should("contain", "Category: Women > Tops");
    clothesrangecheck.getCheckcorrectpricewrite().should("contain", "Rs. 500");
    clothesrangecheck.getCheckclothesquantyty().clear();
    clothesrangecheck.getCheckclothesquantyty().type("2");
    clothesrangecheck.getWritenameforaddreviev().type("Avdalyan David");
    clothesrangecheck.getWriteemailforaddrevie().type("davaautotest@gmail.com");
    clothesrangecheck
      .getWritereviev()
      .type("Good top. Verybeautyfull and confortable");
    clothesrangecheck.getClicksubmitreviev().click();
    clothesrangecheck.getAddtocartbtnclick().click();
    buyclothes.CLickreturncart().click();
    buyclothes.Imagecarthead().should("contain", "Item");
    buyclothes.Descriptioncarthead().should("contain", "Description");
    buyclothes.Pricecarthead().should("contain", "Price");
    buyclothes.Quantitycarthead().should("contain", "Quantity");
    buyclothes.Totalcarthead().should("contain", "Total");
    buyclothes.Itemincartwomanfoto().should("be.visible");
    buyclothes.Descriptionvalueincart().should("contain", "Blue Top");
    buyclothes.Pricevalueincart().should("contain", "Rs. 500");
    buyclothes.Quantityvalueincart().should("contain", "2");
    buyclothes.Totalvalueincart().should("contain", "Rs. 1000");
    buyclothes.Procesedtocheckoutbtn().click();
    buyclothes.getAddcoment().type(EXAMPLE.comment);
    buyclothes.getPlaceorderbtnclick().click();
    buyclothes.Creditcardname().type(EXAMPLE.cardname);
    buyclothes.getCardnumber().type(EXAMPLE.cardnumber);
    buyclothes.getCardcvc().type(EXAMPLE.cardcvc);
    buyclothes.getCardmonth().type(EXAMPLE.cardmonth);
    buyclothes.getCardyear().type(EXAMPLE.cardyear);
    buyclothes.getPaybutton().click();
    buyclothes.getClickcontinuebackhomepage().click();
  });
  it("Try subscribe", () => {
    cy.visit(Cypress.env("globalUrl"));
    clothesrangecheck
      .getWritesubscribeemail()
      .type(registration.generateRandomName(6, "@gmail.com"));
    clothesrangecheck.getClicksubscribe().click();
  });
  it("Compare the qunatity of the searched products", () => {
    cy.visit(Cypress.env("globalUrl"));
    clothesrangecheck.getCheckPolobrandname().click();
    clothesrangecheck
      .getPoloquantity()
      .invoke("text")
      .then(($el) => {
        numberCountClothes = $el;
        number = parseInt(numberCountClothes.slice(1, 2));
        cy.log(typeof number);
      });
    cy.get(".product-overlay").each(($el, index, $list) => {
      expect($list).to.have.length(number);
    });
    clothesrangecheck.getCheckhandmbrandname().click();
    clothesrangecheck
      .getHandmquantity()
      .invoke("text")
      .then(($el) => {
        numberCountClothes = $el;
        number = parseInt(numberCountClothes.slice(1, 2));
        cy.log(typeof number);
      });
    cy.get(".product-overlay").each(($el, index, $list) => {
      expect($list).to.have.length(number);
    });
    clothesrangecheck.getCheckmadamebrandname().click();
    clothesrangecheck
      .getMadamequantyty()
      .invoke("text")
      .then(($el) => {
        numberCountClothes = $el;
        number = parseInt(numberCountClothes.slice(1, 2));
        cy.log(typeof number);
      });
    cy.get(".product-overlay").each(($el, index, $list) => {
      expect($list).to.have.length(number);
    });
    clothesrangecheck.getCheckmastandharbourbrandname().click();
    clothesrangecheck
      .getMustandhurborquantyty()
      .invoke("text")
      .then(($el) => {
        numberCountClothes = $el;
        number = parseInt(numberCountClothes.slice(1, 2));
        cy.log(typeof number);
      });
    cy.get(".product-overlay").each(($el, index, $list) => {
      expect($list).to.have.length(number);
    });
  });
  it("Check scroll buttn", () => {
    cy.visit(Cypress.env("globalUrl"));
    cy.scrollTo("bottom");
    clothesrangecheck
      .getCheckscrollbtn()
      .click()
      .scrollTo("top", { ensureScrollable: false });
  });
});
describe("Product page Search functionality", () => {
  it.only("Searches for a brand name and compares the result", () => {
    const brandName = "Dress";
    registration.visit("products");
    clothesrangecheck.getsale_Image();
    clothesrangecheck.getSearchpolo().type(brandName);
    clothesrangecheck.getSearchbtnclick().click();
    // Get the search result and compare it to the expected result
    cy.get(".productinfo > p")
      .should("be.visible")
      .and("contain.text", "Dress");
  });
}); 