<<<<<<< HEAD
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
=======
/// <reference types="Cypress" />

class WebActions {

    wright(element, value, waitingTime) {
        if (waitingTime == undefined || waitingTime <= 0) {
            cy.get(element).type(value);
        } else {
            cy.get(element, { timeout: '"+waitingTime+"' }).type(value);
        }
    }

    click(element, waitingTime) {
        if (waitingTime == undefined || waitingTime <= 0) {
            cy.get(element).click();
        } else {
            cy.get(element, { timeout: '"+waitingTime+"' }).click();
        }
    }

    clickByXpath(element, waitingTime) {
        if (waitingTime == undefined || waitingTime <= 0) {
            cy.xpath(element).click();
        } else {
            cy.xpath(element, { timeout: '"+waitingTime+"' }).click();
        }
    }

    validateVisibleElementByXpath(element, waitingTime) {
        if (waitingTime == undefined || waitingTime <= 0) {
            cy.xpath(element)
                .should('visible')
        } else {
            cy.xpath(element, { timeout: '"+timeout+"' })
                .should('visible')
        }
    }


    validateText(element, value, waitingTime) {
        if (waitingTime == undefined || waitingTime <= 0) {
            cy.xpath(element)
                .should('visible')
                .should('contain', value);
        } else {
            cy.xpath(element, { timeout: '"+timeout+"' })
                .should('visible')
                .should('contain', value);
        }
    }

}

export default new WebActions;
>>>>>>> develop
