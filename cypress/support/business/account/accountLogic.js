import AccountPage from '../account/accountPage';

class AccountLogic {

    preencherCanmpoNomeDaConta(){
        cy.writeInput(AccountPage.getTxtNomeDaConta(), AccountPage.getDataNome());
}    

preencherCanmpoNomeDaContaComNovoNome(){
        cy.writeInput(AccountPage.getTxtNomeDaConta(), AccountPage.getDataNovaConta());
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
clicarEmEditarConta(){
cy.clickElementByXpath(AccountPage.getEditarConta());
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

validarMensagemContaAlterada(){
    cy.validateVisibleElementByXpath(AccountPage.getLblContaAlterada());
}

}

export default new AccountLogic;