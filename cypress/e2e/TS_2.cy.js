describe('SignIn', () => {
  it('Verify login functionally with valid credentials', () => {
    cy.visit('https://eu.wargaming.net/registration/ru/?game=wot&style=dark&sid=SID4wNVBxYotSwWy0Of7bovAjtFD9HN565Q0xNrPL9gS6kDHkgDZ5lFhgGT6e4U6i2PG2yNgsUMQi8YgjGb0Rvyj0cjPdDywTUMXdK6ANeql30PRPk2c4XW4yqZUnqM1VMwzYzKc2Qt38kYOXSTuV9fZTy8C_U2q9L7vgpJb9QK31_7_kCp&yclid=15340745630903697407&_gl=1*1q3jvnz*_ga*MjAzNjYwNDg3LjE2ODA3OTY2ODc.*_ga_BWRKLL4HR5*MTY4MDc5NjY4Ny4xLjAuMTY4MDc5NjY4Ny4wLjAuMA..&_ga=2.245955399.2115543920.1680796687-203660487.1680796687/');
    cy.get('#id_login').type('davidik936@yandex.ru');
    cy.get('#id_name').type('Chudillla_Mudilka');
    cy.get('#id_password').type('soRRRtin5101316');
    cy.get('#id_re_password').type('soRRRtin5101316');
    cy.get(':nth-child(1) > .checkbox-game-label').click();
    cy.get(':nth-child(2) > .checkbox-game-label').click();
    cy.get('.b-big-button').click();
  }  )})
 
  it('with incorrect data', () => {
    cy.get('#id_login').type('');
    cy.get('#id_name').type('Chudillla_Mudilka');
    cy.get('#id_password').type('soRRRtin5101316');
    cy.get('#id_re_password').type('soRRRtin5101316');
    cy.get(':nth-child(1) > .checkbox-game-label').click();
    cy.get(':nth-child(2) > .checkbox-game-label').click();
    cy.get('.b-big-button').should('have.css, #da4900' );
  })