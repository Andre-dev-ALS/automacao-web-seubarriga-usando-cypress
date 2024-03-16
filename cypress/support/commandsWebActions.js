/// <reference types="Cypress" />
  
class webActions {

    wright(element, value, tempo){
       if(tempo == 0){
        cy.get(element).type(value);
       }else{
        cy.get(element, { timeout: '"+tempo+"'}).type(value);
       }
        
    }


    click(element){
        cy.xpath(element).click()
    }


    validateText(element, value){
cy.xpath(element)
.should('visible')
.should('contain', value);
}


}  



export default new webActions;