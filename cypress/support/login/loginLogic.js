/// <reference types="Cypress" />

import { expect } from "chai";
import loginPage from "../login/loginPage"
import webActions from '../webActions'

class loginLogic {

    acessarAplicacao() {
        
        loginPage.getUrl();
    }

    preencherCampoEmail() {
        webActions.wright(loginPage.getTxtEmail(), 'emailparatestesautomacao@gmail.com', 5000);
    }

    preencherCampoSenha() {
        webActions.wright(loginPage.getTxtSenha(), 'automacaoteste');
    }

    clicarEmEntrar() {
        webActions.click(loginPage.getBtmEntrar());
    }

    validarUsuarioLogado() {
        webActions.validateText(loginPage.getMensagemBemVindo(), 'Bem vindo');
    }

}

export default new loginLogic;