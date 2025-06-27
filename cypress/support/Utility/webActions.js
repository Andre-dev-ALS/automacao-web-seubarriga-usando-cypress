let timeout = 0;

Cypress.Commands.add('writeInput', (element, value, waitingTime = 0) => {
    timeout = Number(waitingTime) > 0 ? Number(waitingTime) : undefined;

    cy.get(element, { timeout })
        .should('exist')
        .should('be.visible')
        .clear()
        .type(value);
});

Cypress.Commands.add('clickElement', (element, waitingTime) => {
    timeout = Number(waitingTime) > 0 ? Number(waitingTime) : undefined;

    cy.get(element, { timeout })
        .should('exist')
        .should('be.visible')
        .click();
})

Cypress.Commands.add('clickElementByXpath', (element, waitingTime) => {
    timeout = Number(waitingTime) > 0 ? Number(waitingTime) : undefined;

    cy.xpath(element, { timeout })
        .should('exist')
        .should('be.visible')
        .click();
})

Cypress.Commands.add('selectOption', (element, value, waitingTime) => {
    timeout = Number(waitingTime) > 0 ? Number(waitingTime) : undefined;
console.log(value)
    cy.get(element, { timeout })
        .should('exist')
        .should('be.visible')
        .select(value);
})

Cypress.Commands.add('validateVisibleElementByXpath', (element, waitingTime) => {
    timeout = Number(waitingTime) > 0 ? Number(waitingTime) : undefined;

    cy.xpath(element, { timeout })
        .should('exist')
        .should('be.visible')
})