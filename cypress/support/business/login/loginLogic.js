<<<<<<< HEAD
import LoginPage from "../login/loginPage"
=======
/// <reference types="Cypress" />

import { expect } from "chai";
import LoginPage from "../login/loginPage"
import WebActions from '../../Utility/webActions'
>>>>>>> develop

class LoginLogic {

    acessarAplicacao() {
<<<<<<< HEAD
        cy.visit(LoginPage.getUrl());
    }

    preencherCampoEmail() {

cy.write(LoginPage.getTxtEmail(), 'emailparatestesautomacao@gmail.com');
    }

    preencherCampoSenha() {
        cy.write(LoginPage.getTxtSenha(), 'automacaoteste', 5000);
    }

    clicarEmEntrar() {
        cy.clickElementByXpath(LoginPage.getBtmEntrar(), 5000);
    }

    validarUsuarioDeslogado(){
        cy.validateVisibleElementByXpath(LoginPage.getLblLogin());
    }    
    
=======
        LoginPage.getUrl();
    }

    preencherCampoEmail() {
        WebActions.wright(LoginPage.getTxtEmail(), 'emailparatestesautomacao@gmail.com', 5000);
    }

    preencherCampoSenha() {
        WebActions.wright(LoginPage.getTxtSenha(), 'automacaoteste');
    }

    clicarEmEntrar() {
        WebActions.clickByXpath(LoginPage.getBtmEntrar());
    }

    validarUsuarioLogado() {
        WebActions.validateText(LoginPage.getMensagemBemVindo(), 'Bem vindo');
    }

>>>>>>> develop
}

export default new LoginLogic;