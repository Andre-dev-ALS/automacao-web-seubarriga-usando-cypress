import MovimentacaoPage from '../movimentacao/movimentacaoPage';

class MovimentacaoLogic{

    clicarEmCriarMovimentacao(){
cy.clickElement(MovimentacaoPage.getACriarMovimentacao());
    }
clicarEmTipoDeMovimentacaoReceita(){
cy.clickElement(MovimentacaoPage.getBtnTipoReceita());
}
clicarNoBotaoStatus(){
    cy.clickElement(MovimentacaoPage.getBtnStatus());
}
clicarNoBotaoSalvar(){
    cy.clickElementByXpath(MovimentacaoPage.getBtnSalvar());
}

preencherCampoDescricao(){
cy.writeInput(MovimentacaoPage.getTxtDescricao(), 'movimentação de teste');
}

preencherCampoValor(){
    cy.writeInput(MovimentacaoPage.getTxtValor(), 1000);
}

preencherCampoInteressado(){
    cy.writeInput(MovimentacaoPage.getTxtInteressado(), 'senhor barriga');
}

selecionarUmaConta(){
cy.selectOption(MovimentacaoPage.getSelectConta(), 'André');
}
validarMensagemMovimentacaoAdicionada(){
    cy.validateVisibleElementByXpath(MovimentacaoPage.getLblMovimentacaoAdicionada());
}

}

export default new MovimentacaoLogic;