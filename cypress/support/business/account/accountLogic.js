
import AccountPage from '../account/accountPage';
class AccountLogic {

    clicarEmConta(){
        cy.clickElementByXpath(AccountPage.getAConta());
    }

    preencherCanmpoNomeDaConta(){
        cy.write(AccountPage.getTxtNomeDaConta(), `andré${Date.now()}`);
    }

    clicarEmSalvar(){
cy.clickElementByXpath(AccountPage.getBtnSalvar());
    }
validarMensagemContaAdicionada(){
cy.validateVisibleElementByXpath(AccountPage.getLblContaAdicionada()    );
}

}

export default new AccountLogic;