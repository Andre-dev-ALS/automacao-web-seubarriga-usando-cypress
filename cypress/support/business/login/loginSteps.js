<<<<<<< HEAD
import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import LoginLogic from '../login/loginLogic';


=======
/* global Given, Then, When */
Cypress.on('uncaught:exception', () => false)
import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import LoginLogic from '../login/loginLogic';

>>>>>>> develop
Given("que o usuário acessa o site do seubarrigareact", () => {
  LoginLogic.acessarAplicacao();
}
)

When("preencho o campo email", () => {
  LoginLogic.preencherCampoEmail();
}
)

When("preencho o campo senha", () => {
  LoginLogic.preencherCampoSenha();
}
)

When("clico em Entrar", () => {
  LoginLogic.clicarEmEntrar();
})

<<<<<<< HEAD
Then('é validado que o usuário foi redirecionado   a tela de login já desconectado', () =>{
  LoginLogic.validarUsuarioDeslogado();
})
=======
Then("o usuário é redirecionado  a tela inicial já logado", () => {
  LoginLogic.validarUsuarioLogado();
})

>>>>>>> develop
