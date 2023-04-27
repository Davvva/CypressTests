class Marketproductcheck{
getCheckCategorywordwrite() {
    return cy.get ('.left-sidebar > :nth-child(1)');
}
getCategorywomengender(){
    return cy.get (':nth-child(1) > .panel-heading > .panel-title > a');
}
getCategorymengender(){
    return cy.get (':nth-child(2) > .panel-heading > .panel-title > a');
}
getCategorykidsgender(){
    return cy.get (':nth-child(3) > .panel-heading > .panel-title > a');
}
getWomencategorybuttnclick(){
    return cy.get (':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa');
}
getWomandresswordcheck(){
    return cy.get ('#Women > .panel-body > ul > :nth-child(1) > a');
}
getWomantopswordcheck(){
    return cy.get ('#Women > .panel-body > ul > :nth-child(2) > a');
}
getWomansareewordcheck(){
    return cy.get (".panel-body > ul > :nth-child(3) > a");
}
getWomandresstitle(){
    return cy.get('.title');
}
getWomantopstitle(){
return cy.get ('.title');
}
getWomansareetitle(){
    return cy.get ('.title');
}
getMantshirtswordcheck(){
    return cy.get ("#Men > .panel-body > ul > :nth-child(1) > a");
}
getManjeanswordcheck(){
    return cy.get ("#Men > .panel-body > ul > :nth-child(2) > a");
}
getMantshirtstitle(){
    return cy.get ('.title');
}
getManjeanstitle(){
    return cy.get('.title');
}
getKidsdressswordcheck(){
    return cy.get('#Kids > .panel-body > ul > :nth-child(1) > a');
}
getKidstopsandshirtswordcheck(){
    return cy.get ('#Kids > .panel-body > ul > :nth-child(2) > a');
}
getKidsdresstitle(){
    return cy.get ('.title');
}
getCheckbrandswordwrite(){
    return cy.get ('.brands_products > h2');
}
getCheckPolobrandname(){
    return cy.get ('.brands-name > .nav > :nth-child(1) > a');
}
getCheckhandmbrandname(){
    return cy.get (".brands-name > .nav > :nth-child(2) > a");
}
getCheckmadamebrandname(){
    return cy.get (".brands-name > .nav > :nth-child(3) > a");
}
getCheckmastandharbourbrandname(){
    return cy.get (".brands-name > .nav > :nth-child(4) > a");
}
getCheckbabyhugbrandname(){
    return cy.get('.brands-name > .nav > :nth-child(5) > a');
}
getCheckallensollyjuniorbrandname(){
    return cy.get (".brands-name > .nav > :nth-child(6) > a");
}
getCheckkookiekidsbrandname(){
    return cy.get ('.brands-name > .nav > :nth-child(7) > a');
}
getCheckbibabarandname(){
    return cy.get (".brands-name > .nav > :nth-child(8) > a");
}
getBigsalelogocheck(){
    return cy.get ('#sale_image');
}
getOpenproductspage(){
    return cy.get ('.shop-menu > .nav > :nth-child(2) > a');
}
getSearchpolo(){
    return cy.get ("#search_product");
}
getSearchbtnclick(){
    return cy.get ("#submit_search");
}
getPoloquantity(){
return cy.get ('.nav > :nth-child(1) > a > .pull-right');
}
getHandmquantity(){
    return cy.get (':nth-child(2) > a > .pull-right');
}
getMadamequantyty(){
    return cy.get (':nth-child(3) > a > .pull-right');
}
getMustandhurborquantyty(){
    return cy.get (":nth-child(4) > a > .pull-right");
}
getBabyhugquantyty(){
    return cy.get (':nth-child(5) > a > .pull-right');
}
getAllensollyjuniorquantyty(){
    return cy.get (':nth-child(6) > a > .pull-right');
}
getKookiekidsquantyty(){
    return cy.get (':nth-child(7) > a > .pull-right');
}
getBibaquantyty(){
    return cy.get (":nth-child(8) > a > .pull-right");
}
getClickvievproductbtn(){
    return cy.get (":nth-child(3) > .product-image-wrapper > .choose > .nav > li > a");
}
getProdctgirlfoto(){
    return cy.get (".view-product > img");
}
getCheckproductinformation(){
    return cy.get ('.product-information > h2');
}
getCheckbluetopclothescategory(){
    return cy.get (".product-information > :nth-child(3)");
}
getCheckcorrectpricewrite(){
    return cy.get (":nth-child(5) > span");
}
getCheckclothesquantyty(){
return cy.get("#quantity");
}
getWritenameforaddreviev(){
    return cy.get ("#name");
}
getWriteemailforaddrevie(){
   return cy.get("#email");
}
getWritereviev(){
    return cy.get ("#review");
}
getClicksubmitreviev(){
    return cy.get ("#button-review");
}
getAddtocartbtnclick(){
    return cy.get (":nth-child(5) > .btn");
}
getCheckoverlayonpage(){
    return cy.get (".overlay-content > p");
}
getWritesubscribeemail(){
    return cy.get ("#susbscribe_email");
}
getClicksubscribe(){
    return cy.get ("#subscribe");
}
getCheckproductoverlay(){
    return cy.get ('.product-overlay');
}
getCheckscrollbtn(){
    return cy.get ("#scrollUp > .fa");
}
getsale_Image() {
    return cy.get("#sale_image");
}
}
export const clothesrangecheck = new Marketproductcheck();