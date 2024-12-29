import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import AccountLogic from '../account/accountLogic';

When('clico em Conta', () =>{
    AccountLogic.clicarEmConta();
})

When('preencho o campo Nome da conta', () =>{
    AccountLogic.preencherCanmpoNomeDaConta();
})

When('clico no botão Salvar', () => {
    AccountLogic.clicarEmSalvar();
})

Then('é mostrada uma mensagem de conta adicionada com sucesso', () => {
  AccountLogic.validarMensagemContaAdicionada();  
})