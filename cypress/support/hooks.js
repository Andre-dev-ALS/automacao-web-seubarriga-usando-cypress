/// <reference types="Cypress" />

class hooks{}

after(1, function() {
  if(this.currentTest.state == 'passed'){
cy.screenshot(this.currentTest.title + '(passed)', {overwrite : true})
  }else{
    cy.screenshot(this.currentTest.title + '(failed)')
  }  
})

