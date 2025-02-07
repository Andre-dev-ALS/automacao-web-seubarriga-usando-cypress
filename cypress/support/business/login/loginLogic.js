import LoginPage from "../login/loginPage"

class LoginLogic {

    acessarAplicacao() {
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
    
}

export default new LoginLogic;