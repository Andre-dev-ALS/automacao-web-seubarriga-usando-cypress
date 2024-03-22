/// <reference types="Cypress" />

import webActions from '../../Utility/webActions';
import WebActions from '../../Utility/webActions'
import homePage from '../home/homePage';
import HomePage from '../home/homePage';

class HomeLogic  {

    clicarEmSettings(){
WebActions.click(HomePage.getBtmSettings());
    }

    clicarEmSair(){
        webActions.clickByXpath(homePage.getBtmSair());
    }

validarUsuarioDeslogado(){
    webActions.validateVisibleElementByXpath(homePage.getLblLogin());
}

}

export default new HomeLogic;