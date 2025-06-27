import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import MovimentacaoLogic from '../movimentacao/movimentacaoLogic';

When('clica em Cadastrar Movimentação', () =>{
MovimentacaoLogic.clicarEmCriarMovimentacao();
})

When('clica em tipo da conta receita', () =>{
    MovimentacaoLogic.clicarEmTipoDeMovimentacaoReceita();
})

When('preenche o campo descrição', () => {
    MovimentacaoLogic.preencherCampoDescricao();
})

When('preenche o campo valor', () =>{
    MovimentacaoLogic.preencherCampoValor();
})

When('preenche o campo interessado', () => {
    MovimentacaoLogic.preencherCampoInteressado();
})

When('seleciono uma conta', () =>{
    MovimentacaoLogic.selecionarUmaConta();
})

When('clica no botão status para trocar o status para paga', () =>{
MovimentacaoLogic.clicarNoBotaoStatus();
})

When('clica em salvar', () =>{
    MovimentacaoLogic.clicarNoBotaoSalvar();
})

Then('é mostrada uma mensagem de movimentação adicionada, e o usuário é redirecionado para a tela de estrato', () =>{
MovimentacaoLogic.validarMensagemMovimentacaoAdicionada();
})
