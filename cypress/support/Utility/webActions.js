Cypress.Commands.add('write', (element, value, waitingTime) => {
    if (waitingTime > 0) {
        cy.get(element, { timeout: '"+waitingTime+"' })
        .type(value);
    } else {
        cy.get(element)
        .type(value);
    }
})

Cypress.Commands.add('clickElement', (element, waitingTime) => {
    if (waitingTime > 0) {
        cy.get(element, { timeout: waitingTime })
        .click();
    } else {
        cy.get(element)
        .click();
    }
})

Cypress.Commands.add('clickElementByXpath', (element, waitingTime) => {
    if (waitingTime > 0) {
        cy.xpath(element, { timeout: waitingTime })
        .click();
    } else {
        cy.xpath(element)
        .click();
    }
})

Cypress.Commands.add('validateVisibleElementByXpath', (element, waitingTime) => {    
    if (waitingTime > 0) {
        cy.xpath(element, { timeout: waitingTime })
        .should('be.visible');
    } else {
        cy.xpath(element)
            .should('visible')
    }
})
