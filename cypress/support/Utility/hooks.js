/// <reference types="Cypress" />

class hooks { }

afterEach(1, function () {
  let currentDateAndTime = new Date();
  let fileName = this.currentTest.title;
  if (this.currentTest.state == 'passed') {
    cy.screenshot('passed/' + fileName + '-(passed)-' + currentDateAndTime);
  } else {
    cy.screenshot('failed/' + fileName + '-(failed)-' + currentDateAndTime);
  }
})

