

Cypress.Commands.add('write', (element, value, waitingTime) => {
    if (waitingTime == undefined || waitingTime <= 0) {
        cy.get(element).type(value);
    } else {
        cy.get(element, { timeout: '"+waitingTime+"' }).type(value);
    }

})
Cypress.Commands.add('clickElement', (element, waitingTime) => {
    if (waitingTime == undefined || waitingTime <= 0) {
        cy.get(element).click();
    } else {
        cy.get(element, { timeout: '"+waitingTime+"' }).click();
    }
})


Cypress.Commands.add('clickElementByXpath', (element, waitingTime) => {
    if (waitingTime == undefined || waitingTime <= 0) {
        cy.xpath(element).click();
    } else {
        cy.xpath(element, { timeout: '"+waitingTime+"' }).click();
    }
})

Cypress.Commands.add('validateVisibleElementByXpath', (element, waitingTime) =>{if (waitingTime == undefined || waitingTime <= 0) {
        cy.xpath(element)
            .should('visible')
    } else {
        cy.xpath(element, { timeout: '"+timeout+"' })
            .should('visible')
    }
})
