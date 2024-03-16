// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
require('cypress-xpath')

// Alternatively you can use CommonJS syntax:// require('./commands')
/// <reference types="Cypress" />

after(function() {

  if(this.currentTest.state == 'passed'){
cy.screenshot(this.currentTest.title + '(passed)', {overwrite : true})
  }else{
    cy.screenshot(this.currentTest.title + '(failed)')

  }

  
})

Cypress.Screenshot.defaults({
    disableTimersAndAnimations: false // se necessário, ajuste outras configurações de captura de screenshot aqui
  });
  
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  