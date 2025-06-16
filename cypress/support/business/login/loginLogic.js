import LoginPage from "../login/loginPage"

class LoginLogic {

    acessarAplicacao() {
        cy.visit(LoginPage.getUrl());
    }

    preencherCampoEmail() {
cy.writeInput(LoginPage.getTxtEmail(), 'emailparatestesautomacao@gmail.com');
    }

    preencherCampoSenha() {
        cy.writeInput(LoginPage.getTxtSenha(), 'automacaoteste', 5000);
    }

    clicarEmEntrar() {
        cy.clickElementByXpath(LoginPage.getBtmEntrar(), 5000);
    }

    validarUsuarioDeslogado(){
        cy.validateVisibleElementByXpath(LoginPage.getLblLogin());
    }    
    
}

export default new LoginLogic;