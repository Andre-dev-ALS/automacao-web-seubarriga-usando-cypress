<<<<<<< HEAD
=======
/// <reference types="Cypress" />

import webActions from '../../Utility/webActions';
import WebActions from '../../Utility/webActions'
import homePage from '../home/homePage';
>>>>>>> develop
import HomePage from '../home/homePage';

class HomeLogic  {

    clicarEmSettings(){
<<<<<<< HEAD
cy.clickElement(HomePage.getBtmSettings());
=======
WebActions.click(HomePage.getBtmSettings());
>>>>>>> develop
    }

    clicarEmSair(){
        webActions.clickByXpath(homePage.getBtmSair());
    }

<<<<<<< HEAD
    
validarUsuarioLogado() {
cy.validateVisibleElementByXpath(HomePage.getLblMensagemBemVindo());
}

clicarEmSair(){
    cy.clickElementByXpath(HomePage.getBtmSair());
}
=======
validarUsuarioDeslogado(){
    webActions.validateVisibleElementByXpath(homePage.getLblLogin());
}

>>>>>>> develop
}

export default new HomeLogic;