/* global Given, Then, When */
Cypress.on('uncaught:exception', () => false)

import {Given, Then, When, And} from "cypress-cucumber-preprocessor/steps"
import loginLogic from '../login/loginLogic';


Given("que o usuário acessa o site do seubarrigareact", () => {
    loginLogic.acessarAplicacao();
    } 
)

When("preencho o campo email", () =>{
loginLogic.preencherCampoEmail();
}
)

When("preencho o campo senha", () =>{
loginLogic.preencherCampoSenha();
}
)

When("clico em Entrar", () =>{
  loginLogic.clicarEmEntrar();  
})

Then("o usuário é redirecionado  a tela inicial já logado", () => {
  loginLogic.validarUsuarioLogado();
})

