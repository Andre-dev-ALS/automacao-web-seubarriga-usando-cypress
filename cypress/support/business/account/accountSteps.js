import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import AccountLogic from '../account/accountLogic';

When('clica em Conta', () =>{
    AccountLogic.clicarEmConta();
})

When('clica no botão Salvar', () => {
    AccountLogic.clicarEmSalvar();
})

When('clica no botão × para fechar o alerta de conta adicionada', () => {
AccountLogic.clicarEmFecharAlerta();
})

When('clica novamente no botão Salvar', () => {
    AccountLogic.clicarEmSalvar();
})
When('preenche o campo Nome da conta', () =>{
    AccountLogic.preencherCanmpoNomeDaConta();
})


Then('é mostrada uma mensagem de conta adicionada com sucesso', () => {
    AccountLogic.validarMensagemContaAdicionada();  
  })

Then('na tela é mostrada uma mensagem de erro', () => {
AccountLogic.validarMensagemDeErroAoTentarAdicionarUmaConta();
})

Then('é mostrada uma mensagem de conta deletada com sucesso', () => {
    AccountLogic.validarMensagemContaDeletada();
})

When('clica em excluir na conta que foi adicionada', () =>{
AccountLogic.clicarEmDeletarConta();
})