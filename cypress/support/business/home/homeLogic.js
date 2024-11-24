import HomePage from '../home/homePage';

class HomeLogic  {

    clicarEmSettings(){
cy.clickElement(HomePage.getBtmSettings());
    }

    clicarEmSair(){
        webActions.clickByXpath(homePage.getBtmSair());
    }

    
validarUsuarioLogado() {
cy.validateVisibleElementByXpath(HomePage.getLblMensagemBemVindo());
}

clicarEmSair(){
    cy.clickElementByXpath(HomePage.getBtmSair());
}
}

export default new HomeLogic;