import AccountPage from '../account/accountPage';

class AccountLogic {

    preencherCanmpoNomeDaConta(){
        cy.writeInput(AccountPage.getTxtNomeDaConta(), AccountPage.getDataNome());
}    

    clicarEmConta(){
        cy.clickElementByXpath(AccountPage.getAConta());
    }

    clicarEmSalvar(){
        cy.clickElementByXpath(AccountPage.getBtnSalvar());
    }

    clicarEmDeletarConta(){
        cy.clickElementByXpath(AccountPage.getADeletarConta());
    }    
    
    clicarEmFecharAlerta(){
        cy.clickElementByXpath(AccountPage.getBtnFecharAlerta());
    }
    
validarMensagemContaAdicionada(){
cy.validateVisibleElementByXpath(AccountPage.getLblContaAdicionada()    );
}

validarMensagemDeErroAoTentarAdicionarUmaConta(){
    cy.validateVisibleElementByXpath(AccountPage.getLblContaJaExiste());
}

validarMensagemContaDeletada(){
    cy.validateVisibleElementByXpath(AccountPage.getLblContaDeletada());
}

}

export default new AccountLogic;