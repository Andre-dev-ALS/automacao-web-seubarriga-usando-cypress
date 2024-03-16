/// <reference types="Cypress" />

import { expect } from "chai";
import loginPage from "../login/loginPage"
import webActions from '../commandsWebActions'

class loginLogic {

    acessarAplicacao(){
        loginPage.getUrl();
    }
    
    preencherCampoEmail(){
webActions.wright(loginPage.getTxtEmail(), 'emailparatestesautomacao@gmail.com', 5000);
    }

    preencherCampoSenha(){
//cy.wright(loginPage.getTxtSenha(), 'automacaoteste')
        webActions.wright(loginPage.getTxtSenha(), 'automacaoteste');
    }
    clicarEmEntrar(){
        //cy.click(loginPage.getBtmEntrar());
        webActions.click(loginPage.getBtmEntrar());
}
validarUsuarioLogado(){
webActions.validateText(loginPage.getMensagemBemVindo(), 'Bem vindo');


   
}    

}
export default new loginLogic;