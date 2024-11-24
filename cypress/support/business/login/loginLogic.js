/// <reference types="Cypress" />

import { expect } from "chai";
import LoginPage from "../login/loginPage"
import WebActions from '../../Utility/webActions'

class LoginLogic {

    acessarAplicacao() {
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

}

export default new LoginLogic;