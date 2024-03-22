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
            cy.xpath(element).click();
        } else {
            cy.xpath(element, { timeout: '"+waitingTime+"' }).click();
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