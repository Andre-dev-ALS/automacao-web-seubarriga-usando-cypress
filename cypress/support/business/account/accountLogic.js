
import AccountPage from '../account/accountPage';
class AccountLogic {

    clicarEmConta(){
        cy.clickElementByXpath(AccountPage.getAConta());
    }

    preencherCanmpoNomeDaContaAleatorio(){
        cy.write(AccountPage.getTxtNomeDaConta(), ` AccountPage.getDataNome() ${Date.now()}`);
    }

    clicarEmSalvar(){
cy.clickElementByXpath(AccountPage.getBtnSalvar(), 10000);
    }
validarMensagemContaAdicionada(){
cy.validateVisibleElementByXpath(AccountPage.getLblContaAdicionada()    );
}

preencherCanmpoNomeDaConta(){
    cy.wait(500)
    cy.write(AccountPage.getTxtNomeDaConta(), AccountPage.getDataNome(), 10000);
}

validarMensagemDeErroAoTentarAdicionarUmaConta(){
    cy.validateVisibleElementByXpath(AccountPage.getLblContaJaExiste());
}

}

export default new AccountLogic;