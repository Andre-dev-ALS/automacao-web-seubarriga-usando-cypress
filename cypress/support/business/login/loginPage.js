/// <reference types="Cypress" />

const url = Cypress.config("baseUrl");
let txtEmail = '[data-test=email]';
let txtSenha = '[data-test=passwd]';
let btmEntrar = "//button[contains(text(), 'Entrar')]";
let lblMensagemBenvindo = "Bem vindo";

class LoginPage {

    getUrl() {
        return cy.visit(url);
    }

    getTxtEmail() {
        return txtEmail;
    }

    getTxtSenha() {
        return txtSenha;
    }

    getBtmEntrar() {
        return btmEntrar;
    }

    getMensagemBemVindo() {
        return "//*[starts-with(text(), '" + lblMensagemBenvindo + "')]";
    }

}

export default new LoginPage;